$(document).ready(function() {

	/*show nav menu*/
	$('.nav-trigger').click(function() {
		$('.side-nav').toggleClass('visible');
		$('.navTrigger').toggleClass('active');
	});

	$('.side-nav.visible a').on('click', function() {
		$('.side-nav.visible').removeClass('visible');
	});

	/*show options*/
	$('.ops-trigger').click(function() {
		$('.header-content').toggleClass('visible');
		$('.ops-trigger__icon').toggleClass('active');
	});

	/*select picker*/
	$('.select-balance').selectpicker({
		style: 'btn-transparent-white'
	});

	/*select picker*/
	$('.selectpicker').selectpicker({
		size: 4
	});

	/*advanced-select dropdown menu*/
	$('.advanced-select .dropdown-menu a').on('click', function(){    
		$('.advanced-select .dropdown-toggle').html($(this).html() + '<span class="caret"></span>');    
	});
	
	/*select-lang dropdown menu*/
	$('.select-lang .dropdown-menu a').on('click', function(){    
		$('.select-lang .dropdown-toggle').html($(this).html() + '<span class="caret"></span>');    
	});

	/*select-account dropdown menu*/
	$('.select-account .dropdown-menu a').on('click', function(){    
		$('.select-account .dropdown-toggle').html($(this).html() + '<span class="caret"></span>');    
	});
	
	/*account-checker dropdown menu*/
	$('.account-checker .dropdown-menu a').on('click', function(){    
		$('.account-checker .dropdown-toggle').html( $(this).children('span').html() + '<span class="caret"></span>' +  '<div class="dropdown-checker__key truncate">' +  $(this).children('div').html() + '</div>' );
	});
	
	/*account-checker--white dropdown menu*/
	$('.account-checker--white .dropdown-menu a').on('click', function(){    
		$('.account-checker--white .dropdown-toggle').html( $(this).children('span').html() + '<span class="caret"></span>' +  '<div class="dropdown-checker__key truncate">' +  $(this).children('div').html() + '</div>' );
	});

	/*wallet-checker dropdown menu*/
	$('.wallet-checker .dropdown-menu a').on('click', function(){    
		$('.wallet-checker .dropdown-toggle').html( $(this).html() + '<span class="wallet__value-new">' + $(this).children('.wallet__value').html() + '</span>' + '<span class="caret"></span>' )
	});

	/*add class active*/
	$('.transaction-filter__btns a').on('click', function() {
		$('.transaction-filter__btns a').removeClass('active');
		$(this).addClass('active');
	});

	/*if height less then height menu*/
	$(window).resize(function() {
		if ($(window).height() < 600) {
			$('.side-nav').css('overflow-y', 'scroll');
		}
		else {
			$('.side-nav').css('overflow-y', 'hidden');
		}
	});

	/*fee slider*/
	var slider = new Slider('#ex1', {
		formatter: function(value) {
			return 'Current value: ' + value;
		}
	});

	/*input length*/
	var inputHidden = document.querySelectorAll('.account-hidden-input');
	for( i=0; i < inputHidden.length; i++ ){
		inputHidden[i].setAttribute('size',inputHidden[i].getAttribute('value').length);
	}

	/*input value edit*/
	$('#activateEditEmail').on('click', function() {
		$('#editEmailValue').prop("disabled", false).focus().addClass('active');
		$(this).addClass('hidden');
		$('#enterNewEmail').removeClass('hidden');
	});
	$('#activateEditPhone').on('click', function() {
		$('#editPhoneValue').prop("disabled", false).focus().addClass('active');
		$(this).addClass('hidden');
		$('#enterNewPhone').removeClass('hidden');
	});

	/*change view for input-eye*/
	$('.input-eye-btn').on('click', function() {
		$(this).children().toggleClass('active');
		var inputTypeValue = $(this).prev('.form-control').attr('type');

		if ( inputTypeValue == 'password') {
			$(this).prev('.form-control').attr('type', 'text')
		} else {
			$(this).prev('.form-control').attr('type', 'password')
		}

	});

	/*activate ladda button*/
	Ladda.bind( '.ladda-button' );


});