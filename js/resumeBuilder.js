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

/* Quiz: Protecting the Resume submitted solution: */
/*var shadyHTML = "String < with > tag brackets << all >>> over it.";
var processingHTML = "";
var cleanHTML = "";
var cleanWords = [];
cleanWords = shadyHTML.split("<");
processingHTML = cleanWords.join("&lt;");  //Submitted with .join(" ");
cleanWords = processingHTML.split(">");
cleanHTML = cleanWords.join("&gt;"); //Submitted with .join(" ");

console.log(cleanHTML);*/

/* Quiz: Dot Notation vs. Bracket Notation */
var weirdObject = {
    "property": "Time for an astronomy lesson!",
    "property1": "Cameron's minor in college was astronomy",
    "property-2": "The 4 Galilean largest moons of Jupiter are:",
    "property 3": "Io, Ganymede, Callisto, Europa",
    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    " property": "The Sun contains 99.87% of the mass of the entire solar system",
    "property()": "There are 5 dwarf planets in our solar system:",
    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
    "8property": "Mars has two tiny moons: Phobos and Deimos"
};

var q;
q = weirdObject.property;
q = weirdObject["property"]; // 0
q = weirdObject.property1;
q = weirdObject["property1"];  // 1
/*q = weirdObject.property-2;*/
q = weirdObject["property-2"];  // 2
/*q = weirdObject.property 3;*/
q = weirdObject["property 3"];  // 3
q = weirdObject.property$;
q = weirdObject["property$"];   // 4
/*q = weirdObject. property;*/
q = weirdObject[" property"];   // 5
/*q = weirdObject.property();*/
q = weirdObject["property()"];  // 6
/*q = weirdObject.property[];*/
q = weirdObject["property[]"];  // 7
/*q = weirdObject.8property;*/
q = weirdObject["8property"];   // 8
