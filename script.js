$(document).ready(function () {
    var timeSlots = ["9AM","10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

    //current day
    $("#currentDay").text(moment().format('dddd') +", " + moment().format("MMM Do"))

    //timeSlots.forEach()
    for(var i=0; i< timeSlots.length; i++){
        var newDiv = $("<div>");
        var timeDiv = $("<div>");
        var descripDiv = $("<textarea>");
        var buttonEl = $("<button>");
        var iconEl = $("<i>");
        //setting attributes
        newDiv.attr("data-hour", timeSlots[i]);
        newDiv.attr("class", "row");
        buttonEl.attr("class", "saveBtn col-1");
        iconEl.attr("class", "far fa-save");
        timeDiv.attr("class","hour col-1");
        descripDiv.attr("class", "description col-10");
        //appending elements
        $(".container").append(newDiv);
        newDiv.append(timeDiv);
        newDiv.append(descripDiv);
        newDiv.append(buttonEl);
        buttonEl.append(iconEl);

        timeDiv.text(timeSlots[i]);

        descripDiv.text(localStorage.getItem(timeSlots[i]))
        //backgroud logic
        if((i+9) < moment().hour()){
            descripDiv.attr("class", "past col-10");
        }else if((i+9) === moment().hour()){
            descripDiv.attr("class", "present col-10");
        }else{
            descripDiv.attr("class", "future col-10");
        }
        //button function
        buttonEl.on("click", function(){
            var note = $(this).siblings("textarea").val();
            var notes = $(this).parent().attr("data-hour");
            localStorage.setItem(notes, note);
        })


    }
    

})
//condition checks for past present future
//date and time displayed on jumbotron

