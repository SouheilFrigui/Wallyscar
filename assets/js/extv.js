$(function(){
	$("#formulaire").hide();
	$("#affichage").click(function(){
			$("#formulaire").show();
	});

	$('#formulaire').submit(function(e) {
    e.preventDefault();
    var first_name = $('#nom_pren').val();
    var email = $('#e-mail').val();
    var message = $('#area').val();
 
    $(".error").remove();
 
    if (first_name.length < 1) {
      $('#nom_pren').after('<span class="error">This field is required</span>');
    }
    if (email.length < 1) {
      $('#e-mail').after('<span class="error">This field is required</span>');
    } else {
      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#e-mail').after('<span class="error">Enter a valid email</span>');
      }
    }
    if (message.length < 8) {
      $('#are').after('<span class="error">Password must be at least 8 characters long</span>');
    }
  });
 
});