/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*$("#main").append(["Sam<br><br>"]);*/

var skills = ["Awesomeness", "Wood Burning", "Burning Chrome", "Mnemonic Couriering"];

var bio = {
    "name" : "Sam",
    "age" : 36,
    "skills": skills
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

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", "King of All That I Survey");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

/*var awesomeThoughts="I am Sam, king of all that I survey.<br><br>";
console.log(awesomeThoughts);
var funThought = awesomeThoughts.replace("king", "bling");
$("#main").append(funThought);*/

$("#main").append("Biography:<br><br>");
$("#main").append("Age: " + bio.age + "<br><br>");

$("#main").append("Current Position: " + work["position"] + "<br><br>");

$("#main").append("School: " + education.name + "<br><br>");


var udacityStr = "audacity";
udacityStr = "U" + udacityStr.slice(2);
console.log(udacityStr);