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

    const destinationAttractions = {
        "Goa": [
            { name: "Baga Beach", description: "A vibrant beach known for its lively nightlife, water sports, and golden sand.", category: "Beach" },
            { name: "Fort Aguada", description: "A 17th-century Portuguese fort overlooking the Arabian Sea with a historic lighthouse.", category: "Fort" },
            { name: "Anjuna Beach", description: "Famous for its bohemian vibe, flea market, and laid-back beach culture.", category: "Beach" },
            { name: "Basilica of Bom Jesus", description: "A UNESCO World Heritage Site holding the mortal remains of St. Francis Xavier.", category: "Culture" },
            { name: "Dudhsagar Falls", description: "A majestic tiered waterfall surrounded by lush Western Ghats rainforest.", category: "Nature" },
            { name: "Chapora Fort", description: "A scenic fort ruin offering panoramic views of the Chapora River and coastline.", category: "Fort" },
            { name: "Calangute Beach", description: "The most popular beach in Goa with plenty of shacks, restaurants, and water activities.", category: "Beach" },
            { name: "Museum of Christian Art", description: "A unique museum showcasing Christian art across centuries in a beautiful convent setting.", category: "Culture" }
        ],
        "Puducherry": [
            { name: "White Town", description: "Charming French colonial district with colorful buildings, cafes, and boutique shops.", category: "Heritage" },
            { name: "Promenade Beach", description: "A scenic seaside promenade perfect for evening walks and watching the sunrise.", category: "Beach" },
            { name: "Paradise Beach", description: "A secluded crescent-shaped beach reachable by boat, ideal for relaxation.", category: "Beach" },
            { name: "Auroville", description: "An international intentional community focused on human unity and sustainable living.", category: "Culture" },
            { name: "Sri Aurobindo Ashram", description: "A peaceful spiritual ashram with beautiful gardens and meditation halls.", category: "Culture" },
            { name: "Rock Beach", description: "A rocky coastline with interesting geological formations and tide pools.", category: "Nature" },
            { name: "French War Memorial", description: "A memorial honoring French soldiers who died in World War I, located on Goubert Avenue.", category: "Heritage" },
            { name: "Botanical Garden", description: "A lush green garden with rare plant species and a serene lake.", category: "Nature" }
        ],
        "Varkala": [
            { name: "Varkala Beach", description: "A stunning cliff beach with natural springs, red laterite cliffs, and Arabian Sea views.", category: "Beach" },
            { name: "Papanasam Beach", description: "A sacred beach believed to wash away sins, with a peaceful temple nearby.", category: "Culture" },
            { name: "Janardanaswamy Temple", description: "An ancient Hindu temple dedicated to Lord Vishnu with intricate carvings.", category: "Culture" },
            { name: "Varkala Cliff", description: "A dramatic laterite cliff overlooking the sea, lined with cafes and shops.", category: "Nature" },
            { name: "Kappil Beach", description: "A quieter beach at the mouth of the Kappil river, great for sunset views.", category: "Beach" },
            { name: "Anjengo Fort", description: "An old British East India Company fort with historical significance.", category: "Fort" },
            { name: "Ponnumthuruthu Island", description: "A small island in the Vellayani Lake known for its snake boats and greenery.", category: "Nature" },
            { name: "Varkala Tunnel", description: "A historic 790-meter tunnel built during the Travancore era for canal transport.", category: "Heritage" }
        ],
        "Kochi": [
            { name: "Fort Kochi", description: "A historic neighborhood with Portuguese, Dutch, and British colonial architecture.", category: "Heritage" },
            { name: "Marine Drive", description: "A scenic waterfront promenade along the Arabian Sea, popular for evening walks.", category: "Beach" },
            { name: "Chinese Fishing Nets", description: "Iconic large fishing nets unique to Kochi, offering spectacular sunset views.", category: "Culture" },
            { name: "Mattancherry Palace", description: "A Portuguese-built palace known for its Kerala murals and colonial artifacts.", category: "Culture" },
            { name: "Ernakulam Wharf", description: "A bustling commercial wharf with a mix of old and new Kochi.", category: "Culture" },
            { name: "Paradesi Synagogue", description: "One of the oldest active synagogues in the Commonwealth, located in Mattancherry.", category: "Culture" },
            { name: "Kerala Folklore Museum", description: "A three-story museum showcasing Kerala's cultural heritage through artifacts.", category: "Culture" },
            { name: "Willingdon Island", description: "The largest artificial island in India, home to the Port of Kochi and naval base.", category: "Heritage" }
        ],
        "Mumbai": [
            { name: "Gateway of India", description: "An iconic arch-monument built in the 20th century, Mumbai's most famous landmark.", category: "Heritage" },
            { name: "Marine Drive", description: "A 3.6-kilometer promenade along the Arabian Sea, known as the Queen's Necklace.", category: "Beach" },
            { name: "Taj Mahal Palace Hotel", description: "A historic luxury hotel next to the Gateway of India, an architectural masterpiece.", category: "Culture" },
            { name: "Elephanta Caves", description: "UNESCO World Heritage caves with ancient Hindu rock-cut temples on an island.", category: "Culture" },
            { name: "Juhu Beach", description: "A popular urban beach with street food, families, and city skyline views.", category: "Beach" },
            { name: "Haji Ali Dargah", description: "A mosque and tomb on a small islet, connected to the mainland by a causeway.", category: "Culture" },
            { name: "Siddhivinayak Temple", description: "A deeply revered Hindu temple dedicated to Lord Ganesha in South Mumbai.", category: "Culture" },
            { name: "Chhatrapati Shivaji Terminus", description: "A UNESCO World Heritage Victorian Gothic railway station and architectural icon.", category: "Heritage" }
        ],
        "Udaipur": [
            { name: "Lake Pichola", description: "A scenic artificial lake surrounded by hills, palaces, and ghats.", category: "Nature" },
            { name: "City Palace", description: "A grand palace complex on the east bank of Lake Pichola, blending Rajput and Mughal styles.", category: "Culture" },
            { name: "Sajjangarh Palace", description: "A hilltop palace offering panoramic views of Udaipur and the surrounding lakes.", category: "Heritage" },
            { name: "Jag Mandir", description: "A beautiful island palace in Lake Pichola with gardens and marble architecture.", category: "Culture" },
            { name: "Saheliyon Ki Bari", description: "A garden with lotus pools, marble elephants, and musical fountains built for queen's companions.", category: "Culture" },
            { name: "Fateh Sagar Lake", description: "A serene lake surrounded by hills, great for boating and picnics.", category: "Nature" },
            { name: "Bagore Ki Haveli", description: "A historic haveli on Lake Pichola showcasing Rajasthani art and artifacts.", category: "Heritage" },
            { name: "Shilpgram", description: "A rural arts and crafts complex showcasing traditional Rajasthani and tribal art.", category: "Culture" }
        ],
        "Jaipur": [
            { name: "Hawa Mahal", description: "The iconic Palace of Winds with 953 small windows overlooking the city.", category: "Heritage" },
            { name: "Amer Fort", description: "A majestic hilltop fort with Sheesh Mahal (Mirror Palace) and grand courtyards.", category: "Fort" },
            { name: "Patrika Gate", description: "A colorful and intricately carved gate in the Pink City, a popular photo spot.", category: "Heritage" },
            { name: "Jantar Mantar", description: "A UNESCO World Heritage astronomical observation site with massive instruments.", category: "Culture" },
            { name: "Nahargarh Fort", description: "A fort on the Aravalli hills offering stunning sunset views over Jaipur.", category: "Fort" },
            { name: "City Palace", description: "A royal palace complex still partially occupied by the Jaipur royal family.", category: "Culture" },
            { name: "Galtaji Temple", description: "An ancient Hindu pilgrimage site with natural springs and carved temple halls.", category: "Culture" },
            { name: "Birla Mandir", description: "A modern white marble temple dedicated to Lord Vishnu with carvings of historical figures.", category: "Culture" }
        ],
        "Mysuru": [
            { name: "Mysore Palace", description: "The grand royal palace of the Wadiyar dynasty, illuminated on weekends.", category: "Culture" },
            { name: "Brindavan Gardens", description: "A terraced garden across the Krishna Raja Sagara dam with musical fountains.", category: "Nature" },
            { name: "Chamundi Hills", description: "A hill range with a temple at the top offering views of Mysore city.", category: "Nature" },
            { name: "St. Philomena's Church", description: "One of the largest churches in India, built in Gothic style with stained glass.", category: "Culture" },
            { name: "Karanji Lake", description: "A serene lake surrounded by a nature park and walking trails.", category: "Nature" },
            { name: " Mysore Zoo", description: "One of India's oldest and most popular zoos with a wide variety of species.", category: "Nature" },
            { name: "Ranganathittu Bird Sanctuary", description: "A bird sanctuary on the Kaveri River hosting thousands of migratory birds.", category: "Nature" },
            { name: "Jayalakshmi Vilas Mansion", description: "A restored palace mansion now a museum of wealth and artifacts.", category: "Heritage" }
        ],
        "Shillong": [
            { name: "Umiam Lake", description: "A picturesque artificial lake surrounded by green hills, great for water sports.", category: "Nature" },
            { name: "Laitlum Canyon", description: "A breathtaking canyon with rolling green hills and dramatic cliff edges.", category: "Nature" },
            { name: "Khasi Hills", description: "Lush hills home to the Khasi tribe with unique living root bridges.", category: "Nature" },
            { name: "Shillong Peak", description: "The highest point in Shillong offering panoramic views of the city and valleys.", category: "Nature" },
            { name: "Don Bosco Museum", description: "A museum showcasing the culture and traditions of Northeast India.", category: "Culture" },
            { name: "Cathedral of Mary Help", description: "A beautiful Gothic-style cathedral and iconic Shillong landmark.", category: "Culture" },
            { name: "Ward's Lake", description: "A small lake with a garden and boating facilities in the heart of the city.", category: "Nature" },
            { name: "Madanmohan Temple", description: "A historic temple dedicated to Lord Krishna, a peaceful spot in the city.", category: "Culture" }
        ],
        "Manali": [
            { name: "Solang Valley", description: "A valley famous for adventure sports like paragliding, zorbing, and skiing.", category: "Adventure" },
            { name: "Old Manali", description: "A charming village with narrow lanes, cafés, and a hippie vibe.", category: "Culture" },
            { name: "Hadimba Temple", description: "A 16th-century wooden temple dedicated to Goddess Hadimba, surrounded by cedar forests.", category: "Culture" },
            { name: "Rohtang Pass", description: "A high mountain pass offering snow views and access to the Lahaul and Spiti valleys.", category: "Nature" },
            { name: "Beas River", description: "A scenic river running through Manali, great for river rafting and picnics.", category: "Nature" },
            { name: "Vashisht Hot Springs", description: "Natural hot water springs believed to have therapeutic properties.", category: "Nature" },
            { name: "Naggar Castle", description: "A historic castle with a view of the Kullu Valley, now a heritage hotel.", category: "Heritage" },
            { name: "Jogini Waterfall", description: "A beautiful waterfall near Vashisht village, reachable by a short hike.", category: "Nature" }
        ],
        "Shimla": [
            { name: "Mall Road", description: "The main promenade of Shimla, lined with shops, restaurants, and colonial buildings.", category: "Culture" },
            { name: "Kufri", description: "A hill station known for skiing, horse riding, and Himalayan views.", category: "Nature" },
            { name: "The Ridge", description: "A cultural hub and open-air theater in the heart of Shimla.", category: "Culture" },
            { name: "Jakhoo Temple", description: "A hilltop temple dedicated to Lord Hanuman, the highest point in Shimla.", category: "Culture" },
            { name: "Christ Church", description: "A beautiful neo-Gothic church on the Ridge, one of Shimla's oldest landmarks.", category: "Culture" },
            { name: "Summer Hill", description: "A quiet hilltop area with a temple and panoramic views of the valley.", category: "Nature" },
            { name: "Himalayan Nature Park", description: "A wildlife park at Kufri with Himalayan animals and scenic trails.", category: "Nature" },
            { name: "Annandale", description: "A scenic spot surrounded by deodar forests, home to Shimla's race course.", category: "Nature" }
        ],
        "Mussoorie": [
            { name: "Kempty Falls", description: "A popular waterfall with natural pools, surrounded by forested hills.", category: "Nature" },
            { name: "Gun Hill", description: "The second-highest point in Mussoorie with panoramic Himalayan views.", category: "Nature" },
            { name: "Mall Road", description: "The main street of Mussoorie, lined with shops and colonial-era buildings.", category: "Culture" },
            { name: "Camel's Back Road", description: "A scenic walkway named for its rock formation resembling a camel's back.", category: "Nature" },
            { name: "Gun Hill (Canoneers' Rock)", description: "A historic spot where a cannon was fired to mark noon during British era.", category: "Heritage" },
            { name: "Cloud's End", description: "The edge of Mussoorie where the Mall Road ends, with views of the Doon Valley.", category: "Nature" },
            { name: "Jwalaji Temple", description: "A temple on a hilltop with a natural natural-gas flame, dedicated to Goddess Jwala.", category: "Culture" },
            { name: "Picture Palace", description: "A historic cinema hall on the Mall Road, a landmark of Mussoorie.", category: "Culture" }
        ],
        "Darjeeling": [
            { name: "Tiger Hill", description: "The most famous viewpoint in Darjeeling, offering sunrise views of Kangchenjunga.", category: "Nature" },
            { name: "Tea Gardens", description: "Sprawling tea plantations where you can watch tea being plucked and processed.", category: "Nature" },
            { name: "Batasia Loop", description: "A scenic hairpin bend with a war memorial and panoramic Himalayan views.", category: "Nature" },
            { name: "Ghoom Monastery", description: "A Buddhist monastery near Tiger Hill, one of the oldest in the Darjeeling area.", category: "Culture" },
            { name: "Happy Valley", description: "A tea garden and park with views of the town and surrounding hills.", category: "Nature" },
            { name: "Japanese Temple", description: "A peaceful temple built by the Japanese Buddhist community in Darjeeling.", category: "Culture" },
            { name: "Observatory Hill", description: "A hilltop with views of the town and a Shiva temple.", category: "Nature" },
            { name: "Tenzing and Gombu Rock", description: "A rock formation at Tiger Hill marking where Tenzing Norgay and Edmund Hillary stood.", category: "Heritage" }
        ],
        "Gangtok": [
            { name: "Tsomgo Lake", description: "An alpine lake surrounded by snow-capped mountains, frozen in winter.", category: "Nature" },
            { name: "MG Marg", description: "The main pedestrian street of Gangtok, filled with shops and restaurants.", category: "Culture" },
            { name: "Nathula Pass", description: "A mountain pass on the Indo-China border offering dramatic views.", category: "Nature" },
            { name: "Enchey Monastery", description: "A Buddhist monastery on a hilltop with views of the Kanchendzonga.", category: "Culture" },
            { name: "Rumtek Monastery", description: "The largest monastery in Gangtok, a center of Tibetan Buddhism.", category: "Culture" },
            { name: "Ranka Monastery", description: "A newer monastery with a large statue of Guru Rinpoche and gardens.", category: "Culture" },
            { name: "Flower Show", description: "A seasonal flower exhibition at the Ridge showcasing Himalayan flora.", category: "Nature" },
            { name: "Hanuman Tok", description: "A temple dedicated to Lord Hanuman on a hilltop with city views.", category: "Culture" }
        ],
        "Varanasi": [
            { name: "Ghats", description: "Over 80 ghats along the Ganges, each with its own history and spiritual significance.", category: "Culture" },
            { name: "Ganga Aarti", description: "A daily evening prayer ceremony at Dashashwamedh Ghat with fire and chanting.", category: "Culture" },
            { name: "Old City", description: "A maze of narrow lanes, ancient temples, and bustling markets.", category: "Culture" },
            { name: "Kashi Vishwanath Temple", description: "One of the most sacred Hindu temples dedicated to Lord Shiva.", category: "Culture" },
            { name: "Sarnath", description: "Where Buddha gave his first sermon, with ancient stupas and a deer park.", category: "Culture" },
            { name: "Manikarnika Ghat", description: "The primary cremation ghat, a deeply spiritual and historic site.", category: "Culture" },
            { name: "Tulsi Manas Temple", description: "A temple where Ramcharitmanas was written, with verses inscribed on walls.", category: "Culture" },
            { name: "Durga Temple", description: "A red-stone temple dedicated to Goddess Durga, also known as the Monkey Temple.", category: "Culture" }
        ],
        "Agra": [
            { name: "Taj Mahal", description: "The iconic white marble mausoleum, a UNESCO World Heritage Site and symbol of love.", category: "Heritage" },
            { name: "Agra Fort", description: "A massive red sandstone fort with palaces, mosques, and views of the Taj Mahal.", category: "Fort" },
            { name: "Mehtab Bagh", description: "A garden complex across the Yamuna River with the best Taj Mahal sunset views.", category: "Nature" },
            { name: "Itimad-ud-Daulah", description: "Often called the 'Baby Taj', a beautiful marble tomb with intricate inlay work.", category: "Heritage" },
            { name: "Fatehpur Sikri", description: "A deserted Mughal city made of red sandstone, once the empire's capital.", category: "Heritage" },
            { name: "Kinari Bazaar", description: "A traditional market street selling leather goods, textiles, and souvenirs.", category: "Culture" },
            { name: "Sikandra", description: "The tomb of Emperor Akbar, blending Hindu, Islamic, and Christian styles.", category: "Heritage" },
            { name: "Chini Ka Rauza", description: "A unique tomb decorated with glazed tiles, dedicated to Afzal Khan.", category: "Heritage" }
        ],
        "Hampi": [
            { name: "Virupaksha Temple", description: "An active Hindu temple and the main pilgrimage site in Hampi.", category: "Culture" },
            { name: "Hampi Bazaar", description: "A historic trade street leading to the temple complex.", category: "Culture" },
            { name: "Ruins", description: "Extensive ruins of the Vijayanagara Empire spread across the landscape.", category: "Heritage" },
            { name: "Vittala Temple Complex", description: "Famous for the musical pillars and the iconic stone chariot.", category: "Culture" },
            { name: "Hemakuta Hill", description: "A hill with ancient boulder formations, temples, and panoramic views.", category: "Nature" },
            { name: "Tungabhadra Dam", description: "A major dam offering scenic views and picnic spots.", category: "Nature" },
            { name: "Elephant Stables", description: "Impressive structures where the Vijayanagara kings kept their elephants.", category: "Heritage" },
            { name: "Queen's Bath", description: "A large rectangular bathing tank with arcaded corridors.", category: "Heritage" }
        ],
        "Amritsar": [
            { name: "Golden Temple", description: "The holiest Sikh gurdwara, surrounded by a sacred pool and offering free meals.", category: "Culture" },
            { name: "Jallianwala Bagh", description: "A historic public garden commemorating the 1919 massacre.", category: "Heritage" },
            { name: "Wagah Border", description: "The India-Pakistan border crossing with a daily flag-lowering ceremony.", category: "Culture" },
            { name: "Akal Takht", description: "The highest seat of temporal Sikh authority, opposite the Golden Temple.", category: "Culture" },
            { name: "Jama Masjid", description: "A grand mosque in the old city, one of the largest in northern India.", category: "Culture" },
            { name: "Mata Mandir", description: "A Hindu temple dedicated to Goddess Durga, popular with devotees.", category: "Culture" },
            { name: "Partition Museum", description: "A museum documenting the human cost of India's 1947 partition.", category: "Heritage" },
            { name: "Ram Bagh", description: "A historic garden and summer palace of Maharaja Ranjit Singh.", category: "Nature" }
        ],
        "Delhi": [
            { name: "Red Fort", description: "A UNESCO World Heritage Site and iconic Mughal fort in Old Delhi.", category: "Heritage" },
            { name: "India Gate", description: "A war memorial arch honoring Indian soldiers, a city landmark.", category: "Heritage" },
            { name: "Humayun's Tomb", description: "A UNESCO World Heritage Site and precursor to the Taj Mahal.", category: "Heritage" },
            { name: "Qutub Minar", description: "The tallest brick minaret in the world, part of a historic mosque complex.", category: "Heritage" },
            { name: "Lotus Temple", description: "A Bahá'í House of Worship shaped like a lotus flower.", category: "Culture" },
            { name: "Akshardham Temple", description: "A grand Hindu temple complex with exhibitions, gardens, and sculptures.", category: "Culture" },
            { name: "Chandni Chowk", description: "Old Delhi's bustling market street with street food and historic sites.", category: "Culture" },
            { name: "Lodhi Gardens", description: "A peaceful park with Mughal-era tombs and gardens in the city center.", category: "Nature" }
        ],
        "Tawang": [
            { name: "Monastery", description: "The largest monastery in India and second largest in the world, a center of Tibetan Buddhism.", category: "Culture" },
            { name: "Sela Pass", description: "A high mountain pass at 13,700 feet with lakes and dramatic views.", category: "Nature" },
            { name: "Tawang Lake", description: "A serene high-altitude lake surrounded by mountains.", category: "Nature" },
            { name: "Nuranang Falls", description: "A picturesque waterfall in the Tawang district.", category: "Nature" },
            { name: "Jang Waterfalls", description: "A stunning waterfall near the Sela Pass.", category: "Nature" },
            { name: "Tawang War Memorial", description: "A memorial honoring Indian Army soldiers from the 1962 war.", category: "Heritage" },
            { name: "Buddhist Temples", description: "Numerous small temples scattered throughout the district.", category: "Culture" },
            { name: "Madhuri Lake", description: "A glacial lake named after the actress Madhuri Dixit, surrounded by forests.", category: "Nature" }
        ],
        "Cherrapunji": [
            { name: "Waterfalls", description: "Multiple waterfalls including Nohkalikai, the tallest plunge waterfall in India.", category: "Nature" },
            { name: "Living Root Bridges", description: "Unique hand-grown bridges made from rubber tree roots spanning rivers.", category: "Nature" },
            { name: "Caves", description: "Extensive limestone caves including Mawsmai and Krem Mawmluh.", category: "Nature" },
            { name: "Seven Sisters Falls", description: "A series of seven waterfalls cascading down a cliff face.", category: "Nature" },
            { name: "Mawsmai Cave", description: "A well-lit limestone cave with formations and narrow passages.", category: "Nature" },
            { name: "Eco Park", description: "A park with gardens, walking trails, and valley views.", category: "Nature" },
            { name: "Thangkharang Park", description: "A park with a cliff-edge temple and panoramic valley views.", category: "Nature" },
            { name: "Nohkalikai Falls", description: "India's tallest plunge waterfall, dropping 1,035 feet.", category: "Nature" }
        ],
        "Coorg": [
            { name: "Coffee Plantations", description: "Sprawling estates where Coorg's famous coffee is grown and processed.", category: "Nature" },
            { name: "Abbey Falls", description: "A beautiful waterfall surrounded by coffee and spice plantations.", category: "Nature" },
            { name: "Madikeri", description: "The administrative headquarters with a fort and scenic views.", category: "Culture" },
            { name: "Raja's Seat", description: "A historic garden and viewpoint where the Coorg raja watched sunsets.", category: "Nature" },
            { name: "Bhagamandala", description: "A pilgrimage site where three rivers meet, with a temple.", category: "Culture" },
            { name: "TalaKaveri", description: "The source of the Kaveri River, with a temple and mountain views.", category: "Culture" },
            { name: "Dubare Elephant Camp", description: "An elephant camp on the river bank where you can interact with elephants.", category: "Nature" },
            { name: "Nisargadhama", description: "A forest park with deer, elephants, and a hanging bridge.", category: "Nature" }
        ],
        "Alappuzha": [
            { name: "Backwaters", description: "A network of lagoons, lakes, and canals connected to the Arabian Sea.", category: "Nature" },
            { name: "Houseboats", description: "Traditional Kettuvallam houseboats offering cruises through the backwaters.", category: "Culture" },
            { name: "Alappuzha Beach", description: "A serene beach with a pier extending into the sea.", category: "Beach" },
            { name: "Vembanad Lake", description: "One of India's largest lakes, a hub for boat races and birdwatching.", category: "Nature" },
            { name: "Krishnapuram Palace", description: "A 17th-century palace with Kerala-style architecture and murals.", category: "Heritage" },
            { name: "Ambalappuzha Temple", description: "A Hindu temple known for its pal payasam (sweet milk offering).", category: "Culture" },
            { name: "Champakulam Church", description: "One of the oldest churches in India, with a scenic annual boat race.", category: "Culture" },
            { name: "Pathiramanal Island", description: "A small island in Vembanad Lake known for birdwatching.", category: "Nature" }
        ],
        "Jaisalmer": [
            { name: "Golden Fort", description: "A massive yellow sandstone fort still inhabited, earning Jaisalmer the 'Golden City' name.", category: "Heritage" },
            { name: "Sam Sand Dunes", description: "A desert landscape with camel safaris, folk music, and desert camping.", category: "Nature" },
            { name: "Desert Safari", description: "An exhilarating ride across the Thar Desert on camel or jeep.", category: "Adventure" },
            { name: "Patwon Ki Haveli", description: "A cluster of five ornate havelis with intricate carvings.", category: "Heritage" },
            { name: "Gadisar Lake", description: "A scenic lake surrounded by temples and shrines, popular for boating.", category: "Nature" },
            { name: "Jain Temples", description: "Beautifully carved temples within the fort dedicated to Jain Tirthankaras.", category: "Culture" },
            { name: "Bada Bagh", description: "A historic garden with royal cenotaphs (chhatris) overlooking the desert.", category: "Heritage" },
            { name: "Tazia Tower", description: "A delicate tower built by Muslim artisans in the Badal Mahal.", category: "Heritage" }
        ]
    };

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

    const modal = document.getElementById("tripDetailsModal");
    const modalTitle = document.getElementById("modalTitle");
    modalTitle.textContent = `Plan ${selectedDestination} ✨`;
    modal.style.display = "flex";

});

