/* variable for today's date */
var currentDate = moment().format("MMMM Do YYYY");

/* jQuery selector to grab the element with an ID, currentDay */
$("#currentDay").text(currentDate);

/* save task function */
$(".saveBtn").on("click", function() {
    alert("Task Saved!");

    /* created an ID for each time block in div element */
    var time = $(this)
        .parent()
        .attr("id");
    /* each time block has a class of description */
    var text = $(this)
        .siblings(".description")
        .val();

    localStorage.setItem(time, text);
});

/* get local storage information */
$("#9AM .description").val(localStorage.getItem("9AM"));
$("#10AM .description").val(localStorage.getItem("10AM"));
$("#11AM .description").val(localStorage.getItem("11AM"));
$("#12PM .description").val(localStorage.getItem("12PM"));
$("#1PM .description").val(localStorage.getItem("1PM"));
$("#2PM .description").val(localStorage.getItem("2PM"));
$("#3PM .description").val(localStorage.getItem("3PM"));
$("#4PM .description").val(localStorage.getItem("4PM"));
$("#5PM .description").val(localStorage.getItem("5PM"));