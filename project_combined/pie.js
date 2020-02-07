// change the value below from 100 to whichever percentage you want
// change value data from user_database
circle($('#attendanceCircle'), 100);

function circle($el, end, i) {
	if (end < 0)
		end = 0;
	else if (end > 100)
		end = 100;
	if (typeof i === 'undefined')
		i = 0;
	var curr = (100 * i) / 360;
	$el.find(".circleStat").html(Math.round(curr) + "%");
	if (i <= 180) {
		$el.css('background-image', 'linear-gradient(' + (90 + i) + 'deg, transparent 50%, rgb(252, 190, 66) 50%),linear-gradient(90deg, rgb(252, 190, 66) 50%, transparent 50%)');
	} else {
		$el.css('background-image', 'linear-gradient(' + (i - 90) + 'deg, transparent 50%, rgb(0, 136, 152) 50%),linear-gradient(90deg, rgb(252, 190, 66) 50%, transparent 50%)');
	}
	if (curr < end) {
		setTimeout(function () {
			circle($el, end, ++i);
		}, 1);
	}
}