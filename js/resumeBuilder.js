/** resumeBuilder contains JSON objects and functions to display them
  * in order to populate the resume
  */

// Bio information

//=============== Model ===================\\

var model = {

    bio: {
        'name': 'Kevin Budd',
        'role': 'Web Developer',
        'contacts': {
            'mobile': '630-373-9596',
            'email': 'kevin@kevinbudd.com',
            'github': 'kevinpmbudd',
            'location': 'Naperville, IL'
        },
        'welcomeMessage': 'Welcome! Please take a moment and enjoy learning a little bit about me.',
        'skills': ['HTML/CSS/Javascript', 'Java', 'SQL', 'Still Learning'],
        'bioPic': 'images/me.jpg'
    },

    work: {
        'jobs': [{
            'employer': 'Trace-it Systems',
            'title': 'Web Developer Intern',
            'location': 'Naperville, IL',
            'dates': 'Summer 2015',
            'description': 'Worked on a Cordova cross platform mobile app for Android and iOS. Analyzed and Debugged the app. Created Documentation for work done and future work on project'
        }, {
            'employer': 'Freelance',
            'title': 'Yoga Teacher',
            'location': 'Naperville, IL',
            'dates': '2010-2014',
            'description': 'Taught weekly classes, workshops and teacher trainings. Maintained website for promoting my teaching.'
        }]
    },

    education: {
        'schools': [{
            'nameUrl': 'http://dupage.edu',
            'name': 'College of DuPage',
            'location': 'Glen Ellyn, IL',
            'degree': 'Certificate',
            'focus': ['Web & Software Development'],
            'dates': '2014-2015',
            'url': 'http://cod.edu'
        }, {
            'nameUrl': 'http://depaul.edu',
            'name': 'DePaul University',
            'location': 'Chicago, IL',
            'degree': 'BS',
            'focus': ['Human-Computer Interaction'],
            'dates': '2001-2005',
            'url': 'http://depaul.edu'
        }],
        'onlineCourses': [{
            'title': 'Front End Developer Nanodegree',
            'school': 'Udacity',
            'dates': '2015',
            'url': 'http://udacity.com'

        }, {
            'title': 'Responsive Web Design Fundamentals',
            'school': 'Udacity',
            'dates': '2015',
            'url': 'http://udacity.com'
        }, {
            'title': 'Responsive Images',
            'school': 'Udacity',
            'dates': '2015',
            'url': 'http://udacity.com'
        }, {
            'title': 'Javascript Basics',
            'school': 'Udacity',
            'dates': '2015',
            'url': 'http://udacity.com'
        }

        ]
    },

    projects: {
        'projects': [{
            'title': 'http://www.kevinbudd.com\'\>Portfolio',
            'dates': 'September 2015',
            'description': 'Online portfolio featuring ongoing work for Front End Developer Nanodegree',
            'images': ['http://kevinbudd.com/img/park.jpg', 'http://kevinbudd.com/img/reflection.jpg']
        }, {
            'title': 'http://students.thatlink.com/Student11//Project5.aspx\'\>Coffee Cupping Database',
            'dates': 'May 2015',
            'description': 'SQL Database storing results of coffee cupping with visual graphs represeting results',
            'images': ['images/coffee_front.jpg', 'images/coffee_graph.jpg']
        }]
    }

};

//=============== View ===================\\

var view = {
    init: function() {


        this.render();
    },
    render: function() {

        var bio = octopus.bioObj,
            work = octopus.workObj,
            education = octopus.educationObj,
            projects = octopus.projectsObj;
            console.log(bio);

    // 'use strict';
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);
    $('.flex-box').append(formattedMobile);
    $('.flex-box').append(formattedEmail);
    $('.flex-box').append(formattedGitHub);
    $('.flex-box').append(formattedLocation);
    $('#header').append(formattedBioPic);
    $('#header').append(formattedWelcomeMsg);

    if (bio.skills.length) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formatedskills = HTMLskills.replace('%data%', skill);
            $('#skills:last').append(formatedskills);
        });
    }

    work.jobs.forEach(function(job) {
        $('#workExperience').append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
        var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
        var formattedDates = HTMLworkDates.replace('%data%', job.dates);
        var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
        var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
        var formattedWorkExperience = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
        $('.work-entry:last').append(formattedWorkExperience);
    });

    education.schools.forEach(function(school) {
        $('#education').append(HTMLschoolStart);

        var formattedUrl = HTMLschoolNameUrl.replace('%data%', school.nameUrl);
        $('.education-entry:last').append(formattedUrl);

        var formattedName = HTMLschoolName.replace('%data%', school.name);
        $('.education-entry:last').append(formattedName);

        var formattedDegreee = HTMLschoolDegree.replace('%data%', school.degree);
        $('.education-entry:last').append(formattedDegreee);

        school.focus.forEach(function(major) {
            var formattedFocus = HTMLschoolMajor.replace('%data%', major);
            $('.education-entry:last').append(formattedFocus);
        });

        var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
        $('.education-entry:last').append(formattedLocation);
    });

    $('.education-entry:last').append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(course) {

        var formattedTitle = HTMLonlineTitle.replace('%data%', course.title);
        $('.education-entry:last').append(formattedTitle);

        var formattedSchool = HTMLonlineSchool.replace('%data%', course.school);
        $('.education-entry:last').append(formattedSchool);

        var formattedDates = HTMLonlineDates.replace('%data%', course.dates);
        $('.education-entry:last').append(formattedDates);

        var formattedURL = HTMLonlineURL.replace('%data%', course.url);
        $('.education-entry:last').append(formattedURL);
    });

    projects.projects.forEach(function(project) {
        $('#projects').append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
        $('.project-entry:last').append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
        $('.project-entry:last').append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace('%data%', project.description);
        $('.project-entry:last').append(formattedDescription);

        if (project.images.length) {
            project.images.forEach(function(image) {
                var formattedprojectImage = HTMLprojectImage.replace('%data%', image);
                $('.project-entry:last').append(formattedprojectImage);
            });
        }
    });

    }

};

//============== Octopus ==================\\

var octopus = {
    init: function() {
            this.bioObj = model.bio,
            this.workObj = model.work,
            this.educationObj = model.education,
            this.projectsObj = model.projects;

        view.init();

        console.log(this.bioObj);

    }
};

octopus.init();

//function to uppercase last name and capatalize first name
function inName() {
    var name = [];
    name = octopus.bioObj.name.trim().split(' ');
    console.log(name);
    var lastName = name[1].toUpperCase();
    var firstName = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    var newName = firstName + " " + lastName;

    return newName;
}

// display internationalize button
$('#main').append(internationalizeButton);

// display google map
$('#mapDiv').append(googleMap);