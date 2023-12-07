$(function () {
//saves input onto local storage when button is pressed
$('.saveBtn').on('click', function(){
    var input = $(this).siblings('.description').val().trim();
    var timeId = $(this).parent().attr('id');

    if (input === ''){
        return;
    } else {
        localStorage.setItem(timeId,input);
        displayInput();
    }
})
        
    
//gets local storage items and places it on html
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-1 .description').val(localStorage.getItem('hour-1'));
    $('#hour-2 .description').val(localStorage.getItem('hour-2'));
    $('#hour-3 .description').val(localStorage.getItem('hour-3'));
    $('#hour-4 .description').val(localStorage.getItem('hour-4'));
    $('#hour-5 .description').val(localStorage.getItem('hour-5'));    
    
//changes background of the blocks depending on the time
    function addBackgroundColor() {
        var currentHour = dayjs().hour();
    
        $('.time-block').each(function () {
            var timeId = parseInt($(this).attr('id').split("hour")[1]);
    
            if (currentHour > timeId) {
                $(this).removeClass('future');
                $(this).removeClass('present');
                $(this).addClass('past');
            } else if (currentHour >= timeId) {
                $(this).removeClass('future');
                $(this).addClass('present');
            } else {
                $(this).removeClass('present');
                $(this).removeClass('past');
                $(this).addClass('future');
            }
        });
    }


//displays time in the top of the doc
var advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(advancedFormat);

var currentDay = dayjs().format('dddd, MMMM Do');
$('#currentDay').text(currentDay);


addBackgroundColor();
});

  