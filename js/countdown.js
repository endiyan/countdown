(function( $ ) {

	$.fn.countDown = function(options) {

		var $this = $(this);

		var opts = $.extend({}, $.fn.countDown.defaults, options);

		//Method calling logic
		var today = new Date();
		var todayInMs = today.getTime();
		var targetTime = opts.date;
		var diff = targetTime - todayInMs;
		var diffInSec = diff/1000;
		var diffInDays = diffInSec/60/60/24;

		var t = setInterval(function() {
			diffInSec = incrementBySecond(diffInSec);
			$this.each (function(){
				$(this).html(diffInSec);
			});
		}, 1000);


		
	};
	
	//public function
	$.fn.anotherMethod = function()
	{
		console.log('doAnotherMethod');
	}

	//private function
	function incrementBySecond(second)
	{	
		return second - 1;
	}

	$.fn.countDown.defaults = {
		date: new Date(2014, 5, 1, 0, 0, 0),
		gmt : "+1"
	}

})( jQuery );

