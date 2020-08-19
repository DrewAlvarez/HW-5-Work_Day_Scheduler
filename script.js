$(document).ready(function () {
    var timeSlots = ["9Am","10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

    //timeSlots.forEach()
    for(var i=0; i< timeSlots.length; i++){
        var newDiv = $("<div>");
        var timeDiv = $("<div>");
        var descripDiv = $("<textarea>")
        var buttonEl = $("<button>")
        var iconEl = $("<i>")

        newDiv.attr("data-hour", timeSlots[i])
        newDiv.attr("class", "row")

        buttonEl.attr("class", "saveBtn col-1")
        iconEl.attr("class", "far fa-save")
        timeDiv.attr("class","hour col-1")
        descripDiv.attr("class", "description col-10")
    
        $(".container").append(newDiv)

        newDiv.append(timeDiv)
        newDiv.append(descripDiv)
        newDiv.append(buttonEl)

        buttonEl.append(iconEl)
        timeDiv.text(timeSlots[i])


    }



})
//condition checks for past present future
//date and time displayed on jumbotron
//localstorage.getItem()      setItem() on button click (THISSSSSS)