document.getElementById("modalPlanBtn").addEventListener("click", async function () {

    if (!selectedDestination) {
        return;
    }
    const modal = document.getElementById("tripDetailsModal");
if (modal) {
    modal.style.display = "none";
}

    const activeCard = document.querySelector(".vibe-card.active");
    const vibeName = activeCard ? activeCard.querySelector("h3").textContent : "";

    const numberOfDays = document.getElementById("numberOfDays").value;
    const travelType = document.getElementById("travelType").value;
    const budget = document.getElementById("budget").value;

    const recommendationSection = document.getElementById("recommendationSection");
    const recommendationContent = document.getElementById("recommendationContent");
    const recommendationLoading = document.getElementById("recommendationLoading");
    const recommendationError = document.getElementById("recommendationError");

    recommendationSection.style.display = "none";
    recommendationError.style.display = "none";
    recommendationLoading.style.display = "block";

    try {
        const response = await fetch("http://localhost:3000/api/recommendations", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                destination: selectedDestination,
                vibe: vibeName,
                budget: budget,
                numberOfDays: parseInt(numberOfDays),
                travelType: travelType,
            }),
        });

        recommendationLoading.style.display = "none";

        if (!response.ok) {
            recommendationError.style.display = "block";
            recommendationSection.style.display = "none";
            return;
        }

        const data = await response.json();
        
        // Close the planning modal
        const modal = document.getElementById("tripDetailsModal");
        if (modal) {
            modal.style.display = "none";
        }

        // Show recommendations
        recommendationSection.style.display = "block";
        recommendationContent.innerHTML = DOMPurify.sanitize(marked.parse(data.recommendation));
        
        // Scroll to recommendations
        recommendationSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    } catch (err) {
        recommendationLoading.style.display = "none";
        recommendationError.style.display = "block";
        recommendationSection.style.display = "none";
    }

});

