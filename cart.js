$(document).ready(function(){
    /*-------appending list function-------------*/
var dust = '<span class = "dust"></span>';
    var notification = '<span class = "notification"></span>';
$("#add").click(function(){
$('input').appendTo("#list")
})

/*----------using enter key--------*/
function addItem(){
$('#addItems').keydown(function(enter){
    if(enter.keyCode == 13) {
postItem();
}             
  });
}
    addItem();

/*-----post items method----------*/
     function postItem(){
var item = $("#addItems").val();
    var placeItem = $('<li>' + dust + item + notification + '</li>');
    $('.lists').prepend(placeItem);
    $('#addItems').val('');
    $('.lists').css("color" , "gray");
         $('.lists').css("font-size", "20px");
         $('.lists').css("text-align", "center");
}             
    
$(document).on('click', '.dust', function(){
$(this).closest('li').fadeOut(350);
});  
    
    $(document).on('click', '.notification', function(){
        $(this).toggleClass('checkmark');
    $(this).closest('li').toggleClass('cross');
    });

    
    $(document).on('click', 'li', function() {
    if ($('span').first().next().hasClass('notification')){
      $(this).animate({'position': 'relative', 'bottom': '8px'}, 200);
    }
    });

  $(document).on('click', 'li', function() {
    if ($('span').first().next().hasClass('notification')){
      $(this).animate({'position': 'relative', 'bottom': '0px'}, 200);
    }
    });
    
});
