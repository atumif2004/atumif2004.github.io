
$(document).ready(function() {
	$('.personal').click(function(){
		$("#personal_modal").modal('show');
		return false;
	});
	
	$('.order-modal-open').click(function(){
		$("#myModal").modal('show');
		return false;
	});
	
	$('#politic_open a').click(function(){
		$("#confidencial_modal").modal('show');
		return false;
	});
	
	$('#modal_form').validate({
		rules: {
			name: {
				minlength: 2,
				required: true,
			},
			phone: {
				required: true,
				minlength: 3,
			},
			email: {
				email: true,
				required: true,
			},
		 },
		messages:{
			name: {
				required: "Введите Имя",
				minlength: "Минимум 2 символа",
			},
			phone: {
				required: "Введите Ваш телефон",
				minlength: "Минимум 3 символа",
			},
			email: {
				email: "Неверный формат email",
				required: "Введите E-mail",
				minlength: "Минимум 15 символов",
			},
			 
		},
	
		errorClass: "help-error",
		errorElement: "span",
		highlight:function(element, errorClass, validClass)
		{
			$(element).parent().removeClass('has-success').addClass('has-error');
		},
		unhighlight: function(element, errorClass, validClass)
		{
			$(element).parent().removeClass('has-error');
			$(element).parent().addClass('has-success');
		},
	});
	
	$('#order-form1').validate({
		rules: {
			name: {
				minlength: 2,
				required: true,
			},
			phone: {
				required: true,
				minlength: 3,
			},
			email: {
				email: true,
				required: true,
			},
		 },
		messages:{
			name: {
				required: "Введите Имя",
				minlength: "Минимум 2 символа",
			},
			phone: {
				required: "Введите Ваш телефон",
				minlength: "Минимум 3 символа",
			},
			email: {
				email: "Неверный формат email",
				required: "Введите E-mail",
				minlength: "Минимум 15 символов",
			},
			 
		},
	
		errorClass: "help-error",
		errorElement: "span",
		highlight:function(element, errorClass, validClass)
		{
			$(element).parent().removeClass('has-success').addClass('has-error');
		},
		unhighlight: function(element, errorClass, validClass)
		{
			$(element).parent().removeClass('has-error');
			$(element).parent().addClass('has-success');
		},
	});
	$('#order-form2').validate({
		rules: {
			name: {
				minlength: 2,
				required: true,
			},
			phone: {
				required: true,
				minlength: 3,
			},
			email: {
				email: true,
				required: true,
			},
		 },
		messages:{
			name: {
				required: "Введите Имя",
				minlength: "Минимум 2 символа",
			},
			phone: {
				required: "Введите Ваш телефон",
				minlength: "Минимум 3 символа",
			},
			email: {
				email: "Неверный формат email",
				required: "Введите E-mail",
				minlength: "Минимум 15 символов",
			},
			 
		},
	
		errorClass: "help-error",
		errorElement: "span",
		highlight:function(element, errorClass, validClass)
		{
			$(element).parent().removeClass('has-success').addClass('has-error');
		},
		unhighlight: function(element, errorClass, validClass)
		{
			$(element).parent().removeClass('has-error');
			$(element).parent().addClass('has-success');
		},
	});
	
	$('#order-form3').validate({
		rules: {
			name: {
				minlength: 2,
				required: true,
			},
			phone: {
				required: true,
				minlength: 3,
			},
			email: {
				email: true,
				required: true,
			},
		 },
		messages:{
			name: {
				required: "Введите Имя",
				minlength: "Минимум 2 символа",
			},
			phone: {
				required: "Введите Ваш телефон",
				minlength: "Минимум 3 символа",
			},
			email: {
				email: "Неверный формат email",
				required: "Введите E-mail",
				minlength: "Минимум 15 символов",
			},
			 
		},
	
		errorClass: "help-error",
		errorElement: "span",
		highlight:function(element, errorClass, validClass)
		{
			$(element).parent().removeClass('has-success').addClass('has-error');
		},
		unhighlight: function(element, errorClass, validClass)
		{
			$(element).parent().removeClass('has-error');
			$(element).parent().addClass('has-success');
		},
	});
	
	
});