document.getElementById("modalClose").addEventListener("click", function () {
    document.getElementById("tripDetailsModal").style.display = "none";
});



    // Show places for selected city
    detailsButton.addEventListener("click", function () {
        if (!selectedDestination) {
            alert("Please select a city first.");
            return;
        }

        const attractions = destinationAttractions[selectedDestination];
        if (!attractions) {
            alert("No details available.");
            return;
        }

        // Populate places detail section
        const placesDetailSection = document.getElementById("placesDetailSection");
        const placesDetailTitle = document.getElementById("placesDetailTitle");
        const placesDetailSubtitle = document.getElementById("placesDetailSubtitle");
        const placesDetailGrid = document.getElementById("placesDetailGrid");

        placesDetailTitle.textContent = "Explore " + selectedDestination;
        placesDetailSubtitle.textContent = "Discover the must-visit places in " + selectedDestination + ".";
        placesDetailGrid.innerHTML = "";

        attractions.forEach(function (attraction) {
            const card = document.createElement("div");
            card.className = "place-detail-card";
            card.innerHTML = `
                <div class="place-detail-icon">${attraction.name.charAt(0)}</div>
                <h4>${attraction.name}</h4>
                <p>${attraction.description}</p>
                <span class="place-tag">${attraction.category}</span>
            `;
            placesDetailGrid.appendChild(card);
        });

        placesDetailSection.style.display = "block";
        placesDetailSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    // Back to Destinations button
    document.getElementById("backToDestinations").addEventListener("click", function () {
        const placesDetailSection = document.getElementById("placesDetailSection");
        placesDetailSection.style.display = "none";
        destinationSection.scrollIntoView({ behavior: "smooth", block: "start" });
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