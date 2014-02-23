(function( $ ) {

	$.fn.countDown = function(options) {

		var $this = $(this);

		var opts = $.extend({}, $.fn.countDown.defaults, options);

		//Method calling logic
		var today = new Date();
		var todayInMs = today.getTime();
		var targetTime = opts.date.getTime();
		var diff = targetTime - todayInMs;
		var newDate;

		function incrementBySecond(second)
		{	
			diff = diff - 1000;
			return new Date(diff);
		}
		var t = setInterval(function() {
			newDate = incrementBySecond(diff);
			$this.each (function(){
				$('.cdTimeBoard .cdDay').each(function() {
					$(this).html(newDate.getDate());
				});
				$('.cdTimeBoard .cdHour').each(function() {
					$(this).html(newDate.getHours());
				});
				$('.cdTimeBoard .cdMinute').each(function() {
					$(this).html(newDate.getMinutes());
				});
				$('.cdTimeBoard .cdSecond').each(function() {
					$(this).html(newDate.getSeconds());
				});
			});
		}, 1000);
	};

	//private function


	$.fn.countDown.defaults = {
		date: new Date(2014, 5, 1, 0, 0, 0),
		gmt : "+1"
	}

})( jQuery );

