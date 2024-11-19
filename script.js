// URL for the GeoJSON file
const geojsonURL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';

// Define center data with state abbreviations
const centersData = [
    {
        name: "UTHealth",
        state: "TX",
        category: "study site",
        title: "The Cameron County Hispanic Cohort (CCHC)",
        shortname: "CCHC",
        lat: 26.05476,
        lon: -97.50540,
        description: "Obesity-associated disease of the liver is a common and significant condition in the Mexican American Community. This study seeks to identify possible genes and their related elements that are associated with susceptibility and progression of liver disease in participants randomly chosen from the CCHC. We anticipate this could lead to identifying targets for intervention in this condition as well as identifying elements we could use for identifying those at high risk before they develop significant liver disease.",
        leadership: "Leadership: Joseph McCormick (UTHealth), Piper Below (Vanderbilt University Medical Center) & Kari North (University of North Carolina)"
    },

    {
        name: "Vanderbilt University Medical Center",
        state: "TN",
        category: "study site",
        title: "The Cameron County Hispanic Cohort (CCHC)",
        shortname: "CCHC",
        lat: 36.1627,
        lon: -86.7816,
        description: "",
        leadership: ""
    },

    {
        name: "University of North Carolina",
        state: "NC",
        category: "study site",
        title: "The Cameron County Hispanic Cohort (CCHC)",
        shortname: "CCHC",
        lat: 35.9049,
        lon: -79.0469,
        description: "",
        leadership: ""
    },

    {
        name: "Columbia University",
        state: "NY",
        category: "study site",
        title: "Columbia University Chronic Kidney Disease (Columbia-CKD)",
        shortname: "Columbia-CKD",
        lat: 40.8075,
        lon: -73.9626,
        description: "Chronic Kidney Disease (CKD) is a common, complex condition associated with many complications and high mortality that disproportionately affects African American and Hispanic communities. As part of the Multi-omics in Health and Disease consortium, we will establish a CKD Disease Study Site to evaluate if multi-omic approaches can improve precision medicine and promote equity in CKD care in ancestrally diverse populations.", leadership: "Leadership: Krzysztof Kiryluk (Columbia University)"
    },

    {
        name: "University of California San Francisco",
        state: "CA",
        category: "study site",
        title: "Exposomic Profiling in Airway disease to uNravel Determinants of Asthma (EXPAND-Asthma)",
        shortname: "EXPAND-Asthma",
        lat: 38.1999,
        lon: -122.4194,
        description: "Asthma is the most common chronic disease of childhood, however disease burden is disproportionately higher in communities of color and of low socioeconomic status. Socio-environmental exposures, including psychosocial stressors and air pollution, are concentrated in these historically marginalized communities and contribute to asthma pathobiology through poorly understood mechanisms. Our goal is to improve our understanding of heterogeneous asthma pathobiology associated with socio-environmental exposures, relevant to marginalized populations, allowing us to better discriminate individuals at high risk for poor outcomes and identify place-based targets for intervention.",
        labelPosition: { x: 10, y: -10 },
        leadership: "Leadership: Stephanie Christenson & Neeta Thakur (University of California San Francisco)"
    },

    {
        name: "University of Southern California",
        state: "CA",
        category: "study site",
        title: "Longitudinal integration of environmental exposures, omics, and childhood NAFLD (LEON)",
        shortname: "LEON",
        lat: 34.0224,
        lon: -118.2851,
        description: "Our transdisciplinary study is the largest and most comprehensive study on environmental exposures and the underlying mechanisms driving NAFLD risk and NAFLD progression that result in health disparities in Latino children. We will integrate state-of-the-art omics signatures using data science approaches to identify robust molecular profiles that are associated with NAFLD across different disease progression stages. Findings will contribute evidence to inform precision prevention strategies for NAFLD in high-risk populations.",
        leadership: "Leadership: Lida Chatzi & Max Aung (University of Southern California)"
    },

    {
        name: "University of California San Diego",
        state: "CA",
        category: "study site",
        title: "Multi-Omics for Maternal Health (MOM-Health)",
        shortname: "MOM-Health",
        lat: 32.8801,
        lon: -117.2340,
        description: "The Multi-Omics for Maternal Health after PE (MOM-Health) Disease Study Site aims to use multi-omic analyses of biosamples matched with comprehensive clinical and demographic information and measures of environmental exposures before and after delivery to uncover mechanisms leading from preeclampsia and other hypertensive diseases of pregnancy to cardiovascular disease following delivery in a diverse population. We strive to generate knowledge that can be used to develop strategies to predict patients at risk for later cardiovascular disease and to develop preventative therapies, improving postpartum maternal health in those most at risk for long-term morbidity and mortality.",
        leadership: "Leadership: Louise Laurent & Marni Jacobs (University of California San Diego), Kathryn Lindley (Vanderbilt University Medical Center)"
    },

    {
        name: "University of Washington",
        state: "WA",
        category: "data analysis coordination center",
        title: "Data Analysis and Coordination Center (DACC)",
        shortname: "DACC",
        lat: 47.6553,
        lon: -122.3035,
        description: "Our project aims to establish a data analysis and coordination center to coordinate and support the Consortium’s activities and maximize its success. The center will manage consortium data, coordinate and contribute to protocol development and data analysis, create a multi-dimensional dataset and a data portal, and provide outreach to disseminate consortium results.",
        leadership: "Leadership: Zhiping Weng (University of Massachusetts Chan Medical School), Anshul Kundaje (Stanford University) & Bill Noble (University of Washington)"
    },

    {
        name: "University of Massachusetts Chan Medical School",
        state: "MA",
        category: "data analysis coordination center",
        title: "Data Analysis and Coordination Center (DACC)",
        shortname: "DACC",
        lat: 42.2626,
        lon: -71.8023,
        description: "Our project aims to establish a data analysis and coordination center to coordinate and support the Consortium’s activities and maximize its success. The center will manage consortium data, coordinate and contribute to protocol development and data analysis, create a multi-dimensional dataset and a data portal, and provide outreach to disseminate consortium results.",
        leadership: "Leadership: Zhiping Weng (University of Massachusetts Chan Medical School), Anshul Kundaje (Stanford University) & Bill Noble (University of Washington)"
    },

    {
        name: "Boston University",
        state: "MA",
        category: "study site",
        title: "University of Illinois Chicago Diabetes and Kidney Disease (UIC-DKD)",
        shortname: "UIC-DKD",
        lat: 42.3601,
        lon: -71.0589,
        description: "Our goal is to establish a diabetes and kidney disease study site (DSS) comprised of 300 racially and ethnically diverse participants, including 200 with diabetes (half with kidney disease) and 100 healthy controls. Our DSS will be part of a collaborative initiative with an overall mission to advance the application of integrative multi-omics technologies to study health and disease in ancestrally diverse populations.", labelPosition: { x: 10, y: -10 },
        leadership: "Leadership: Tanika Kelly (University of Illinois Chicago), Maria Argos (Boston University) & Ana Ricardo (University of Illinois Chicago)"
    },

    {
        name: "University of Illinois Chicago",
        state: "IL",
        category: "study site",
        title: "University of Illinois Chicago Diabetes and Kidney Disease (UIC-DKD)",
        shortname: "UIC-DKD",
        lat: 41.8708,
        lon: -87.6505,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.",
        leadership: ""
    },

    {
        name: "Washington University",
        state: "MO",
        category: "omics production center",
        title: "'Omics Production Center (OPC)",
        shortname: "OPC",
        lat: 38.6488,
        lon: -90.3108,
        description: "We propose to establish the Washington University Omics Production Center (WU-omics PC) as part of the Multi-Omics for Health and Disease Consortium. The WU-omics PC will profile human genes, proteins, and metabolites by using six different omics profiling technologies. The integration of these omics datasets and others will improve our understanding of human health and potentially lead to new strategies for the early detection, prevention, and treatment of disease in ancestrally diverse populations.",
        leadership: "Leadership: Gary Patti & Ting Wang (Washington University St. Louis)"
    },

    {
        name: "Stanford University",
        state: "CA",
        category: "data analysis coordination center",
        title: "Data Analysis and Coordination Center (DACC)",
        shortname: "DACC",
        lat: 37.4275,
        lon: -122.1697,
        description: "Our project aims to establish a data analysis and coordination center to coordinate and support the Consortium’s activities and maximize its success. The center will manage consortium data, coordinate and contribute to protocol development and data analysis, create a multi-dimensional dataset and a data portal, and provide outreach to disseminate consortium results.",
        leadership: "Leadership: Zhiping Weng (University of Massachusetts Chan Medical School), Anshul Kundaje (Stanford University) & Bill Noble (University of Washington)"
    }
];

