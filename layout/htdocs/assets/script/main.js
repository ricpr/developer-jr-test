/**
 *
 * File		main.js
 * Date		2017-29-04
 * Author	Fábio Marciano
 *
**/

$(document).ready(function() {

	/* MENU TOGGLE */

	if ($('#btn-header-weather').length > 0) {
		$('#btn-header-weather').click(function() {
			if ($('#header-weather').hasClass('active')) {
				$('#header-weather').removeClass('active')
			} else {
				$('#header-weather').addClass('active');
			}
		});
	}

	if ($('#btn-login-form').length) {

		$('#btn-login-form').click(function() {
			event.preventDefault();

			var hasUser = $(this).data('login') || false;

			if (hasUser) {
				if ($('#sec-user').hasClass('active')) {
					$('#sec-user').removeClass('active');
				} else {
					$('#sec-user').addClass('active');
				}
			} else {
				var modal = new Modal({
					url: '/assets/template/form-login.html'
				}, function() {

					// LOGIN SECTION CLOSE
					$('#sec-login .modal-btn-close').click(function() {
						modal.close();
					});

					$('#frm-login').submit(function(event) {
						event.preventDefault();

						var validate = new Validate();

						validate.email(document.getElementById('frm-user-email').value, 'Campo e-mail vazio ou inválido');

						validate.noEmpty(document.getElementById('frm-user-password').value, 'Campo senha obrigatório');

						if (!validate.data.status) {
							var modal = new Modal({
								url: '/assets/template/error.html'
							}, function() {
								$('#error-message-article').append(validate.print());
								$('#btn-error-close, #error-message .btn-close').click(function() {
									modal.close();
								});
							});
						}

						return validate.data.status;
					});

					// FORGET PASSWORD
					if ($('#frm-user-forget-password').length > 0) {
						$('#frm-user-forget-password').click(function(event) {
							event.preventDefault();

							var modal = new Modal({
								url: '/assets/template/form-login-forget-password.html'
							}, function() {
								$('#sec-forget-password .btn-close').click(function() {
									modal.close();
								});

								if ($('#frm-forget-password').length > 0) {
									$('#frm-forget-password').submit(function(event) {
										event.preventDefault();

										var validate = new Validate();

										validate.email(document.getElementById('txt-forget-password-user-email').value, 'Campo e-mail vazio ou inválido');

										if (!validate.data.status) {
											var modal = new Modal({
												url: '/assets/template/error.html'
											}, function() {
												$('#error-message-article').append(validate.print());
												$('#btn-error-close, #error-message .btn-close').click(function() {
													modal.close();
												});
											});
										}

										return validate.data.status;
									});
								}
							});
						});
					}

					// REGISTER
					if ($('#btn-register-form').length > 0) {
						$('#btn-register-form').click(function(event) {
							event.preventDefault();

							var modal = new Modal({
								url: '/assets/template/form-register.html'
							}, function() {
								$('#sec-register .modal-btn-close').click(function() {
									modal.close();
								});

								if ($('#btn-use-terms').length > 0) {
									$('#btn-use-terms').click(function(event) {
										event.preventDefault();

										var modal = new Modal({
											url: '/assets/template/use-terms.html'
										}, function() {
											$('#btn-use-terms-cancel').click(function() {
												$('#frm-register-user-terms').prop('checked', false);
												modal.close();
											});

											$('#btn-use-terms-submit').click(function() {
												$('#frm-register-user-terms').prop('checked', true);
												modal.close();
											});

											$('#sec-use-terms .btn-close').click(function() {
												modal.close();
											});
										});
									});
								}

								$('#frm-register').submit(function(event) {
									event.preventDefault();

									var validate = new Validate();

									validate.noEmpty(document.getElementById('frm-register-name').value, 'Campo nome é obrigatório');

									validate.email(document.getElementById('frm-register-email').value, 'Campo e-mail vazio ou inválido');

									validate.noEmpty(document.getElementById('frm-register-password').value, 'Campo senha obrigatório');

									validate.noEmpty(document.getElementById('frm-register-confirm-password').value, 'Campo confirme a senha é obrigatório');

									validate.compare([
													document.getElementById('frm-register-password').value,
													document.getElementById('frm-register-confirm-password').value
												], 'Campo senha e confirme a senha são diferentes');

									validate.CPF(document.getElementById('frm-register-cpf').value, 'Campo CPF vazio ou inválido');

									validate.checked(document.getElementById('frm-register-user-terms'), 'É necessário aceitar os termos de uso');

									if (!validate.data.status) {
										var modal = new Modal({
											url: '/assets/template/error.html'
										}, function() {
											$('#error-message-article').append(validate.print());
											$('#btn-error-close, #error-message .btn-close').click(function() {
												modal.close();
											});
										});
									}

									return validate.data.status;
								});
							});
						});
					}
				});
			}
		});
	}

	if ($('#frm-search').length > 0) {
		$('#frm-search').submit(function(event) {
			event.preventDefault();

			var validate = new Validate();

			validate.noEmpty(document.getElementById('txt-search-input').value, 'Campo busca obrigatório');

			if (!validate.data.status) {
				var modal = new Modal({
					url: '/assets/template/error.html'
				}, function() {
					$('#error-message-article').append(validate.print());
					$('#btn-error-close, #error-message .btn-close').click(function() {
						modal.close();
					});
				});
			}

			return validate.data.status;
		});
	}

	if ($('#frm-search-presenters').length > 0) {
		$('#frm-search-presenters').submit(function(event) {
			event.preventDefault();

			var validate = new Validate();

			validate.noEmpty(document.getElementById('txt-search-presenters-input').value, 'Campo busca obrigatório');

			if (!validate.data.status) {
				var modal = new Modal({
					url: '/assets/template/error.html'
				}, function() {
					$('#error-message-article').append(validate.print());
					$('#btn-error-close, #error-message .btn-close').click(function() {
						modal.close();
					});
				});
			}

			return validate.data.status;
		});
	}


	if ($('#frm-newsletter').length > 0) {
		$('#frm-newsletter').submit(function(event) {
			event.preventDefault();

			var validate = new Validate();

			validate.email(document.getElementById('txt-newsletter-email').value, 'Campo e-mail vazio ou inválido');

			if (!validate.data.status) {
				var modal = new Modal({
					url: '/assets/template/error.html'
				}, function() {
					$('#error-message-article').append(validate.print());
					$('#btn-error-close, #error-message .btn-close').click(function() {
						modal.close();
					});
				});
			}

			return validate.data.status;
		});
	}

	if ($('#frm-promo').length > 0) {
		$('#frm-promo').submit(function(event) {
			event.preventDefault();

			var validate = new Validate();

			validate.noEmpty(document.getElementById('frm-promo-name').value, 'Campo nome é obrigatório');

			validate.email(document.getElementById('frm-promo-email').value, 'Campo e-mail vazio ou inválido');

			validate.noEmpty(document.getElementById('frm-promo-telephone').value, 'Campo telefone é obrigatório');

			validate.noEmpty(document.getElementById('frm-promo-city').value, 'Campo cidade é obrigatório');

			validate.CPF(document.getElementById('frm-promo-cpf').value, 'Campo CPF vazio ou inválido');

			validate.noEmpty(document.getElementById('frm-promo-coupom').value, 'Campo cupom é obrigatório');

			validate.noEmpty(document.getElementById('frm-promo-message').value, 'Campo mensagem é obrigatório');

			validate.checked(document.getElementById('frm-promo-user-terms'), 'É necessário aceitar os termos de uso');

			if (!validate.data.status) {
				var modal = new Modal({
					url: '/assets/template/error.html'
				}, function() {
					$('#error-message-article').append(validate.print());
					$('#btn-error-close, #error-message .btn-close').click(function() {
						modal.close();
					});
				});
			}

			return validate.data.status;
		});
	}

	if ($('#widget-top-5').length > 0) {
		$('#widget-top-5 header li').each(function() {
			$(this).click(function() {
				var index = $(this).index();
				$('#widget-top-5 > div > ul > li').removeClass('active').eq(index).addClass('active');
				$('#widget-top-5 header li').removeClass('active').eq(index).addClass('active');
			});
		});
	}

	if ($('#widget-columnist').length > 0) {

		var len = $('#widget-columnist-nav li').length;

		$('#widget-columnist-nav li').removeClass('active').first().addClass('active');
		$('#widget-columnist-list li').first().addClass('active');

		$('#widget-columnist-nav-prev').click(function(event) {
			event.preventDefault();

			var curr = $('#widget-columnist-nav li.active').index();
			var prev = (curr == 0 ? len : curr) - 1;

			$('#widget-columnist-nav li').removeClass('active').eq(prev).addClass('active');
			$('#widget-columnist-list li').removeClass('active');
			$('#widget-columnist-list li').eq(prev).addClass('active');
		});

		$('#widget-columnist-nav-next').click(function(event) {
			event.preventDefault();

			var curr = $('#widget-columnist-nav li.active').index();
			var next = (curr < (len - 1) ? parseInt(curr + 1) : 0);

			$('#widget-columnist-nav li').removeClass('active').eq(next).addClass('active');
			$('#widget-columnist-list li').removeClass('active');
			$('#widget-columnist-list li').eq(next).addClass('active');
		});
	}

	if ($('#widget-blogs-and-partners').length > 0) {

		var len = $('#widget-blogs-and-partners-nav li').length;

		$('#widget-blogs-and-partners-nav li').removeClass('active').first().addClass('active');
		$('#widget-blogs-and-partners-list li').first().addClass('active');

		$('#widget-blogs-and-partners-nav-prev').click(function(event) {
			event.preventDefault();

			var curr = $('#widget-blogs-and-partners-nav li.active').index();
			var prev = (curr == 0 ? len : curr) - 1;

			$('#widget-blogs-and-partners-nav li').removeClass('active').eq(prev).addClass('active');
			$('#widget-blogs-and-partners-list li').removeClass('active');
			$('#widget-blogs-and-partners-list li').eq(prev).addClass('active');
		});

		$('#widget-blogs-and-partners-nav-next').click(function(event) {
			event.preventDefault();

			var curr = $('#widget-blogs-and-partners-nav li.active').index();
			var next = (curr < (len - 1) ? parseInt(curr + 1) : 0);

			$('#widget-blogs-and-partners-nav li').removeClass('active').eq(next).addClass('active');
			$('#widget-blogs-and-partners-list li').removeClass('active');
			$('#widget-blogs-and-partners-list li').eq(next).addClass('active');
		});
	}


	if ($('.content-gallery').length > 0) {
		$('.content-gallery').each(function() {
			$(this).find('.content-gallery-controller-next').click(function(event) {
				event.preventDefault();
				var item = $(this).parent().find('li').first();
				var offset = item.outerWidth();
				item.animate({marginLeft: offset * -1}, 500, function() {
					$(this).parent().append($(this));
					$(this).css('marginLeft', 0);
				});
			});

			$(this).find('.content-gallery-controller-prev').click(function(event) {
				event.preventDefault();
				var item = $(this).parent().find('li').last();
				var offset = item.outerWidth();
				item.parent().prepend(item.css('marginLeft', -offset));

				item.animate({marginLeft: 0}, 500);
			});
		});
	}

	if ($('.rate').length > 0) {
		$('.rate li').each(function() {
			$(this).click(function() {
				var rate = parseInt($(this).index() + 1);

				$(this).parent().find('li').removeClass('active');

				for (var i = 0; i < rate; i++) {
					$(this).parent().find('li').eq(i).addClass('active');
				}

			});
		});
	}

	if ($('#content').length > 0 && $('#btn-continue-reading').length > 0) {
		$('#btn-continue-reading').click(function(event) {
			event.preventDefault();
			if (!$('#content').hasClass('active')) {
				$('#content').addClass('active');
				$(this).parent().hide();
			}
		});
	}

	if ($('.poll').length > 0) {
		$('.poll').each(function() {
			$(this).find('.result-area').find('a').click(function(event) {
				event.preventDefault();
				$(this).parent().parent().removeClass('active');
			});

			$(this).find('.btn-result').click(function() {
				if ($(this).parent().hasClass('active')) {
					$(this).parent().removeClass('active');
				} else {
					$(this).parent().addClass('active');
				}
			});
		});
	}

	if ($('.video-list').length > 0) {
		$('.video-list nav li').each(function() {
			$('a', this).click(function(event) {
				event.preventDefault();
			});

			$(this).click(function() {
				$(this).parent().find('li').removeClass('active');
				$(this).addClass('active');
			});
		});
	}

	if ($('.video-list').length > 0) {
		$('.video-list aside .card').each(function() {
			$('a', this).click(function(event) {
				event.preventDefault();
			});

			$(this).click(function() {
				$(this).parent().find('.card').removeClass('active').find('h4').remove();
				$(this).addClass('active');
				$('<h4>Assistindo</h4>').insertBefore($(this).find('h2'));
			});
		});
	}

});
