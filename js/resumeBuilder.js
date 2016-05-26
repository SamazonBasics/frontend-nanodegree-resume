/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name" : "Sam",
    "age" : 36,
    "skills": ["Awesomeness", "Wood Burning", "Burning Chrome", "Mnemonic Couriering"]
};

var work = {
    "position": "Flunky, 3rd class",
    "employer": "OrbTech",
    "years": 5,
    "city": "Pittsburgh"
};

var education = {
    "schools": [
        {
            "name": "Pitt",
            "gradYear": 2008,
            "city": "Pittsburgh",
            "major": ["Physics", "Homebrewing"]
        },
        {
            "name": "UW",
            "gradYear": 2015,
            "city": "Seattle",
            "major": ["Embedded C"]
        }
    ]
};

var project{
    
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", "King of All That I Survey");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
