(function( $ ) {

	var methods = {
	
		init: function(){
		
			var now = new Date();
			var toTime = new Date(toYear,
								  toMonth,
								  toDay,
								  toHour,
								  toMinute,
								  toSecond,
								  0);
			
			dSec = now.getTime();
			methods.countdown(dSec);
			
		},
		
		countdown: function(dSec){

			console.log(dSec);
			if (dSec > 0)
			{
				var dDate = new Date(dSec);
				$('#days').html(dDate.getDay());
				$('#hours').html(dDate.getHours());
				$('#minutes').html(dDate.getMinutes());
				$('#seconds').html(dDate.getSeconds());
				setTimeout(function() {methods.countdown(dSec-1)}, 1000);
				return this; 			  
			}
			
		}
	};


	$.fn.countDown = function(method) {
		//Method calling logic
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof method === 'object' || !method){
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method' + method + ' does not exist on jQuery.countdown');
		}
	};
	
})( jQuery );

