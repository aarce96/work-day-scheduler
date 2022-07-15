/* variable for today's date */
var currentDate = moment().format("MMMM Do YYYY");

/* jQuery selector to grab the element with an ID, currentDay */
$("#currentDay").text(currentDate);

/* save task function */
$(".saveBtn").on("click", function() {
    //alert("Task Saved!");

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
$("#time9AM .description").val(localStorage.getItem("time9AM"));
$("#time10AM .description").val(localStorage.getItem("time10AM"));
$("#time11AM .description").val(localStorage.getItem("time11AM"));
$("#time12PM .description").val(localStorage.getItem("time12PM"));
$("#time1PM .description").val(localStorage.getItem("time1PM"));
$("#time2PM .description").val(localStorage.getItem("time2PM"));
$("#time3PM .description").val(localStorage.getItem("time3PM"));
$("#time4PM .description").val(localStorage.getItem("time4PM"));
$("#time5PM .description").val(localStorage.getItem("time5PM"));

/* function for colored time block: past, present and future */
var colorTimeBlock = function() {
    /* get current hour */
    var currentTime = moment().hour();

    // loop through each function
    $(".time-block").each(function() {
        var timeBlock = parseInt($(this)
            .attr("id")
            .split("time")[1]
            );

        // if/else to color-code time blocks
        if(timeBlock < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if(timeBlock === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
};

/* call the function */
colorTimeBlock();
