var bio = {
    "name" : "Sam Scheinman",
    "role": "Only to serve as a warning to others",
    "welcomeMessage": "I have come here to write code and chew bubble gum.",
    "skills": ["Awesomeness", "Wood Burning", "Burning Chrome", "Mnemonic Couriering"],
    "contacts": {
        /*"cell": "412-311-1212",*/
        "email": "26d92947@opayq.com",
        "github": "SamazonBasics",
        /*"twitter": ,*/
        "location": "Wilkinsburg, PA"
    }
};

var work = {
    jobs: [
        {
            "title": "Help desk analyst",
            "employer": "Katz Business School",
            "description": "Maintained PCs and IT equipment for the students and faculty of the business school.",
            "years": "2000 - 2001",
            "location": "Pittsburgh, PA"
        },
        {
            "title": "Student Programmer",
            "employer": "University of Pittsburgh Biology Dept.",
            "description": "Designed, wrote, and tested software and hardware for automated processing of biochemical samples.",
            "years": "2001 - 2005",
            "location": "Pittsburgh, PA"
        },
        {
            "title": "Flunky, 3rd class",
            "employer": "OrbTech",
            "description": "Occasional consultant, writing and troubleshooting control software and, when necessary, troubleshooting and fabricating new hardware for prototype industrial auomation machinery.",
            "years": "2001 - 2009",
            "location": "Millvale, PA"
        },
        {
            "title": "Corrosion Technician & Ditch Digger",
            "employer": "Matco Services",
            "description": "Inorganic chemistry, applied in the laboratory and field.  Determined client requirements, designed and executed test methods, performed data analysis, and composed&delivered final reports.<br>       Oversaw software development for handheld applications for collection of field data.  Programmed and developed data acquisition and test-stand control hardware.",
            "years": "2005 - 2014",
            "location": "Carnegie, PA"
        },
        {
            "title": "Software Engineer",
            "employer": "I.Q., Inc.",
            "description": "Wrote and maintained software in a variety of languages, for embedded systems on a variety of platforms, in an Agile team environment.",
            "years": "2014 - 2015",
            "location": "Murrysville, PA"
        },
        {
            "title": "Software Developer",
            "employer": "Bombardier",
            "description": "Write and maintain safety-critical applications in MISRA 2012-compliant C-code, for control of rail transit systems.",
            "years": "2015 - present",
            "location": "West Mifflin, PA"
        }]
};

var education = {
    "schools": [
        {
            "name": "Pitt",
            "gradYear": 2008,
            "location": "Pittsburgh, PA",
            "degree": "B.Sc.",
            "major": ["Physics", "Homebrewing"]
        },
        {
            "name": "O'Reilly School of Technology",
            "gradYear": 2015,
            "location": "Sebastopol, CA",
            "degree": "Certificate",
            "major": ["Python Programming"]
        },
        {
            "name": "University of Washington",
            "gradYear": 2015,
            "location": "Seattle, WA",
            "degree": "Certificate",
            "major": ["Embedded C"]
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Peach Pancake",
            "dates": "2002 - 2003",
            "description": "Battlebot prototype. A differential drive platform, using &omega;=(-/+)B+cos(&theta;<sub>Err</sub>) wheelspeed modulation about a baseline speed, B.  It was named for a friend's cat.",
            "images":  [
"https://sites.google.com/site/justlikegeocitiesonlybetter/file-cabinet/cycloidPlot.jpg",
"https://sites.google.com/site/justlikegeocitiesonlybetter/file-cabinet/simpleCAD.jpg","https://sites.google.com/site/justlikegeocitiesonlybetter/file-cabinet/orientationTestbed.jpg"
            ]
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
    if(work.jobs.reverse().length > 0) {
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

projects.display = function(){
    if(projects.projects.reverse().length > 0) {
        var p, im;
        for(p in projects.projects){
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[p].title);
            $(".project-entry:last").append(formattedProjectTitle);
            var formattedProjectDates =  HTMLprojectDates.replace("%data%",projects.projects[p].dates);
            $(".project-entry:last").append(formattedProjectDates);
            var formattedProjectDesc = HTMLprojectDescription.replace("%data%",projects.projects[p].description);
            $(".project-entry:last").append(formattedProjectDesc);
            var formattedProjectImg = "";  
            for(im in projects.projects[p].images){
                formattedProjectImg = HTMLprojectImage.replace("%data%",projects.projects[p].images[im]);
                $(".project-entry:last").append(formattedProjectImg);
            }
        }
    }
    else{
        console.log("projects.projects length is not greater than zero...");
    }
}
projects.display();

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
