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

var project = {
    "projects": [
        {
            "title": "Peach Pancake",
            "dates": "2002",
            "description": "Battlebot prototype. A differential drive platform, using w=(-/+)B+cos(thetaErr) wheelspeed modulation about a baseline speed, B.  It was named for a friend's cat."
        },
        {
            "title": "Brix Box",
            "dates": "2016",
            "description": "Configure a Linux system on a compact desktop computer for headless operation, providing remote access to graphical logon sessions, for running multiple simultaneous virtual machines."
        }
    ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", "King of All That I Survey");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
