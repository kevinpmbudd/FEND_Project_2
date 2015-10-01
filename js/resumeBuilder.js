var bio = {
	"name": "Kevin Budd",
	"role": "Web Developer",
	"contacts": {
		"mobile": "630-373-9596",
		"email": "kevin@kevinbudd.com",
		"github": "kevinpmbudd",
		"location": "Naperville, IL"
	},
	"welcomeMessage": "Welcome! Please take a moment and enjoy learning a little bit about me.",
	"skills": ["HTML/CSS/Javascript", "Java", "SQL", "Still Learning"],
	"bioPic": "images/me.jpg"


};

	bio.display = function () {

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$(".flex-box").append(formattedMobile);
	$(".flex-box").append(formattedEmail);
	$(".flex-box").append(formattedGitHub);
	$(".flex-box").append(formattedLocation);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);

 	if (bio.skills.length > 0) {
 		$("#header").append(HTMLskillsStart);
 		for(skill in bio.skills) {
 			var formatedskills = HTMLskills.replace("%data%", bio.skills[skill]);
 			$("#skills:last").append(formatedskills);
 		};
 	};
};

bio.display();


var work = {
	"jobs": [
	{
		"employer": "Trace-it Systems",
		"title": "Web Developer Intern",
		"location": "Naperville, IL",
		"dates": "Summer 2015",
		"description": "Worked on a Cordova cross platform mobile app for Android and iOS. Analyzed and Debugged the app. Created Documentation for work done and future work on project"
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

var displayWork = function() {

	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedWorkExperience = formattedEmployer + formattedTitle + formattedDates +  formattedLocation + formattedDescription;
		$(".work-entry:last").append(formattedWorkExperience);
	}

}

displayWork();

var education = {
	"schools": [
	{
		"name": "College of DuPage",
		"location": "Glen Ellyn, IL",
		"degree": "Certificate",
		"focus": ["Web & Software Development"],
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
],
	"onlineCourses": [
	{
		"title": "Front End Developer Nanodegree",
		"school": "Udacity",
		"dates": "2015",
		"url": "http://udacity.com"

	},
	{
		"title": "Responsive Web Design Fundamentals",
		"school": "Udacity",
		"dates": "2015",
		"url": "http://udacity.com"
	},
	{
		"title": "Responsive Images",
		"school": "Udacity",
		"dates": "2015",
		"url": "http://udacity.com"
	},
	{
		"title": "Javascript Basics",
		"school": "Udacity",
		"dates": "2015",
		"url": "http://udacity.com"
	}

	]
};

education.displaySchool = function () {

	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedDegreee = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegreee);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		for (major in education.schools[school].focus) {
			var formattedFocus= HTMLschoolMajor.replace("%data%", education.schools[school].focus[major]);
			$(".education-entry:last").append(formattedFocus);
		}

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
	};

	$(".education-entry:last").append(HTMLonlineClasses);

	for (course in education.onlineCourses) {

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedTitle);

		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedURL= HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedURL);
	};
};

education.displaySchool();



var projects = {
	"projects": [
	{
		"title": "http://www.kevinbudd.com\"\>Portfolio",
		"dates": "September 2015",
		"description": "Online portfolio featuring ongoing work for Front End Developer Nanodegree",
		"images": ["http://kevinbudd.com/img/park.jpg", "http://kevinbudd.com/img/reflection.jpg"]
	},
	{
		"title": "http://students.thatlink.com/Student11//Project5.aspx\"\>Coffee Cupping Database",
		"dates": "May 2015",
		"description": "SQL Database storing results of coffee cupping with visual graphs represeting results",
		"images": ["images/coffee_front.jpg", "images/coffee_graph.jpg"]
	}
	]
};

projects.display = function () {

	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedprojectImage);
			}
		}
	}
}

projects.display();


function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    name = $("#name").text();

    return name;
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);





