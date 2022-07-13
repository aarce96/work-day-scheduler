/* variable for today's date */
var currentDate = moment().format("MMMM Do YYYY");

/* jQuery selector to grab the element with an ID, currentDay */
$("#currentDay").text(currentDate);

