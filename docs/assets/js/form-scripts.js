$("#contactForm").validator().on("submit", function (event) {
	
	var myNode = "#contactForm";

	if (event.isDefaultPrevented()) {
		// handle the invalid form...
		formError(myNode);
		submitMSG(false, "Completa los campos obligatorios");
	} else {
		// everything looks good!
		event.preventDefault();
		submitForm();
	}
});


function submitForm(){
	// Initiate Variables With Form Content
	var name = $("#name").val();
	var email = $("#email").val();
	var asunto = $("#asunto").val();    
	var message = $("#message").val();

	$.ajax({
		type: "POST",
		url: "assets/clases/form-process.php",
		data: "name=" + name + "&email=" + email + "&asunto=" + asunto + "&message=" + message,
		
		success : function(text){

			var myNode = "#contactForm";

			if (text == "success"){
				formSuccess(myNode);
			} else {
				formError(myNode);
				submitMSG(false,text);
			}
		}
	});
}

function submitFormTrabajo(){
	// Initiate Variables With Form Content
	var name = $("#name").val();
	var email = $("#email").val();
	var perfil = $("#perfil").val();
	var cv = new FormData(); 
	var message = $("#message").val();

	for (var i = 0; i < ($('#trabajoForm').find('input[type="file"]').length); i++) {
		cv.append(($('#trabajoForm').find('input[type="file"]:eq('+i+')').attr('name')),(($('#trabajoForm').find('input[type="file"]:eq('+i+')')[0]).files[0]));
	}

	$.ajax({
		type: "POST",
		url: "assets/clases/form-process-files.php?name=" + name + "&email=" + email + "&perfil=" + perfil + "&message=" + message,
		contentType: false,
		data: cv,
		processData: false,
		success : function(text){

			var myNode = "#trabajoForm";

			if (text == "success"){
				formSuccess(myNode);
			} else {
				formError(myNode);
				submitMSG(false,text);
			}
		}
	});
}

function formSuccess(myNode){
	$(myNode)[0].reset();
	submitMSG(true, "Â¡Mensaje enviado!")
}

function formError(myNode){
	$(myNode).removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		$(this).removeClass();
	});
}

function submitMSG(valid, msg){
	if(valid){
		var msgClasses = "h3 fadeInLeft animated text-success";
	} else {
		var msgClasses = "h5 text-danger";
	}
	$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}