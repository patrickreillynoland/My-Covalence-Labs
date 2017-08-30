// My information
var myName = "Patrick Noland";
myName = myName.toUpperCase();
var myJobTitle = "Front End Developer";
var myDescription = "In reality, I just want to perform sick scooter tricks for a living but I have yet to find a way to make that economically feasible.";
var myInterests = ["Basketball", "Music", "International Politics"];

//The resume
console.log("Name: " + myName);
console.log("Job Title: " + myJobTitle);
console.log("Description: " + myDescription);
console.log("My Interests:");

for (var i = 0; i < myInterests.length; i++) {
    console.log("* " + myInterests[i]);
}

console.log("My Previous Experience: ")

//Positions
function displayPosition(companyName, jobTitle, description) {
    console.log(jobTitle + " at " + companyName + " - " + description);
}

displayPosition("Letterbox", "Wordpress Designer", "I created basic informational websites for healthcare and non-profit organizations.");
displayPosition("IMS", "Copywriter", "I wrote white papers, articles, and additional copy for a range of clients.");
displayPosition("Jimmy John's", "Delivery Guy", "I delivered.");

//Skills
console.log("My skills: ");

function displaySkill(skillName, isSkillCool) {
    if (isSkillCool === true) {
        console.log("* BAM: " + skillName);
    } else {
        console.log("* " + skillName);
    }
}

displaySkill('Basketball ', true);
displaySkill('Drums ', false);
displaySkill('Leatherworking ', true);
displaySkill('HTML & CSS', true);
displaySkill('Eating', false);



