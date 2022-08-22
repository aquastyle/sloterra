window.onload = function () {
	var $button = $('.wheel_btn'),
		$spinner = $('.wheel_spinner--main'),
		$spinnerTwo = $('.wheel_spinner--center'),
		$popupOverlay = $('.popup_overlay'),
		$popupWindow = $('.popup_window');
		transformProp = -45;

	$button.click(function () {
		if ($button.hasClass('spin')) {
			spin();
		}
	});

	function spin() {
		$button.removeClass('spin').addClass('disabled');
		$spinner
			.addClass('wheel_spinner_animated_1')
			.removeClass('wheel_spinner_animated')
			.animate({
				transform: `rotate(-45deg)`,
			}, 500);
		
		$spinnerTwo
			.addClass('wheel_spinner_animated_2')
			.removeClass('wheel_spinner_animated--small');
		setTimeout(function () {
			// localStorage.currentSpin = 'HTMLC_1237_spin';
			$popupOverlay.fadeIn();
			$popupWindow.fadeIn();
		}, 4500);
	}
};
