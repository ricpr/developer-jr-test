function Validate() {
	this.data = {
		status: true,
		log: []
	}
}

Validate.prototype.print = function() {
	var self = this;
	var list = null;
	var item = null;

	if (self.data.log.length > 0) {
		list = document.createElement('ol');
		for (var i in self.data.log) {
			item = document.createElement('li');
			item.innerHTML = self.data.log[i];
			list.appendChild(item);
		}
	}

	return list;
}

Validate.prototype.addLog = function() {
	var self = this;
	var args = arguments[0] || null;

	if (args) {
		self.data.log.push(args);
	}

	return self;
}

Validate.prototype.update = function() {
	var self = this;
	var args = arguments[0] ? true : false;

	self.data.status &= args;

	return self.data.status;
}

Validate.prototype.noEmpty = function() {
	var self = this;
	var args = arguments[0] || null;
	var mlog = arguments[1] || 'Campo obrigatório';
	var status = args && args != '';

	self.update(status);

	if (!status) {
		this.addLog(mlog);
	}

	return status;
}

Validate.prototype.email = function() {
	var self = this;
	var args = arguments[0] || null;
	var mlog = arguments[1] || 'Campo obrigatório';
	var rexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var status = args && rexp.test(args);

	self.update(status);

	if (!status) {
		this.addLog(mlog);
	}

	return status;
}

Validate.prototype.compare = function() {
	var self = this;
	var args = arguments[0] || null;
	var mlog = arguments[1] || 'Campos são diferentes';
	var status = args && args.length > 1;

	if (status) {
		for (var i in args) {
			if (i > 0) {
				status &= args[i] == args[i - 1];
			}

			if (!status) break;
		}
	}

	self.update(status);

	if (!status) {
		this.addLog(mlog);
	}

	return status;
}

Validate.prototype.checked = function() {
	var self = this;
	var args = arguments[0] || null;
	var mlog = arguments[1] || 'Campos são diferentes';
	var status = args && typeof args == 'object' && args.checked;

	self.update(status);

	if (!status) {
		this.addLog(mlog);
	}

	return status;
}

Validate.prototype.CPF = function() {
	var self = this;
	var args = arguments[0] || null;
	var mlog = arguments[1] || 'Campo CPF vazio ou inválido';

	var sum = 0;
	var res;

	var status = args && args != '00000000000' && args.length == 11;

	if (status) {

		for (i = 1; i <= 9; i++) {
			sum = sum + parseInt(args.substring(i - 1, i)) * (11 - i);
		}

		res = (sum * 10) % 11;

		if ((res == 10) || (res == 11)) {
			res = 0
		};

		if (res != parseInt(args.substring(9, 10))) {
			status &= false;
		}

		if (status) {
			sum = 0;

			for (i = 1; i <= 10; i++) {
				sum = sum + parseInt(args.substring(i-1, i))*(12-i);
			}

			res = (sum * 10) % 11;

			if ((res == 10) || (res == 11)) {
				res = 0;
			}

			if (res != parseInt(args.substring(10, 11))) {
				status &= false;
			}
		}
	}

	self.update(status);

	if (!status) {
		this.addLog(mlog);
	}

	return status;
}