// Set dimensions of the SVG container
const width = 1000;
const height = 600;

// Create SVG in the #map div
const svg = d3.select("#map").append("svg")
    .attr("viewBox", `0 0 ${width} ${height}`) // Added viewBox to make the SVG responsive
    .attr("preserveAspectRatio", "xMidYMid meet") // Keeps the map centered and maintains aspect ratio
    .attr("width", width + 50)
    .attr("height", height + 50)
    .attr("class", "map-svg")
    .style("border-radius", "8px")
    .style("background-color", "#DAE9FA");

// Tooltip setup
const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip");

// Description container setup
const descriptionContainer = d3.select("body").append("div")
    .attr("id", "description-container")
    .style("margin", "20px auto")
    .style("max-width", "1000px")
    .style("font-family", "'Montserrat','Helvetica Light', Arial, sans-serif");

// Load GeoJSON data
d3.json(geojsonURL).then(data => {
    const states = topojson.feature(data, data.objects.states);

    const projection = d3.geoAlbersUsa()
        .scale(1200)
        .translate([width / 1.9, height / 2]);

    const path = d3.geoPath().projection(projection);

    // Draw each state
    svg.selectAll("path")
        .data(states.features)
        .enter().append("path")
        .attr("class", "state")
        .attr("d", path);

    // Draw markers for universities as SVG icons with different custom SVGs
    svg.selectAll("g.university-marker")
        .data(centersData)
        .enter().append("g")
        .attr("class", "university-marker")
        .attr("transform", d => `translate(${projection([d.lon, d.lat])})`)
        .each(function (d) {
            const markerGroup = d3.select(this);

            // Set SVG path based on category
            let svgPath;
            switch (d.shortname) {
                case "CCHC":
                    svgPath = "images/CCHC.svg";
                    break;
                case "Columbia-CKD":
                    svgPath = "images/Columbia-CKD.svg";
                    break;
                case "EXPAND-Asthma":
                    svgPath = "images/EXPAND-Asthma.svg";
                    break;
                case "LEON":
                    svgPath = "images/LEON.svg";
                    break;
                case "MOM-Health":
                    svgPath = "images/MOM-Health.svg";
                    break;
                case "UIC-DKD":
                    svgPath = "images/UIC-DKD.svg";
                    break;
                case "DACC":
                    svgPath = "images/DACC.svg";
                    break;
                case "OPC":
                    svgPath = "images/OPC.svg";
                    break;
                default:
                    svgPath = "images/default-marker.svg"; // Default SVG if any
            }

            // Append marker icon
            markerGroup.append("svg:image")
                .attr("xlink:href", svgPath)
                .attr("width", 24)
                .attr("height", 24)
                .attr("x", -12) // Center the marker
                .attr("y", -24); // Align with the bottom

            // Append text label for each marker
            markerGroup.append("text")
                .attr("x", d.labelPosition?.x ?? 10)
                .attr("y", d.labelPosition?.y ?? 5)
                // .attr("x", 10) // Adjust the x position relative to the marker
                // .attr("y", 5)  // Adjust the y position relative to the marker
                .attr("class", "marker-label hidden-label")
                .text(d.shortname)
                .style("font-size", "12px")
                .style("font-family", "'Montserrat', 'Helvetica Light', Arial, sans-serif")
                .style("fill", "#0F2B4C") // Dark blue color for visibility
                .style("pointer-events", "none"); // Prevent text from blocking marker interactions
        })
        .on("mouseover", function (event, d) {
            tooltip.classed("visible", true)
                .html(
                    `<div><strong>${d.title}</strong></div>` +
                    `<div style="text-align: left;">${d.name}</div>` 
                    // + `<div>State: <strong>${d.state}</strong></div>`
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

    // Set default view to "all"
    highlightCategory("all");

    // Highlight function for specific category
    function highlightCategory(category) {
        if (category === "all") {
            d3.selectAll("#controls button").classed("active", false);
            d3.select("#all-btn").classed("active", true);

            // Show all states and markers
            svg.selectAll("path").attr("class", "state").style("fill", "#B3CCE9");
            svg.selectAll("g.university-marker").style("visibility", "visible");
            svg.selectAll("text.marker-label").classed("hidden-label", false); // Show labels
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

        // Hide labels when a specific category is selected
        svg.selectAll("text.marker-label").classed("hidden-label", true); // Hide labels

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
    // function updateDescription(centers) {
    //     descriptionContainer.html(''); // Clear previous descriptions
    //     centers.forEach(center => {
    //         descriptionContainer.append('div')
    //             .attr('class', 'center-description')
    //             .html(
    //                 `<strong>${center.shortname}</strong><br>` +
    //                 `Description: ${center.description}<br><br>`
    //             );
    function updateDescription(centers) {
        // Get unique shortnames and descriptions
        const uniqueCenters = [];
        const shortnamesSeen = new Set();

        centers.forEach(center => {
            if (!shortnamesSeen.has(center.shortname)) {
                shortnamesSeen.add(center.shortname);
                uniqueCenters.push(center);
            }
        });

        // Update description container
        descriptionContainer.html(''); // Clear previous descriptions
        uniqueCenters.forEach(center => {
            descriptionContainer.append('div')
                .attr('class', 'center-description')
                .html(
                    `<h3 class='center-title'>${center.title}</h3>`+
                    `<h4 class='center-leadership'>${center.leadership}</h4>` +
                    `<p class='center-text'>${center.description}</p>`
                );
        });
    }

});