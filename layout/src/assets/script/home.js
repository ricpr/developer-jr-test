$(document).ready(function() {
	if ($('#widget-ticker').length > 0) {
		new Ticker(document.getElementById('widget-ticker'));
	}
});