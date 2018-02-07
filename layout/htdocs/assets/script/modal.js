function Modal() {
	this.data = {
		url: null,
		openSpeed: 300,
		closeSpeed: 300
	}

	this.content = null;

	this.node = null;

	this.callback = arguments[1] && typeof arguments[1] == 'function' ? arguments[1] : null;

	if (arguments[0] && typeof arguments[0] == 'object') {
		for (var i in arguments[0]) {
			this.data[i] = arguments[0][i];
		}
	}

	this.newID = function() {
		var ID = null;
		var date = new Date();
		var index = 0;

		do {
			ID = 'modal-' + date.getFullYear() + date.getMonth() + date.getDay() + date.getHours() + date.getMinutes() + date.getSeconds() + '-' + index;
			index++;
		} while (document.getElementById(ID));

		return ID;
	};

	this.data.ID = this.newID();

	this.node = document.createElement('div');
	this.node.setAttribute('id', this.data.ID);
	this.node.setAttribute('data-type', 'modal');
	this.load();

}

Modal.prototype.load = function() {
	var self = this;

	if (self.data.url) {
		$.ajax({
			url: self.data.url,
			success: function(response) {
				self.node.innerHTML = '<div>' + response + '</div>';
			},
			complete: function() {
				self.open();
			}
		});
	}
}

Modal.prototype.close = function() {
	var self = this;
	var node = $(self.node) || null;

	if (node) {
		node.fadeOut(self.data.closeSpeed, function() {
			$(this).remove();
		});
	}
}

Modal.prototype.open = function() {
	var self = this;
	var node = $(self.node) || null;

	if (node) {
		$('body').append(node);
		node.fadeIn(self.data.openSpeed, function() {
			if (self.callback) {
				self.callback();
			}
		});
	}
}