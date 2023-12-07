$(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    $('.saveBtn').on('click', function(){
        var input = $(this).siblings('.description').val().trim();
        var timeId = $(this).parent().attr('id');
        if (input === ''){
            return;
        } else {
            localStorage.setItem(timeId,input);
            displayInput();

        };
        
    });
    
    function displayInput() {
        var timeId = $('.time-block').siblings().attr('id');
        var tasks = localStorage.getItem(timeId);
        var textArea = $(timeId).child('.description').val();
        var containers = $('.time-block');
        

        containers.forEach(function(){
            textArea.textContent = tasks;
        })
            
        };

    
        
    

    

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


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    

    // TODO: Add code to display the current date in the header of the page.
    //displays current day in header
var currentDay = dayjs().format('dddd, MMMM D');
$('#currentDay').text(currentDay);


addBackgroundColor();
displayTaks();
});

  