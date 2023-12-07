
var container1 = $('#hour-9');
var container2 = $('#hour-10');
var container3 = $('#hour-11');
var container4 = $('#hour-12');
var container5 = $('#hour-1');
var container6 = $('#hour-2');
var container7 = $('#hour-3');
var container8 = $('#hour-4');
var container9 = $('#hour-5');

function addBackgroundColor() {
    var currentHour = dayjs().hour();

    if (currentHour > 9) {
        container1.removeClass('future');
        container1.addClass('past');
    } else if (currentHour >= 9) {
        container1.removeClass('future');
        container1.addClass('present');
    } else {
        container1.removeClass('present');
        container1.addClass('future');
    }


    if (currentHour > 10) {
        container2.removeClass('future')
        container2.addClass('past');
    } else if (currentHour >= 10) {
        container2.removeClass('future');
        container2.addClass('present');
    } else {
        container2.removeClass('present');
        container2.addClass('future');
    }

    if (currentHour > 11) {
        container3.removeClass('future')
        container3.addClass('past');
    } else if (currentHour >= 11) {
        container3.removeClass('future');
        container3.addClass('present');
    } else {
        container3.removeClass('present');
        container3.addClass('future');
    }

    if (currentHour > 12) {
        container4.removeClass('future')
        container4.addClass('past');
    } else if (currentHour >= 12) {
        container4.removeClass('future');
        container.addClass('present');
    } else {
        container4.removeClass('present');
        container4.addClass('future');
    }

    if (currentHour > 13) {
        container5.removeClass('future')
        container5.addClass('past');
    } else if (currentHour >= 13) {
        container5.removeClass('future');
        container5.addClass('present');
    } else {
        container5.removeClass('present');
        container5.addClass('future');
    }

    if (currentHour > 14) {
        container6.removeClass('future')
        container6.addClass('past');
    } else if (currentHour >= 14) {
        container6.removeClass('future');
        container6.addClass('present');
    } else {
        container6.removeClass('present');
        container6.addClass('future');
    }

    if (currentHour > 15) {
        container7.removeClass('future')
        container7.addClass('past');
    } else if (currentHour >= 15) {
        container7.removeClass('future');
        container7.addClass('present');
    } else {
        container7.removeClass('present');
        container7.addClass('future');
    }

    if (currentHour > 16) {
        container8.removeClass('future')
        container8.addClass('past');
    } else if (currentHour >= 16) {
        container8.removeClass('future');
        container8.addClass('present');
    } else {
        container8.removeClass('present');
        container8.addClass('future');
    }

    if (currentHour > 17) {
        container9.removeClass('future')
        container9.addClass('past');
    } else if (currentHour >= 17) {
        container9.removeClass('future');
        container9.addClass('present');
    } else {
        container9.removeClass('present');
        container9.addClass('future');
    }
}


$(function () {
    
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    $('.saveBtn').on('click', function(event){
        event.preventDefault();

        var input = $(this).siblings('.description').val().trim();
        var timeId = $(this).parent().attr('id')
        if (input === ''){
            return;
        } else {

            localStorage.setItem('todo',JSON.stringify('input'));
        }
    })


    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    

    // TODO: Add code to display the current date in the header of the page.
    //displays current day in header
var currentDay = dayjs().format('dddd, MMMM D');
$('#currentDay').text(currentDay);

  });

  addBackgroundColor();