(function($)
{

function calendar_pop()
{
$('.webform-component--check-in input, .webform-component--check-out input').attr('readonly','readonly');
	
	$('.webform-component--check-in input, .webform-component--check-out input').attr('autocomplete', 'off');
 
  
  $( ".webform-component--check-in input" ).datepicker({
			defaultDate: "today",
			dateFormat : "dd-mm-yy",
			minDate:'today',
			maxDate:'+8m',
			changeMonth: true,
			numberOfMonths: 1,
			onSelect: function() {
				var date = $(this).datepicker('getDate');
				if (date){
					date.setDate(date.getDate() + 1);
					$( ".webform-component--check-out input" ).datepicker( "option", "minDate", date );
					
				}
				$(".webform-component--check-out input").datepicker("setDate", date);
			}
		});
		$( ".webform-component--check-out input" ).datepicker({
			
			defaultDate: "+1day",
			dateFormat : "dd-mm-yy",
			minDate:'+1day',
			maxDate:'+8m',
			changeMonth: true,
			numberOfMonths: 1,
			onSelect: function() {
				var date = $(this).datepicker('getDate');
				if (date) {
					date.setDate(date.getDate() - 1);
					$( ".webform-component--check-in input" ).datepicker( "option", "maxDate", date );
				}
			}
		});
	
}

$(window).load(function() {
 
setTimeout(function(){
$('.loader>img').addClass('hides');
},  300);
setTimeout(function(){
$('.lds-roller').addClass('hides');
},  350);
setTimeout(function(){
$('.loader').addClass('hides');
},  400);



});
$(window).scroll(function(){
        $scroll_heigth = $(window).scrollTop();
		$('.home-img').css('transform','translateY('+$scroll_heigth/2+'px)');
			 
		 });
$(document).ready(function()
{

	calendar_pop();

	

});


})(jQuery);