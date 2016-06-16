/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var formattedName = "Julien Kouassi";
 var formattedRole = "Web Developper";
 
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);
var formattedRole = HTMLheaderName.replace("%data%", role);
$("#header").prepend(formattedRole);
