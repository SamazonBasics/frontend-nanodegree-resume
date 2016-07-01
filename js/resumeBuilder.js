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

/* BEGIN code for Challenge Problem 1.  
return a string representing whether x is >, < or = y. For example:
    var rel = getRelationship(2, 3);
    console.log(rel); // <
If one or both of the values aren't numbers, your function should output:

"Can't compare relationships because [this value] and [that value] [is]/[are] not [a] number[s]."
where [this value] and [that value] are replaced with the non-numerical values. The sentence should be grammatically correct by outputting either is or are and pluralizing number if necessary. */

function getRelationship(x, y) {
    //Err txt: "Can't compare relationships because [this value] and [that value] [is]/[are] not [a] number[s]."
    //Test whether x and y are defined.
    var xTxt=x, yTxt=y, xState="OK", yState="OK", isAre=" is ", numbers=" a number", result="";

    if ( (undefined !== x) && (undefined !== y) ) 
    {
        if($.isNumeric(x) && $.isNumeric(y))
        {
            if(x>y){result = ">";}
            else if(x<y){result = "<";}
            else if(x===y){result = "=";}
            return result;
        }
        else{ //x and y not both numeric.
            if(!$.isNumeric(x)){xState = "NonNumeric"}
            if(!$.isNumeric(y)){yState = "NonNumeric"}
        }
    }
    else{
        if(undefined === x){ xTxt = "undefined"; xState=xTxt;}
        if(undefined === y){ yTxt = "undefined"; yState=yTxt;}
    }
    if( (xState != "OK") && (yState !="OK") ){
        isAre = " are "; numbers=" numbers";
        result = "Can't compare relationships because " +xTxt+ " and " +yTxt+isAre+"not"+numbers+".";
    }
    else if(xState != "OK"){
        result = "Can't compare relationships because " +xTxt+ " is not"+numbers+".";
    }
    else if(yState != "OK"){
        result = "Can't compare relationships because " +yTxt+ " is not"+numbers+".";
    }
    else{result = "Somethin' ain't right...";}
    return result;
}

// Try logging these functions to test your code!
/*  DISABLING TEST OUTPUT
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined)); */
/* END code for Challenge Problem 1. */

/* BEGIN code for Challenge Problem 2.  */

var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function flipNames(names){
    for(var a in names){
        var tmpName = [];
        tmpName = names[a].split(" ");
        names[a] = tmpName[1]+" "+tmpName[0];
    }
    return names;
}

function alphabetizer(names) {
    names = flipNames(names);
    names.sort();
    names = flipNames(names);
    return names;
}

// Try logging your results to test your code!
/* DISABLING DISPLAY console.log(alphabetizer(moonWalkers)); */

/* END code for Challenge Problem 2.  */

/* BEGIN code for Challenge Problem 3. */
// Iterate through the localizedRuleNames in ruleResults and 
// return an array of their strings.
function ruleList(results) {
    // Your code goes here!
    var ruleNames = [];
    for(r in results.formattedResults.ruleResults){
        ruleNames.push(r);
    }
    return ruleNames;
}

// Iterate through pageStats in the psiResults object and 
// return the total number of bytes to load the website.
function totalBytes(results) {
    var bytesSum = 0;
    var byteNumber = 0;
    for(s in results.pageStats){
        byteNumber = parseInt(results.pageStats[s]);
        if($.isNumeric(byteNumber)){
            bytesSum += byteNumber;
            byteNumber = 0;
        }
    }
    return bytesSum;
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
};

// Try logging the outputs below to test your code!
/*   DISABLING OUTPUT.
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));  */
/* END code for Challenge Problem 3. */