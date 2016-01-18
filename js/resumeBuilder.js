/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name : "Suraj Srinivasa",
    role : "Full Stack Developer",
    contact : {
        email : "suraj.srinivasa@gmail.com",
        phone : "352-665-1892"   
    },
    picUrl : "c:/users/Suraj/Documents/surajs.jpg",
    skills : ["Python", "Java", "JavaScript"]
};
bio.work = [{
    title : "Senior Software Engineer 1",
    description : "Working in a DevOps role to automate the deployment and monitoring of Citrix's flagship XenDesktop application in the cloud as part of the Citrix Workspace Cloud suite.",
    employer : "Citrix Systems",
    from : "June 2014",
    to : "Current",
    city : "Fort Lauderdale",
    state : "Florida"
}];
bio.education = [
    {
        "name" : "University of Florida",
        "city" : "Gainesville",
        "state" : "Florida",
        "from" : "August 2010",
        "to" : "May 2012",
        "degree" : "Masters in Computer Engineering"
    },
    {
        "name" : "National Institute of Technology Karnataka, India",
        "city" : "Surathkal",
        "state" : "Karnataka",
        "from" : "August 2006",
        "to" : "May 2010",
        "degree" : "Bachelors in Computer Engineering"
    }
]
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedPhone = HTMLmobile.replace("%data%", bio.contact.phone);
var formattedPic = HTMLbioPic.replace("%data%", bio.picUrl);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
$("#header").prepend(formattedSkills);
$("#header").prepend(formattedPic);
$("#header").prepend(formattedPhone);
$("#header").prepend(formattedEmail);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var formattedWorkTitle = HTMLworkTitle.replace("%data%", bio.work[0].title);
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", bio.work[0].employer);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", bio.work[0].city + ", " + bio.work[0].state);
var formattedWorkDates = HTMLworkDates.replace("%data%", bio.work[0].from + " - " + bio.work[0].to);
var formattedworkDescription = HTMLworkDescription.replace("%data%", bio.work[0].description);
$("#workExperience").append(formattedWorkTitle);
$("#workExperience").append(formattedWorkEmployer);
$("#workExperience").append(formattedWorkLocation);
$("#workExperience").append(formattedWorkDates);
$("#workExperience").append(formattedworkDescription);
