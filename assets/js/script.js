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
    /* each text area has a class of description */
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

/* function for colored time block: past, present and future */
var colorTimeBlock = function() {
    /* get current hour */
    var currentTime = moment().hour();

    // loop through each function
    $(".time-block").each(function() {
        var timeBlock = parseInt($(this)
            .attr("id")
            .split("hour")[1]
            );

        // if/else to color-code time blocks
        if(timeBlock < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if(timeBlock === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
};

/* call the function */
colorTimeBlock();