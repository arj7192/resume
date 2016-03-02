



var bio = {
	"name":"Ashish Ranjan Jha", 
	"role":"Software Developer | Data Scientist", 
	"contacts": {
		"mobile" : "+41 78857 4693",
		"email" : "arj7192@gmail.com",
		"github": "arj7192",
		"linkedin": "ashishrj",
		"location": "Lausanne, Switzerland"
	},
	"welcomeMessage": "Learning is growing is what I believe",
	"skills" : [
	"machine learning", "data mining", "data visualization", "web development"
	],
	"bioPic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/3/005/01f/37f/3b0f480.jpg",
	"display": function(){
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
		$("#topContacts").append(formattedLinkedin);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedBiopic);
		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcome);
		$("#header").append(HTMLskillsStart);
		for (skill in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill)
		}
	}
};

bio.display();


var work = {
	"jobs": [
	{
		"employer": "Sony Deutschland GmbH",
		"title": "Machine Learning Intern",
		"location": "Stuttgart, Germany",
		"dates": "2015-2016",
		"description": "Implemented Sony’s first audio event detection system using neural networks in Python’s Theano library"
	},
	{
		"employer": "Oracle India Private Limited",
		"title": "Applications Engineer",
		"location": "Bangalore, India",
		"dates": "2013-2014",
		"description": "Developed APIs for ‘social_question’, ‘social_comments’, etc. classes in C++ while working for the SCS (Social Customer Service) project. These functionalities were included in the Oracle RightNow 14.8 product release"
	}
	],
	"display": function(){

		for (job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title)
			$(".work-entry:last").append(formattedEmployer + formattedTitle)
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location)
			$(".work-entry:last").append(formattedLocation)
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates)
			$(".work-entry:last").append(formattedDates)
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description)
			$(".work-entry:last").append(formattedDescription)
		}
	}
};


work.display();



var projects = {
	"projects":[
	{
		"title": "Mobility analytics using machine learning",
		"dates": "2016",
		"description": "Building a machine learning toolkit to extract mobility patterns and information using mobile phone sensor data. Also designing a website to host the mobility data analysis and predictions", 
		"images": ["url_string_1","url_string_2"]
	},
	{
		"title": "Human pose estimation using Deep Learning",
		"dates": "2015",
		"description": "Used RGB images from Human80K dataset to regress 3D poses using deep convolutional neural network. Obtained state-of-the-art results. Theano, Matlab.",
		"images": ["url_string_1","url_string_2"]
	},
	{
		"title": "Deep Learning to identify patterns in Manuscripts",
		"dates": "2015",
		"description": "Implemented image pre-processing task for manuscript pages and extraction of words and sentences from handwritten text. OpenCV-Java, Spark.",
		"images": ["url_string_1","url_string_2"]
	},
	{
		"title": "Travel Search Optimizer",
		"dates": "2015",
		"description": "Finding when-to-search for best availability and prices at sites like blablacar by learning the variation patterns using neural networks. Scikit-Learn, TensorFlow, Amazon EC2.",
		"images": ["url_string_1","url_string_2"]
	},
	{
		"title": "Implicit feedback based Recommender System",
		"dates": "2014",
		"description": "Built a song recommender system based on user-user collaborative filtering using alternating least-squares model. Matlab.",
		"images": ["url_string_1","url_string_2"]
	},
	{
		"title": "Person detection in Images",
		"dates": "2014",
		"description": "Designed an SVM and a logistic regression model using HOG (Histogram of Gradients) of images as input features. Evaluated using ROC curve. Matlab.",
		"images": ["url_string_1","url_string_2"]
	},
	{
		"title": "Anthropomorphism analysis in Human-Robot Interaction (HRI) by Eye-Tracking",
		"dates": "2014",
		"description": "Designed and conducted an HRI experiment. Analyzed gaze-patterns data of 40 participants. R, SMI Begaze.",
		"images": [/*"url_string_1","url_string_2"*/]
	}
	],
	"display": function(){

		for (project in projects.projects){
			$("#projects").append(HTMLprojectStart);			
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title)
			$(".project-entry:last").append(formattedTitle)			
			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates)
			$(".project-entry:last").append(formattedDates)
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description)
			$(".project-entry:last").append(formattedDescription)
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images)
			$(".project-entry:last").append(formattedImage)			
		}
	}
};


projects.display();


var education = {
	"schools": [
	{
		"name": "Ecole Polytechnique Federale de Lausanne",
		"location": "Route Cantonale, 1015 Lausanne, Switzerland",
		"degree": "Master of Science",
		"majors": "Computer Science",
		"dates": "2014-2016",
		"url": "https://www.epfl.ch/"
	},
	{
		"name": "Indian Institute of Technology Roorkee",
		"location": "Roorkee - Haridwar Highway, Roorkee, Uttarakhand 247667, India",
		"degree": "Bachelor of Engineering",
		"majors": "Electrical Engineering",
		"dates": "2009-2013",
		"url": "http://www.iitr.ac.in/"
	}
	],
	"onlineCourses": [
	{
		"title": "Web Development",
		"school": "Udacity",
		"dates": "2016",
		"url": "https://www.udacity.com/course/web-development--cs253"
	},
	{
		"title": "Javascript basics",
		"school": "Udacity",
		"dates": "2016",
		"url": "https://www.udacity.com/courses/ud804"
	},
	{
		"title": "Mining Massive Datasets",
		"school": "Stanford University",
		"dates": "2014-2015",
		"url": "https://www.coursera.org/course/mmds"
	},
	{
		"title": "Algorithms: Design and Analysis, part 1",
		"school": "Stanford University",
		"dates": "2014-2015",
		"url": "https://www.coursera.org/course/algo"
	},
	{
		"title": "Machine Learning",
		"school": "Stanford University",
		"dates": "2014-2015",
		"url": "https://www.coursera.org/learn/machine-learning"
	},
	{
		"title": "Introduction to Logic",
		"school": "Stanford University",
		"dates": "2013-2014",
		"url": "https://www.coursera.org/course/intrologic"
	}
	],
	"display": function(){			
		for (school in education.schools){
			$("#education").append(HTMLschoolStart);				
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name)
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree)
			$(".education-entry:last").append(formattedName + formattedDegree)						
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates)
			$(".education-entry:last").append(formattedDates)
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location)
			$(".education-entry:last").append(formattedLocation)
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors)
			$(".education-entry:last").append(formattedMajor)			
		}
		$("#education").append("<br>");
		$("#education").append(HTMLonlineClasses);
		for (course in education.onlineCourses){
			$("#education").append(HTMLschoolStart);				
			var formattedName = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title)
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school)
			$(".education-entry:last").append(formattedName + formattedSchool)						
			var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates)
			$(".education-entry:last").append(formattedDates)
			var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url)
			$(".education-entry:last").append(formattedUrl)	
			$(".education-entry:last").append("<br>")		
		}
	}
};

education.display()


//var formattedMap = googleMap.replace("map", "mapDiv");
$("#mapDiv").append(googleMap)

//var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contact_info).replace("%contact%", "Email:");
//var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
//$("#header").append(formattedContact);
//$("#header").append(formattedWelcome);