# CountItDown: jQuery countdown plugin by Endiyan Rakhmanda (2014)
<br>

## Options:

* ### targetDate :
Accepts a javascript Date object. The target time of your countdown.

* ### topLevelTimeUnit :
Accepts one of the following string values:
    * day
    * hour
    * minute
    * second

defines the biggest time unit for the countdown

* ### onFinish:
A callback function, which will be called if the countdown ends



<br>
## Usage example :
```
<div id="timeBoard" class="cdTimeBoard">
    <h1>Counting down :</h1>
	<h2><span class="cdDay">0</span> Days</h2>
	<h2><span class="cdHour">0</span> Hours</h2>
	<h2><span class="cdMinute">0</span> Minutes</h2>
	<h2><span class="cdSecond">0</span> Seconds</h2>
</div>
<script>
function onFinish()
{
	alert("Yeay");
}
$('.cdTimeBoard').countItDown({
	date : new Date(2014, 1, 23, 9, 45, 0),	
	topLevelTimeUnit : 'day',
	onFinish : onFinish
});	
```