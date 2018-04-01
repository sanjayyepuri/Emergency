import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { RkButton, RkTextInput, RkStyleSheet } from 'react-native-ui-kitten';


import { Examples, ListView, Tile, Title, Subtitle, Divider, Touchable } from '@shoutem/ui';


export class SearchEmergencyComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            navigation: this.props.navigation
        };
    }

    render() {

        const navigation = this.state.navigation;


        return ( < RkTextInput placeholder = "What's the Emergency?"
            onSubmitEditing = {
                (event) => {
                    var inputText = event.nativeEvent.text.toLowerCase();

                    var database = {
                        "emergencies": [{
                            "description": "Poison description",
                            "subcategories": [{
                                "description": "The consequence of drinking large amounts of alcohol in a short period of time. Immediate medical attention recommended.",
                                "steps": ["Stay alert. Don't panic.", "Keep the person in an upright sitting position. If they must lie down, make sure they're on their side.", "Make sure the person stays awake.", "Prevent breathing or choking problems.", "Provide water to prevent dehydration.", "Keep them warm with a blanket.", "Prepare identifying information about the person.", "Do NOT leave the person unattended."],
                                "symptoms": ["Vomiting", "Seizures", "Irregular Breathing", "Blue-tinged skin or pale skin", "Low body temperature (hypothermia)", "Unconsciousness"],
                                "threatLevel": 4,
                                "title": "Alcohol Poisoning"
                            }, {
                                "bitetypes": [{
                                    "name": "Insect bites",
                                    "steps": ["Remove any stingers from the affected area.", "Gently wash the affected area with soap and water.", "Place a cold compress or ice pack on the area for about 10 minutes.", "Apply a calamine lotion or a paste of baking soda and water to relieve itching and pain.", "Encourage them to remain calm and still to reduce the spread of venom.", "Do NOT apply a tourniquet. Avoid giving them anything to eat or drink."],
                                    "symptoms": ["Redness", "Swelling", "Pain", "Itching"]
                                }, {
                                    "name": "Jellyfish stings",
                                    "steps": ["Wash away venom with seawater.", "Remove tentacles with tweezers or gloves.", "Hot or warm water soaks or cold packs can help relieve pain."],
                                    "symptoms": ["Painful, itchy rash", "Blisters filled with pus", "Weakness", "Nausea", "Headaches", "Muscle pain and spasms", "Runny eyes and nose", "Excessive sweating", "Chest pain that worsens with breathing"]
                                }, {
                                    "name": "Scorpion stings",
                                    "steps": ["Place an ice cube wrapped in plastic and a thin cloth on the wound.", "Apply an antihistamine cream or ointment, an anesthetic, a corticosteroid, or a combination of them to the site."],
                                    "symptoms": ["Abnormal head, eye, and neck movements", "Increased saliva production", "Sweating", "Restlessness", "Very high blood pressure", "Difficultly breathing"]
                                }, {
                                    "name": "Snake bites",
                                    "steps": ["Use a clean cloth or gauze to apply pressure to the area until bleeding stops.", "Gently wash the affected area with soap and water.", "Apply antibiotic cream.", "Cover the wound with a sterile bandage or gauze.", "Remove tight jewelry or clothing around the affected area.", "Encourage them to remain calm, lie down, and stay still.", "If they develop pale and clammy skin, dizziness, weakness, shortness of breath, or increased heart rate, treat them for shock. Give them a blanket or extra layer of clothing to stay warm.", "If possible, take a description or picture of the snake."],
                                    "symptoms": ["Weakness", "Fainting", "Convulsions", "Nausea/Vomiting", "Diarrhea", "Rapid pulse", "Loss of coordination", "Swelling in the affected area"]
                                }],
                                "description": "Bites or stings from poisonous animals. Ingestion of or contact with poisonous plants. First aid differs depending on the situation. Contact poison control immediately.",
                                "threatLevel": 5,
                                "title": "Animals Bites"
                            }, {
                                "description": "Description",
                                "steps": ["step 0", "step 1"],
                                "symptoms": ["symptom 0", "symptom 1"],
                                "threatLevel": 0,
                                "title": "Drugs & Medicine"
                            }, {
                                "description": "Description",
                                "steps": ["step 0", "step 1"],
                                "symptoms": ["symptom 0", "symptom 1"],
                                "threatLevel": 0,
                                "title": "Food Poisoning"
                            }, {
                                "description": "Description",
                                "steps": ["step 0", "step 1"],
                                "symptoms": ["symptom 0", "symptom 1"],
                                "threatLevel": 0,
                                "title": "Fumes, Gases, Vapors"
                            }, {
                                "description": "Description",
                                "steps": ["step 0", "step 1", "step 2"],
                                "subtitle": "lol",
                                "symptoms": ["symptom 0", "symptom 1"],
                                "threatLevel": 0,
                                "title": "Household & Chemical Products"
                            }],
                            "title": "Poison"
                        }, {
                            "description": "Description for Medical",
                            "subcategories": [{
                                "description": "",
                                "shortdesc": "",
                                "steps": ["step0"],
                                "symptoms": ["symp0"],
                                "threatLevel": 0,
                                "title": "Allergic Reaction"
                            }, {
                                "description": "",
                                "shortdesc": "",
                                "steps": ["step0"],
                                "symptoms": "symp0",
                                "threatLevel": 0,
                                "title": "Blood Loss"
                            }, {
                                "description": "",
                                "shortdesc": "",
                                "steps": ["step0"],
                                "symptoms": ["symp0"],
                                "threatLevel": 0,
                                "title": "Blunt Force Trauma"
                            }, {
                                "description": "Occur by direct or indirect contact with heat, electric current, radiation, or chemical agents. Can lead to cell death.",
                                "shortdesc": "",
                                "steps": ["Soak wouond in cool water for at least five minutes.", "Take pain relief medication (ex. ibuprofen).", "Apply anesthetic to sooth skin.", "Apply antibiotic ointment and wrap wound with loose gauze."],
                                "symptoms": ["Redness", "Minor inflammation or swelling", "Pain", "Dry, peeling skin"],
                                "threatLevel": 2,
                                "title": "First-degree Burns"
                            }, {
                                "description": "Occurs when a foreign object is lodged in throat/windpipe, blocking airflow. Cuts off oxygen to the brain. Act immediately.",
                                "shortdesc": "",
                                "steps": ["Keep coughing forcefully, if possible.", "Give 5 back blows between the person's shoulder blades", "Give 5 abdominal thrusts", "Alternate between 5 blows and 5 thrusts until blockage is dislodged", "Perform CPR if person becomes unconscious"],
                                "symptoms": ["Inability to speak", "Difficulty/noisy breathing", "Weak or forceful cough", "Flushed skin that turns pale or blue", "Loss of consciousness"],
                                "threatLevel": 5,
                                "title": "Choking"
                            }, {
                                "description": "",
                                "shortdesc": "",
                                "steps": ["step0"],
                                "symptoms": ["symp0"],
                                "threatLevel": 0,
                                "title": "General Body Pain"
                            }, {
                                "description": "",
                                "shortdesc": "",
                                "steps": ["step0"],
                                "symptoms": ["symp0"],
                                "threatLevel": 0,
                                "title": "Heart Attack/Stroke"
                            }],
                            "title": "Medical"
                        }, {
                            "description": "these dangerous natural disasters will gun you down if you dont have our handy survival guide",
                            "subcategories": [{
                                "description": "Earthquakes are a dangerous event lorem ipsum something something do this safe thing lol",
                                "shortdesc": "Dangerous seismic events",
                                "steps": ["step0"],
                                "threatLevel": 0,
                                "title": "Earthquake"
                            }, {
                                "description": "something something buy water from costco",
                                "shortdesc": "Dangerous water storms",
                                "steps": ["step0"],
                                "threatLevel": 0,
                                "title": "Hurricanes"
                            }, {
                                "description": "run run go to the basement",
                                "shortdesc": "Dangerous spinny air",
                                "steps": ["step0"],
                                "threatLevel": 0,
                                "title": "Tornadoes"
                            }, {
                                "description": "Build a flood wall?",
                                "shortdesc": "Dangerous wave",
                                "steps": ["step0"],
                                "threatLevel": 0,
                                "title": "Tsunami"
                            }, {
                                "description": "Floods are dangerous and if you live in a sacrificial area, get flood insurance",
                                "shortdesc": "Dangerous water",
                                "steps": ["step0"],
                                "threatLevel": 0,
                                "title": "Flood"
                            }, {
                                "description": "Wildfires are a dangerous fire that signals that zeus is mad. it is important to appease zeus",
                                "shortdesc": "Dangerous burning",
                                "steps": ["step0"],
                                "threatLevel": 0,
                                "title": "Wildfire"
                            }],
                            "title": "Natural Disasters"
                        }, {
                            "description": "Description for violence",
                            "subcategories": [{
                                "desc": "",
                                "shortdesc": "",
                                "steps": ["step0"],
                                "threatLevel": 0,
                                "tile": "Bombings"
                            }, {
                                "desc": "",
                                "shortdesc": "",
                                "steps": ["step0"],
                                "threatLevel": 0,
                                "title": "Date Rape"
                            }, {
                                "desc": "",
                                "shortdesc": "",
                                "steps": ["step0"],
                                "threatLevel": 0,
                                "title": "Domestic Violence"
                            }, {
                                "desc": "",
                                "shortdesc": "",
                                "steps": ["step0"],
                                "threatLevel": 0,
                                "title": ""
                            }, {
                                "desc": "",
                                "shortdesc": "",
                                "steps": ["step0"],
                                "threatLevel": 0,
                                "title": "Shootings"
                            }, {
                                "desc": "",
                                "shortdesc": "",
                                "steps": ["step0"],
                                "threatLevel": 0,
                                "title": ""
                            }],
                            "title": "Violence"
                        }]
                    };

                    var emergencies = database.emergencies;

                    var isPrimitive = function(test) {
                        return (test !== Object(test));
                    };

                    var recursivelyStealText = function(arbitrary, list, parent) {
                        var str = "";
                        if (isPrimitive(arbitrary)) {
                            var comp = { "parent": parent };
                            comp.val = (arbitrary + "").toLowerCase();
                            list.push(comp);
                            return;
                        }
                        for (var key in arbitrary) {
                            recursivelyStealText(arbitrary[key], list, parent);
                        }
                    }

                    var list = [];
                    for (var x = 0; x < emergencies.length; x++) {
                        recursivelyStealText(emergencies[x], list, emergencies[x]);
                    }

                    //console.log("verifying search db");
                    //for (var x = 0; x < list.length; x++) {
                    //    console.log(list[x].val);
                    //}


                    var matches = [];
                    for (var x = 0; x < list.length; x++) {
                        var it = list[x];
                        if (it.val.includes(inputText)) {
                            matches.push(it);
                        }
                    }
                    console.log("logging matches");
                    for (var x = 0; x < matches.length; x++) {
                        var it = matches[x];
                        console.log("Found matching section " + it.parent.title + " inside string " + it.val);
                    }



                    navigation.navigate('Treatment');
                }
            }
            returnKeyType = "search" / > );
    }
}

let styles = RkStyleSheet.create(theme => ({
    root: {
        backgroundColor: theme.colors.screen.base
    },
    title: {
        marginBottom: 5
    },
}));