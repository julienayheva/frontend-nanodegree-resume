/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name = "Julien Kouassi";
 var role = "Web Developer";
 
 var formattedName;
 var formattedRole;
 
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
