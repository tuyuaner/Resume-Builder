/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Yuan Tu",
    "role": "Software Engineer",
    "contacts": {
        "phone": "319-333-5307",
        "email": "ns.yuantu@gmail.com",
        "location": "San Francisco"
    },
    "pictureURL": "images/me.jpeg",
    "welcomeMessage": "Targeting on a full-time entry-level position",
    "skills": ["Java", "Python", "C#", "Ruby", "JavaScript/JQuery", "Swift", "SQL", "C++", "PHP", "C", "Web Development", "iOS Development", "Android Development", "ASP.NET", "Ruby on Rails", "Bootstrap", "AngularJS"]
};

var myName = HTMLheaderName.replace("%data%", bio.name);
var myRole = HTMLheaderRole.replace("%data%", bio.role);
var myPhone = HTMLmobile.replace("%data%", bio.contacts.phone);
var myEmail = HTMLemail.replace("%data%", bio.contacts.email);
var myLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var selfie = HTMLbioPic.replace("%data%", bio.pictureURL);
var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

$("#general").append(myName).append(myRole).append(selfie);
$("#topContacts").append(myPhone).append(myEmail).append(myLocation);
$("#general2").append(welcome);
$("#general2").append(HTMLskillsStart);

for (s in bio.skills) {
    var skill = HTMLskills.replace("%data%", bio.skills[s]);
    $("#general2").append(skill);
};

var work = {
    "jobs": [{
            "name": "GOLDEN PATH CONSULTING LLC.",
            "title": "Software Development Engineer",
            "date": "Jan. 2017 - Present",
            "location": "Iowa City, Iowa",
            "description": ["Worked on developing internal management services for different clients with ASP.NET core MVC using C#, Microsoft SQL server as back-end, JavaScript/JQuery and HTML5/CSS3 as front-end.", "Developed and designed dynamic web applications for several clients with interactive features to optimize traffic, page views and user experience (UX)."]
        }, {
            "name": "TIPPIE COLLEGE OF BUSINESS, UNIVERSITY OF IOWA",
            "title": "Research Assistant & iOS Developer",
            "date": "May. 2016 - Aug. 2016",
            "location": "Iowa City, Iowa",
            "description": ["Developed in Xcode using Swift a social network and team research application(Team Diagnosis) targeting U.S. and Chinese market.", "Provided diagnose information to the companies whose teams use the application to record their team interactions.", "Researched and prepared advanced data analysis on the daily log data produced by the application in R studio."]
        },
        {
            "name": "TRANSLACARE INC.",
            "title": "Software Development Engineer Intern",
            "date": "May. 2015 - Aug. 2015",
            "location": "Iowa City, Iowa",
            "description": ["Collaborated in web application design, implementation, testing and maintenance of the Translacare’s Iconotouch project.", "Developed and tested the Iconotouch website with HTML5/CSS3, JavaScript/JQuery, ASP.NET MVC, Entity Framework and client side frameworks such as Bootstrap, AngularJS.", "Worked on an interactive Text-to-Speech module to convert patient’s input into voices."]
        },
        {
            "name": "ENERGY CONTROL CENTER (ECC), FACILITIES MANAGEMENT, THE UNIVERSITY OF IOWA",
            "title": "Application Developer Intern",
            "date": "May. 2014 - May. 2015",
            "location": "Iowa City, Iowa",
            "description": ["Worked on a dashboard website application using C#/ASP.NET for clients to view energy consumption and utility costs of the campus.", "Developed and tested reporting applications using C#, Python and Visual Basic for different business needs with Microsoft SQL Server."]
        }
    ]
};

