/*
This is empty on purpose! Your code to build the resume will go here.
 */

//var name = "Kevin Budd";
//var role = "Web Developer";

//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);

//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);

var bio = {
	"name": "Kevin Budd",
	"role": "Web Developer",
	"contacts": {
		"mobile": "630-373-9596",
		"email": "kevin@kevinbudd.com",
		"github": "kevinpmbudd",
		"website": "www.kevinbudd.com",
		"location": "Naperville, IL"
	},
	"welcomeMessage": "Welcome Home",
	"skills": ["creative", "natural", "focus", "cooking"],
	"bioPic": "images/me.jpg"
};

var work = {
	"jobs": [
	{
		"employer": "Trace-it Systems",
		"title": "Web Developer Intern",
		"location": "Naperville, IL",
		"dates": "Summer 2015",
		"description": "Worked on a Cordova cross platform mobile app for Android and iOS. Analyzed and Debugged the app.
		Created Documentation for work done and future work on project"
	},
	{
		"employer": "Freelance",
		"title": "Yoga Teacher",
		"location": "Naperville, IL",
		"dates": "2010-2014",
		"description": "Taught weekly classes, workshops and teacher trainings. Maintained website for promoting my teaching."
	}
	]
};


var education = {
	"schools": [
	{
		"name": "College of DuPage",
		"location": "Glen Ellyn, IL",
		"degree": "Certificate",
		"focus": ["Java", "ASP.net", "HTML/CSS"],
		"dates": "2014-2015",
		"url": "http://cod.edu"
	},
	{
		"name": "DePaul University",
		"location": "Chicago, IL",
		"degree": "BS",
		"focus": ["Human-Computer Interaction"],
		"dates": "2001-2005",
		"url": "http://depaul.edu"
	}
]
},
	"onlineCourses": [
	{
		"title": "Front End Developer Nanodegree",
		"school": "Udacity",
		"dates": "2015-",
		"url": "http://udacity.com"

	}
	]
}

var projects = {
	"projects": [
	{
		"title": "Portfolio",
		"dates": "September 2015",
		"description": "Online portfolio featuring ongoing work for Front End Developer Nanodegree",
		"images": ["http://kevinbudd.com#thepark", "http://kevinbudd.com#momandme", "http://kevinbudd.com#bikehelmet"]

	}
	]
}


$("#main").append(work["position"]);



