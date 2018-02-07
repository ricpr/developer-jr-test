function Ticker() {
	var self = this;

	this.data = {
		speed: 2000
	}

	this.node = arguments[0] && typeof arguments[0] == 'object' ? arguments[0] : null;

	this.timer = null;

	if (arguments[1]) {
		for (var i in arguments[1]) {
			this.data[i] = arguments[1][i];
		}
	}

	if (this.node) {
		$('div > a', this.node).click(function(event) {
			event.preventDefault();

			var link = $('li a', self.node).first().attr('href');

			if (link) {
				document.location.href = link;
			}
		});

		this.timer = setInterval(function() {
			$('li', self.node).first().animate({marginTop: -46}, 500, function() {
				$(this).parent().append($(this));
				$(this).css('marginTop', '0px');
			});
		}, this.data.speed);
	}
}