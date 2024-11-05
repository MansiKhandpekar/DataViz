// URL for the GeoJSON file
const geojsonURL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

// Define center data with state abbreviations
const centersData = [
    { name: "UTHealth", state: "TX", category: "study site", shortname: "CCHC", lat: 29.7604, lon: -95.3698, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula sit amet risus non convallis." },
    { name: "Vanderbilt University Medical Center", state: "TN", category: "study site", shortname: "CCHC", lat: 36.1627, lon: -86.7816, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." },
    { name: "University of North Carolina", state: "NC", category: "study site", shortname: "CCHC", lat: 35.9049, lon: -79.0469, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { name: "Columbia University", state: "NY", category: "study site", shortname: "Columbia-CKD", lat: 40.8075, lon: -73.9626, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { name: "University of California San Francisco", state: "CA", category: "study site", shortname: "EXPAND-Asthma", lat: 37.7749, lon: -122.4194, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { name: "University of Southern California", state: "CA", category: "study site", shortname: "LEON", lat: 34.0224, lon: -118.2851, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { name: "University of California San Diego", state: "CA", category: "study site", shortname: "MOM-Health", lat: 32.8801, lon: -117.2340, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sit amet est et sapien ullamcorper pharetra." },
    { name: "University of Washington", state: "WA", category: "data analysis coordination center", shortname: "DACC", lat: 47.6553, lon: -122.3035, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis." },
    { name: "University of Massachusetts Chan Medical School", state: "MA", category: "data analysis coordination center", shortname: "DACC", lat: 42.2626, lon: -71.8023, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consectetuer vestibulum elit." },
    { name: "Boston University", state: "MA", category: "study site", shortname: "UIC-DKD", lat: 42.3601, lon: -71.0589, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim." },
    { name: "University of Illinois Chicago", state: "IL", category: "study site", shortname: "UIC-DKD", lat: 41.8708, lon: -87.6505, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus." },
    { name: "Washington University", state: "MO", category: "omics production center", shortname: "OPC", lat: 38.6488, lon: -90.3108, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst." },
    { name: "Stanford University", state: "CA", category: "data analysis coordination center", shortname: "DACC", lat: 37.4275, lon: -122.1697, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non enim eleifend felis pretium feugiat." }
];

// Set dimensions of the SVG container
const width = 1000;
const height = 600;

// Create SVG in the #map div
const svg = d3.select("#map").append("svg")
    .attr("width", width + 50)
    .attr("height", height + 50)
    .attr("class", "map-svg")
    .style("border-radius", "8px")
    .style("background-color", "#DAE9FA"); // Move styles to CSS

// Tooltip setup
const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip"); // Move styles to CSS

// Description container setup
const descriptionContainer = d3.select("body").append("div")
    .attr("id", "description-container")
    .style("margin", "20px auto")
    .style("max-width", "800px")
    .style("font-family", "'Montserrat','Helvetica Light', Arial, sans-serif");

// Load GeoJSON data
d3.json(geojsonURL).then(data => {
    const states = topojson.feature(data, data.objects.states);

    const projection = d3.geoAlbersUsa()
        .scale(1200)
        .translate([width / 1.9, height / 2]);

    const path = d3.geoPath().projection(projection);

    // Draw each state with transition effect
    svg.selectAll("path")
        .data(states.features)
        .enter().append("path")
        .attr("class", "state")
        .attr("d", path)

    // Draw markers for universities as SVG icons
    svg.selectAll("g.university-marker")
        .data(centersData)
        .enter().append("g")
        .attr("class", "university-marker")
        .attr("transform", d => `translate(${projection([d.lon, d.lat])})`)
        .each(function (d) {
            const markerGroup = d3.select(this);

            markerGroup.append("svg:image")
                .attr("xlink:href", "images/location-pin.svg")
                .attr("width", 24)
                .attr("height", 24)
                .attr("x", -12)
                .attr("y", -24);
        })
        .on("mouseover", function (event, d) {
            tooltip.classed("visible", true)
                .html(
                    `<div><strong>${d.shortname}</strong></div>` +
                    `<div style="text-align: left;">${d.name}</div>` +
                    `<div>State: <strong>${d.state}</strong></div>` 
                    // `<div>Description: <strong>${d.description}</strong></div>`
                );
            d3.select(this).select("image").classed("hovered-marker", true);
        })
        .on("mousemove", function (event) {
            tooltip.style("top", (event.pageY - 15) + "px")
                .style("left", (event.pageX + 15) + "px");
        })
        .on("mouseout", function () {
            tooltip.classed("visible", false);
            d3.select(this).select("image").classed("hovered-marker", false);
        });

    // Highlight function for specific category
    function highlightCategory(category) {
        if (category === "all") {
            d3.selectAll("#controls button").classed("active", false);
            d3.select("#all-btn").classed("active", true);

            // Show all states and markers
            svg.selectAll("path").attr("class", "state").style("fill", "#B3CCE9");
            svg.selectAll("g.university-marker").style("visibility", "visible");
            updateDescription(centersData);
            return;
        }

        // Remove active class from all buttons
        d3.selectAll("#controls button").classed("active", false);

        // Add active class to the correct button based on the category
        const formattedCategory = category.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
        d3.select(`#${formattedCategory}-btn`).classed("active", true);

        // Highlight the map elements based on the category with transition effect
        svg.selectAll("path")
            .attr("class", d => {
                const stateId = d.id;
                const state = centersData.find(c => c.state === stateIdToAbbr(stateId) && c.category.toLowerCase() === category.toLowerCase());
                return state ? "state highlighted-state" : "state";
            })
            .style("fill", d => {
                const stateId = d.id;
                const state = centersData.find(c => c.state === stateIdToAbbr(stateId) && c.category.toLowerCase() === category.toLowerCase());
                return state ? "#0F2B4C" : "#B3CCE9";
            })
            .style("transition", "fill 0.5s ease");

        // Highlight the markers based on the category
        svg.selectAll("g.university-marker")
            .style("visibility", d => d.category.toLowerCase() === category.toLowerCase() ? "visible" : "hidden");

        // Update description with relevant centers
        const filteredCenters = centersData.filter(center => center.category.toLowerCase() === category.toLowerCase());
        updateDescription(filteredCenters);
    }

    // Helper function to convert FIPS code to state abbreviation
    function stateIdToAbbr(fips) {
        const fipsToAbbr = {
            "01": "AL", "02": "AK", "04": "AZ", "05": "AR", "06": "CA", "08": "CO", "09": "CT", "10": "DE", "11": "DC",
            "12": "FL", "13": "GA", "15": "HI", "16": "ID", "17": "IL", "18": "IN", "19": "IA", "20": "KS", "21": "KY",
            "22": "LA", "23": "ME", "24": "MD", "25": "MA", "26": "MI", "27": "MN", "28": "MS", "29": "MO", "30": "MT",
            "31": "NE", "32": "NV", "33": "NH", "34": "NJ", "35": "NM", "36": "NY", "37": "NC", "38": "ND", "39": "OH",
            "40": "OK", "41": "OR", "42": "PA", "44": "RI", "45": "SC", "46": "SD", "47": "TN", "48": "TX", "49": "UT",
            "50": "VT", "51": "VA", "53": "WA", "54": "WV", "55": "WI", "56": "WY"
        };
        return fipsToAbbr[fips] || null;
    }

    // Button click events to activate category highlighting
    d3.select("#study-site-btn")
        .on("click", () => highlightCategory("study site"));

    d3.select("#omics-production-center-btn")
        .on("click", () => highlightCategory("omics production center"));

    d3.select("#data-analysis-coordination-center-btn")
        .on("click", () => highlightCategory("data analysis coordination center"));

    d3.select("#all-btn")
        .on("click", () => highlightCategory("all"));

    // Update the description container with the list of centers
    function updateDescription(centers) {
        descriptionContainer.html(''); // Clear previous descriptions
        centers.forEach(center => {
            descriptionContainer.append('div')
                .attr('class', 'center-description')
                .html(
                    `<strong>${center.shortname}</strong><br>` +
                    // `Category: ${center.category}<br>` +
                    // `State: ${center.state}<br>` +
                    `Description: ${center.description}<br><br>`
                );
        });
    }

});
