/*
This is empty on purpose! Your code to build the resume will go here.
 */
/* var name = "Julien Kouassi";
 var role = "Web Developer";
 
 var formattedName;
 var formattedRole;
 
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);

var skills  = 
["Faith","Awesomeness","Programming","Modeling"];
var bio= {
 "name" : "Julien",
 "age" : 32,
 "contact info" : "julienayheva@gmail.com",
 "picture" :"images/Masque_Combat.jpg",
 "Skills" : skills
}
var formattedBio;
var formattedBio = HTML
$("#main").append(bio.name);
*/
var work = {};
work["position"] = "3D Artist";
work["employer"] = "Freelance";
work["Years"] = 2;

var education = {};
education.name = "ISTC";
education.years = 3;
education.city = "Abidjan";


$("main").append(education.name);
$("main").append(work["position"]);
