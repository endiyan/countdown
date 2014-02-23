(function( $ ) {

	$.fn.countDown = function(options) {

		var $this = $(this);

		var opts = $.extend({}, $.fn.countDown.defaults, options);


		//Method calling logic
		var today = new Date();
		var todayInMs = today.getTime();
		var targetTime = opts.date.getTime();
		var diff = targetTime - todayInMs;
		

		var t = setInterval(function() {
			
			diff = incrementBySecond(diff);
			var restMs = diff;
			var topUnitAndRestms;
			var topLevelUnitsInitialized = false;

			$this.each (function(){
				if (opts.topLevelTimeUnit === 'day')
				{
					$('.cdTimeBoard .cdDay').each(function() {
						topUnitAndRestms = getNumberOfDays(diff);
						$(this).html(topUnitAndRestms.topUnit);
						restMs = topUnitAndRestms.restMs;
					});	
					topLevelUnitsInitialized = true;
				}
				if (opts.topLevelTimeUnit === 'hour' || topLevelUnitsInitialized)
				{
					$('.cdTimeBoard .cdHour').each(function() {
						topUnitAndRestms = getNumberOfHours(restMs);
						$(this).html(topUnitAndRestms.topUnit);
						restMs = topUnitAndRestms.restMs;
					});
					topLevelUnitsInitialized = true;
				}

				if (opts.topLevelTimeUnit === 'minute' || topLevelUnitsInitialized)
				{
					$('.cdTimeBoard .cdMinute').each(function() {
						topUnitAndRestms = getNumberOfMinutes(restMs);
						$(this).html(topUnitAndRestms.topUnit);
						restMs = topUnitAndRestms.restMs;
					});
					topLevelUnitsInitialized = true;
				}
				
				if (opts.topLevelTimeUnit === 'second' || topLevelUnitsInitialized)
				{
					$('.cdTimeBoard .cdSecond').each(function() {
						$(this).html(parseInt(restMs / 1000));
					});
				}
			});
		}, 1000);
	};

	//private function
	function incrementBySecond(ms)
	{	
		return ms - 1000;
	}

	function getNumberOfDays(ms)
	{
		var dayAndRestMs = new Object();
		dayAndRestMs.topUnit = parseInt(ms / (1000 * 60 * 60 * 24));
		dayAndRestMs.restMs = ms % (1000 * 60 * 60 * 24);
		return dayAndRestMs;
	}
	
	function getNumberOfHours(ms)
	{
		var hoursAndRestMs = new Object();
		hoursAndRestMs.topUnit = parseInt(ms / (1000 * 60 * 60));
		hoursAndRestMs.restMs = ms %  (1000 * 60 * 60);
		return hoursAndRestMs;
	}

	function getNumberOfMinutes(ms)
	{
		var minutesAndRestMs = new Object();
		minutesAndRestMs.topUnit = parseInt(ms / (1000 * 60));
		minutesAndRestMs.restMs = ms %  (1000 * 60);
		return minutesAndRestMs;
	}

	$.fn.countDown.defaults = {
		date 				: new Date(2014, 5, 1, 0, 0, 0),
		topLevelTimeUnit	: 'day'
	}

})( jQuery );

