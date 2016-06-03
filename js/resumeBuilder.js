/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
    "name" : "Sam",
    "role": "only to serve as a warning to others",
    "welcomeMessage": "I have come here to write code and chew bubble gum.",
    "skills": ["Awesomeness", "Wood Burning", "Burning Chrome", "Mnemonic Couriering"],
    "contacts": {
        /*"cell": "412-311-1212",*/
        "email": "26d92947@opayq.com",
        "github": "SamazonBasics",
        /*"twitter": ,*/
        "location": "Wilkinsburg"
    }
};

var work = {
    jobs: [
        {
            "title": "Help desk analyst",
            "employer": "Katz Business School",
            "description": "Maintained PCs and IT equipment for the students and faculty of the business school.",
            "years": "2000 - 2001",
            "city": "Pittsburgh"
        },
        {
            "title": "Student Programmer",
            "employer": "University of Pittsburgh Biology Dept.",
            "description": "Designed, wrote, and tested software and hardware for automated processing of biochemical samples.",
            "years": "2001 - 2005",
            "city": "Pittsburgh"
        },
        {
            "title": "Flunky, 3rd class",
            "employer": "OrbTech",
            "description": "Occasional consultant, writing and troubleshooting control software and troubleshooting hardware for prototype industrial auomation machinery.",
            "years": "2001 - 2009",
            "city": "Pittsburgh"
        },
        {
            "title": "Corrosion Technician & Ditch Digger",
            "employer": "Matco Services",
            "description": "Inorganic chemistry, applied in the laboratory and field.  Determined client requirements, designed and executed test methods, performed data analysis, and composed and delivered final reports.",
            "years": "2005 - 2014",
            "city": "Carnegie"
        },
        {
            "title": "Software Engineer",
            "employer": "I.Q., Inc.",
            "description": "Wrote and maintained software in a variety of languages, for embedded systems on a variety of platforms, in an Agile team environment.",
            "years": "2014 - 2015",
            "city": "Murrysville"
        },
        {
            "title": "Software Developer",
            "employer": "Bombardier",
            "description": "Write and maintain safety-critical applications in MISRA 2012-compliant C-code, for control of rail transit systems.",
            "years": "2015 - present",
            "city": "West Mifflin"
        }]
};

var education = {
    "schools": [
        {
            "name": "Pitt",
            "gradYear": 2008,
            "city": "Pittsburgh",
            "degree": "B.Sc.",
            "major": ["Physics", "Homebrewing"]
        },
        {
            "name": "O'Reilly School of Technology",
            "gradYear": 2015,
            "city": "Online",
            "degree": "Certificate",
            "major": ["Python Programming"]
        },
        {
            "name": "University of Washington",
            "gradYear": 2015,
            "city": "Online",
            "degree": "Certificate",
            "major": ["Embedded C"]
        }
    ]
};

var project = {
    "projects": [
        {
            "title": "Peach Pancake",
            "dates": "2002 - 2003",
            "description": "Battlebot prototype. A differential drive platform, using w=(-/+)B+cos(thetaErr) wheelspeed modulation about a baseline speed, B.  It was named for a friend's cat.",
            "images":  [ ]
        },
        {
            "title": "Brix Box",
            "dates": "2016",
            "description": "Configure a Linux system on a compact desktop computer for headless operation, providing remote access to graphical logon sessions, for running multiple simultaneous virtual machines.",
            "images": [ "http://images10.newegg.com/NeweggImage/ProductImageCompressAll300/56-164-027-01.jpg" ]  
            /* Newegg page: http://www.newegg.com/Product/BOM.aspx?Item=N82E16856662043 */
        }
    ]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", "King of All That I Survey");
var formattedEmployer = "";
var formattedTitle = "";
var formattedJobDates = "";
var formattedJobDescription = "";

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var i = 0;
    for(i = 0;i < bio.skills.length;i++){
        formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    }
}
else{
    console.log("bio.skills length is not greater than zero...");
}

function displayWork(){
    if(work.jobs.length > 0) {
        var j;
        for(j in work.jobs){
            $("#workExperience").append(HTMLworkStart);
            formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[j].employer);
            formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[j].title);
            formattedJobDates = HTMLworkDates.replace("%data%",work.jobs[j].years);
            formattedJobDescription = HTMLworkDescription.replace("%data%",work.jobs[j].description);
            $(".work-entry:last").append(formattedEmployer + formattedTitle + formattedJobDates + formattedJobDescription);
        }
    }
    else{
        console.log("work.jobs length is not greater than zero...");
    }
}

/*Call the displayWork function to populate the work section.*/
displayWork();

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

/*var s = "audacity";
t = "";
t=String(s.charAt(1)).toUpperCase();
t = t +s.slice(2);
s = t;
console.log(s);*/

/* Properly capitalizes a name. */
/*var name = "AlbERt EINstEiN";
name = name.toLowerCase();
var nameList = name.split(" ");
finalName = nameList[0].charAt(0).toUpperCase();
finalName += nameList[0].slice(1) + " ";
finalName += nameList[1].charAt(0).toUpperCase() + nameList[1].slice(1);
console.log(finalName);*/

/*Quiz answer.
Q: manipulate the string to ensure the first name has a capital first letter and the last name is totally capitalized? turning  "cAmEROn PittMAN" into "Cameron PITTMAN"*/
/*var name = "AlbERt EINstEiN";
var finalName = "";
// Your code goes here!
var workingName = oldName.toLowerCase();
var nameList = [];
nameList = workingName.split(" ");
nameList[0] = nameList[0].toLowerCase();
nameList[1] = nameList[1].toUpperCase();
workingName = nameList[0].charAt(0).toUpperCase();
workingName += nameList[0].slice(1) + " " + nameList[1];
finalName = workingName;*/

