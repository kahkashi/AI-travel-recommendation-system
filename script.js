document.addEventListener("DOMContentLoaded", function () {

    console.log("TravelGenie JS loaded successfully! 🧞‍♀️✨");


    /* ==================================================
       BUTTONS
    ================================================== */

    const exploreButton =
        document.getElementById("exploreButton");

    const startJourney =
        document.getElementById("startJourney");


    exploreButton.addEventListener("click", function () {

        document
            .getElementById("explore")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


    startJourney.addEventListener("click", function () {

        document
            .getElementById("explore")
            .scrollIntoView({
                behavior: "smooth"
            });

    });



    /* ==================================================
       DESTINATION DATA
    ================================================== */

    const destinations = {

        aesthetic: {

            title: "Pretty places made for your vibe 🌸",

            subtitle:
                "Palaces, colours, lakes and dreamy views.",

            places: [

                {
                    name: "Udaipur",
                    icon: "🏰",
                    activities:
                        "Lake Pichola • City Palace • Sajjangarh"
                },

                {
                    name: "Jaipur",
                    icon: "🌸",
                    activities:
                        "Hawa Mahal • Amer Fort • Patrika Gate"
                },

                {
                    name: "Mysuru",
                    icon: "✨",
                    activities:
                        "Mysore Palace • Brindavan Gardens"
                },

                {
                    name: "Shillong",
                    icon: "🌿",
                    activities:
                        "Umiam Lake • Laitlum Canyon"
                },

                {
                    name: "Jodhpur",
                    icon: "💙",
                    activities:
                        "Mehrangarh Fort • Blue City • Jaswant Thada"
                }

            ]

        },


        mountains: {

            title: "Escape to the mountains 🏔️",

            subtitle:
                "Fresh air, peaceful hills and cosy weather.",

            places: [

                {
                    name: "Manali",
                    icon: "🏔️",
                    activities:
                        "Solang Valley • Old Manali • Hadimba Temple"
                },

                {
                    name: "Shimla",
                    icon: "🌲",
                    activities:
                        "Mall Road • Kufri • The Ridge"
                },

                {
                    name: "Mussoorie",
                    icon: "☁️",
                    activities:
                        "Kempty Falls • Mall Road • Gun Hill"
                },

                {
                    name: "Darjeeling",
                    icon: "☕",
                    activities:
                        "Tiger Hill • Tea Gardens • Batasia Loop"
                },

                {
                    name: "Gangtok",
                    icon: "🏔️",
                    activities:
                        "Tsomgo Lake • MG Marg • Nathula Pass"
                }

            ]

        },


        beach: {

            title: "Sun, sand & good vibes 🌊",

            subtitle:
                "Beach days, sunsets and unforgettable fun.",

            places: [

                {
                    name: "Goa",
                    icon: "🌴",
                    activities:
                        "Baga Beach • Fort Aguada • Anjuna"
                },

                {
                    name: "Puducherry",
                    icon: "🌊",
                    activities:
                        "White Town • Promenade • Paradise Beach"
                },

                {
                    name: "Varkala",
                    icon: "🐚",
                    activities:
                        "Varkala Beach • Cliff • Local Cafés"
                },

                {
                    name: "Kochi",
                    icon: "⛵",
                    activities:
                        "Fort Kochi • Marine Drive • Chinese Nets"
                },

                {
                    name: "Mumbai",
                    icon: "🌅",
                    activities:
                        "Marine Drive • Gateway of India • Juhu"
                }

            ]

        },


        heritage: {

            title: "Stories, culture & history 🕌",

            subtitle:
                "Explore India's incredible heritage.",

            places: [

                {
                    name: "Varanasi",
                    icon: "🪔",
                    activities:
                        "Ghats • Ganga Aarti • Old City"
                },

                {
                    name: "Agra",
                    icon: "🤍",
                    activities:
                        "Taj Mahal • Agra Fort • Mehtab Bagh"
                },

                {
                    name: "Hampi",
                    icon: "🏛️",
                    activities:
                        "Virupaksha Temple • Hampi Bazaar • Ruins"
                },

                {
                    name: "Amritsar",
                    icon: "✨",
                    activities:
                        "Golden Temple • Jallianwala Bagh • Wagah Border"
                },

                {
                    name: "Delhi",
                    icon: "🏰",
                    activities:
                        "Red Fort • India Gate • Humayun's Tomb"
                }

            ]

        },


        different: {

            title: "Let's go somewhere different ✨",

            subtitle:
                "Unique destinations for a trip to remember.",

            places: [

                {
                    name: "Tawang",
                    icon: "🏔️",
                    activities:
                        "Monastery • Sela Pass • Tawang Lake"
                },

                {
                    name: "Cherrapunji",
                    icon: "🌧️",
                    activities:
                        "Waterfalls • Living Root Bridges • Caves"
                },

                {
                    name: "Coorg",
                    icon: "🌿",
                    activities:
                        "Coffee Plantations • Abbey Falls • Madikeri"
                },

                {
                    name: "Alappuzha",
                    icon: "🚤",
                    activities:
                        "Backwaters • Houseboats • Alappuzha Beach"
                },

                {
                    name: "Jaisalmer",
                    icon: "🏜️",
                    activities:
                        "Golden Fort • Sam Sand Dunes • Desert Safari"
                }

            ]

        }

    };



    /* ==================================================
       ELEMENTS
    ================================================== */

    const vibeCards =
        document.querySelectorAll(".vibe-card");

    const destinationContainer =
        document.getElementById("destinationContainer");

    const destinationTitle =
        document.getElementById("destinationTitle");

    const destinationSubtitle =
        document.getElementById("destinationSubtitle");

    const destinationSection =
        document.getElementById("destinationSection");

    const planButton =
            document.getElementById("planButton");
    const detailsButton =
            document.getElementById("detailsButton");


    let selectedDestination = null;



    /* ==================================================
       VIBE CARD CLICK
    ================================================== */

    vibeCards.forEach(function (card) {

        card.addEventListener("click", function () {

            /* Remove active from all cards */

            vibeCards.forEach(function (item) {

                item.classList.remove("active");

            });


            /* Add active to clicked card */

            card.classList.add("active");


            /* Get vibe */

            const vibe =
                card.getAttribute("data-vibe");


            /* Show destinations */

            showDestinations(vibe);

        });

    });



    /* ==================================================
       SHOW DESTINATIONS
    ================================================== */


function showDestinations(vibe) {

        const data =
            destinations[vibe];



        if (!data) {
            return;
        }


        /* Reset selected destination */

        selectedDestination = null;


        /* Hide plan button */

        planButton.classList.remove("show");


        /* Change heading */

        destinationTitle.textContent =
            data.title;


        destinationSubtitle.textContent =
            data.subtitle;


        /* Clear old cards */

        destinationContainer.innerHTML = "";


        /* Create destination cards */

        data.places.forEach(function (place) {

            const card =
                document.createElement("div");


            card.className =
                "destination-card";


            card.innerHTML = `

                <div class="destination-icon">
                    ${place.icon}
                </div>

                <h3>
                    ${place.name}
                </h3>

                <p>
                    ${place.activities}
                </p>

                <div class="selected-label">
                    ✓ Selected
                </div>

            `;


            /* Destination click */

            card.addEventListener("click", function () {

                /* Remove selection from other cards */

                document
                    .querySelectorAll(".destination-card")
                    .forEach(function (item) {

                        item.classList.remove("selected");

    });

                /* Select current card */

                card.classList.add("selected");


                /* Save destination */

                selectedDestination =
                    place.name;


                /* Show plan button */

                planButton.classList.add("show");


                planButton.textContent =
                    `Plan my ${place.name} trip ✨`;

            });


            destinationContainer.appendChild(card);

        });


        /* Scroll down to destinations */

        setTimeout(function () {

            destinationSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 150);

    }



    /* ==================================================
       PLAN TRIP BUTTON
    ================================================== */

    planButton.addEventListener("click", function () {

        if (!selectedDestination) {
            return;
        }

        // Find activities for the selected city
        let activitiesStr = "";
        for (const vibeKey in destinations) {
            const vibeData = destinations[vibeKey];
            const place = vibeData.places.find(p => p.name === selectedDestination);
            if (place) {
                activitiesStr = place.activities;
                break;
            }
        }
        const activityList = activitiesStr
            ? activitiesStr.split("•").map(a => a.trim()).filter(Boolean)
            : [];

        // Build a simple 4‑day itinerary
        const days = [];
        for (let i = 0; i < 4; i++) {
            const act = activityList[i] || "Explore the city";
            days.push(`Day ${i + 1}: ${act}`);
        }

        const planMessage = `🗓️ 4-Day Travel Plan for ${selectedDestination}\n\n` + days.join("\n") + "\n\nEnjoy your trip!";

        alert(planMessage);

    });



    // Show places for selected city
    detailsButton.addEventListener("click", function () {
        if (!selectedDestination) {
            alert("Please select a city first.");
            return;
        }

        // Find the place object
        let placeObj = null;
        for (const vibeKey in destinations) {
            const vibeData = destinations[vibeKey];
            const found = vibeData.places.find(p => p.name === selectedDestination);
            if (found) {
                placeObj = found;
                break;
            }
        }

        if (!placeObj) {
            alert("No details available.");
            return;
        }

        // Populate places section (show up to 10 places – currently data has up to 5)
        const placesContainer = document.getElementById("placesContainer");
        const placesCityName = document.getElementById("placesCityName");
        placesCityName.textContent = selectedDestination;
        placesContainer.innerHTML = "";

        // Use the activities string to create a list of attractions
        const activities = placeObj.activities.split("•").map(a => a.trim()).filter(Boolean);
        activities.slice(0, 10).forEach(act => {
            const div = document.createElement("div");
            div.className = "place-card";
            div.innerHTML = `<div class="place-icon">${placeObj.icon}</div><p>${act}</p>`;
            placesContainer.appendChild(div);
        });

        // Show the places section and hide the main explore section
        document.getElementById("explore").style.display = "none";
        document.getElementById("destinationSection").style.display = "none";
        document.getElementById("placesSection").style.display = "block";
    });

    // Back button to return
    document.getElementById("backButton").addEventListener("click", function () {
        document.getElementById("placesSection").style.display = "none";
        document.getElementById("explore").style.display = "block";
        document.getElementById("destinationSection").style.display = "block";
    });

    /* ==================================================
       MOUSE PARALLAX
    ================================================== */

    const mountains =
        document.querySelectorAll(".mountain");

    const sun =
        document.querySelector(".sun");


    document.addEventListener("mousemove", function (event) {

        const x =
            (event.clientX / window.innerWidth) - 0.5;

        const y =
            (event.clientY / window.innerHeight) - 0.5;


        mountains.forEach(function (mountain, index) {

            const movement =
                (index + 1) * 8;


            mountain.style.transform =
                `translate(
                    ${x * movement}px,
                    ${y * movement}px
                )
                scale(
                    ${1.2 + index * 0.08}
                )`;

        });


        if (sun) {

            sun.style.transform =
                `translate(
                    ${x * 15}px,
                    ${y * 15}px
                )`;

        }

    });


});