work.display = function() {
    for (job = 0; job < work.jobs.length; job += 1) {
        var name = HTMLworkEmployer.replace("%data%", work.jobs[job].name);
        var title = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var date = HTMLworkDates.replace("%data%", work.jobs[job].date);
        var place = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var description = "<ul style=\"list-style-type:disc\">";
        for (des = 0; des < work.jobs[job].description.length; des += 1) {
            var list = "<li style= \" margin: 5px;\">" + work.jobs[job].description[des] + "</li>";
            description += (list);
        }
        description += ("</ul>");
        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(name + title).append(date + "\b");
        $(".work-entry:last").append(place);
        $(".work-entry:last").append(description);
    };
};
work.display();

var project = {
    "projects": [{
        "name": "Sunny Day Android Application",
        "skills": "Android Studio, Java, Json",
        "date": "March 2017",
        "description": ["Developed weather service application with Android Studio and Java in a multithreading environment.", "Wrote unit tests for mobile code and debugged critical application issues such as crashes, memory leaks, and concurrency problems.", "Performed customizations in order to enhance user experience such as set temperature preferences to define what is hot or cold for your liking."]
    }, {
        "name": "Project Portfolio Creation Platform",
        "skills": "RUBY ON RAILS, JAVASCRIPT/JQUERY, BOOTSTRAP, HTML/CSS, MYSQL",
        "date": "Dec. 2016",
        "description": ["Developed a service web App to facilitate easy creation and documentation of project that uses Scrum as the development process.", "Integrated Amazon Web Services, PaperClip, SendGrid, and Solr server into the web application on Heroku.", "Performed 224 unit testing examples with RSpec that received 99.95% coverage, and 270 cucumber scenarios for integration testing."]
    }, {
        "name": "Predict NBA Games using Machine Learning Methods",
        "skills": "MACHINE LEARNING, PYTHON/SCIKIT-LEARN",
        "date": "Jan. 2016",
        "description": ["Developed 10 key features indicate different perspectives of team performance using Python.", "Achieved 80% prediction accuracy based on a given NBA regular season."]
    }, {
        "name": "Apple Watch Hydration Reminder Application",
        "skills": "XCODE, SWIFT, JAVASCRIPT",
        "date": "May. 2015",
        "description": ["Developed an apple watch app written in Swift, it allows users to monitor their water consumption by calculating the recommended amount based on age, gender, and weight."]
    }]
};

project.display = function() {
    for (proj = 0; proj < project.projects.length; proj += 1) {
        var title = HTMLprojectTitle.replace("%data%", project.projects[proj].name);
        var date = HTMLprojectDates.replace("%data%", project.projects[proj].date);
        var skills = HTMLworkLocation.replace("%data%", project.projects[proj].skills);

        var description = "<ul style=\"list-style-type:disc\">";
        for (des = 0; des < project.projects[proj].description.length; des += 1) {
            var list = "<li style= \" margin: 5px;\">" + project.projects[proj].description[des] + "</li>";

            description += (list);
        }
        description += ("</ul>");

        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(title).append(date + "\b");
        $(".project-entry:last").append(skills);
        $(".project-entry:last").append(description);

    };
};
project.display();

var education = {
    "school": [{
        "name": "University of Iowa",
        "degree": "Master",
        "date": "2015 - 2016",
        "location": "Iowa City, Iowa",
        "major": ["Computer Science"]
    }, {
        "name": "University of Iowa",
        "degree": "BA",
        "date": "2011 - 2015",
        "location": "Iowa City, Iowa",
        "major": ["Computer Science"]
    }, {
        "name": "University of Iowa",
        "degree": "BBA",
        "date": "2011 - 2015",
        "location": "Iowa City, Iowa",
        "major": ["Finance"]
    }]
};



education.display = function() {
    for (i = 0; i < education.school.length; i += 1) {
        var name = HTMLschoolName.replace("%data%", education.school[i].name);
        var date = HTMLschoolDates.replace("%data%", education.school[i].date);
        var degree = HTMLschoolDegree.replace("%data%", education.school[i].degree);
        var major = HTMLschoolMajor.replace("%data%", education.school[i].major);
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(name).append(date + "\b");
        $(".education-entry:last").append(degree);
        $(".education-entry:last").append(major);

    };
};
education.display();