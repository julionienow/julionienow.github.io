const a = "test";

$(function() {
    

	//change text if is mobile
	if ($(window).width() < 768) {
	   $(".body_profile-settings > h2").html("SETTINGS");



	//add swipe left and right function
	$(".body_profile-info").on("swipeleft",function(){
		$(".body_profile-info").hide(500);
		$(".body_profile-settings").show();

		$(".header_bottom_nav a.about").removeClass("selected");
		$(".header_bottom_nav a.settings").addClass("selected");
	});

	$(".body_profile-settings").on("swiperight",function(){
		$(".body_profile-info").show(500);
		$(".body_profile-settings").hide();


		$(".header_bottom_nav a.about").addClass("selected");
		$(".header_bottom_nav a.settings").removeClass("selected");
	});

	$(".body_profile-info_edit").on("swipeleft",function(){
		$(".body_profile-info_edit").hide(500);
		$(".body_profile-settings").show();

		$(".header_bottom_nav a.about").removeClass("selected");
		$(".header_bottom_nav a.settings").addClass("selected");
	});


	}


	//go to second website screen
	$(".login_bg .login_box button").click(function() {

		$(".login_bg").hide(500);
		$(".website_bg").show(500);


		//if user logedout and login again he will start with info window showing even if he left with settings openned
		$(".body_profile-info").show(500);
		$(".body_profile-settings").hide(500);
		$(".header_bottom_nav a.about").addClass("selected");
		$(".header_bottom_nav a.settings").removeClass("selected");

	})

	//goes to login screen
	$(".header_logout button").click(function() {

		$(".login_bg").show(500);
		$(".website_bg").hide(500);

	})


	//MOBILE hides about and shows settings
	$(".website_bg .body_profile-info .editabsolute").click(function() {

		$(".body_profile-info").hide();
		$(".body_profile-info_edit").show(500);

	})

	//MOBILE hide settings and shows about 
	$(".body_profile-info_edit .cancel").click(function() {

		$(".body_profile-info_edit").hide();
		$(".body_profile-info").show(500);

	})


	//MOBILE saves the profile edit changes on edit
	$(".body_profile-info_edit .save").click(function() {

		var firstnamemobile = document.getElementById("formfirst").value;
		var lastnamemobile = document.getElementById("formlast").value;
		var urlsitemobile = document.getElementById("formsite").value;
		var phonenumbermobile = document.getElementById("formphone").value;
		var adressmobile = document.getElementById("formadress").value;

		if (firstnamemobile.length > 0  ) {
			$(".body_profile-info_loaded-name .first").text(firstnamemobile);
			$(this).attr('placeholder', '');
			$(".body_profile-info_edit").hide();
			$(".body_profile-info").show(500);
		}
		if (lastnamemobile.length > 0  ) {
			$(".body_profile-info_loaded-name .second").text(lastnamemobile);
			$(this).attr('placeholder', '');
			$(".body_profile-info_edit").hide();
			$(".body_profile-info").show(500);
		}
		if (urlsitemobile.length > 0  ) {
			$(".body_profile-info_loaded-website h4 a").text(urlsitemobile);
			$(".body_profile-info_loaded-website h4 a").attr("href", "http://"+urlsitemobile);
			$(this).attr('placeholder', '');
			$(".body_profile-info_edit").hide();
			$(".body_profile-info").show(500);
		}
		if (phonenumbermobile.length > 0  ) {
			$(".body_profile-info_loaded-phone h4").text(phonenumbermobile);
			$(this).attr('placeholder', '');
			$(".body_profile-info_edit").hide();
			$(".body_profile-info").show(500);
		}
		if (adressmobile.length > 0  ) {
			$(".body_profile-info_loaded-adress h4").text(adressmobile);
			$(this).attr('placeholder', '');
			$(".body_profile-info_edit").hide();
			$(".body_profile-info").show(500);
		}

			$(".body_profile-info_edit").hide();
			$(".body_profile-info").show(500);

	})


	//Changes the selected tab
	$(".header_bottom_nav a.settings").click(function() { 

			$(".body_profile-info").hide(500);
			$(".body_profile-settings").show(500);
			$(".body_profile-info_edit").hide();

			$(".header_bottom_nav a.about").removeClass("selected");
			$(".header_bottom_nav a.settings").addClass("selected");

		// i would use foreach if tehre was more menu content for other links
	})

	//Changes the selected tab
	$(".header_bottom_nav a.about, .body_profile-settings form .save").click(function() { 

			$(".body_profile-info").show(500);
			$(".body_profile-settings").hide(500);
			$(".body_profile-info_edit").hide();

			$(".header_bottom_nav a.about").addClass("selected");
			$(".header_bottom_nav a.settings").removeClass("selected");

	})

	//MOBILE Changes the selected tab
	$(".header_bottom_nav a.about, .body_profile-settings form .cancel").click(function() { 

			$(".body_profile-info").show(500);
			$(".body_profile-settings").hide(500);
			$(".header_bottom_nav a.about").addClass("selected");
			$(".header_bottom_nav a.settings").removeClass("selected");

	})

	//desktop about edditing and saving scripts

	//edit desktop name
	$(".body_profile-info .body_profile-info_loaded-name .editabsolutedesktop").click(function() {

		$(".body_profile-info .nameeditdiv").show();

		$(".body_profile-info .body_profile-info_loaded-name button.save").click(function() {



			if ( $("#nameinfoedit").val() ) {

				$(".nameeditdiv").hide(500);

				var newname = document.getElementById("nameinfoedit").value;

				$(".body_profile-info_loaded-name h3").text(newname);

			}

			else {

				alert("Please fill this input");
			}

		})

		$(".body_profile-info .body_profile-info_loaded-name button.cancel").click(function() {

			$(".nameeditdiv").hide(500);

		})

	})


	//edit desktop website
	$(".body_profile-info .body_profile-info_loaded-website .editabsolutedesktop").click(function() {

		$(".body_profile-info .websiteeditdiv").show();

		$(".body_profile-info .body_profile-info_loaded-website button.save").click(function() {


			if ( $("#websiteinfoedit").val() ) {

				$(".websiteeditdiv").hide(500);

				var newwebsite = document.getElementById("websiteinfoedit").value;
				$(".body_profile-info_loaded-website h4 a").text(newwebsite);
				$(".body_profile-info_loaded-website h4 a").attr("href", "http://"+newwebsite)

			}

			else {

				alert("Please fill this input");
			}

		})

		$(".body_profile-info .body_profile-info_loaded-website button.cancel").click(function() {

			$(".websiteeditdiv").hide(500);

		})

	})


	//edit desktop phone
	$(".body_profile-info .body_profile-info_loaded-phone .editabsolutedesktop").click(function() {

		$(".body_profile-info .phoneeditdiv").show();

		$(".body_profile-info .body_profile-info_loaded-phone button.save").click(function() {

			if ( $("#phoneinfoedit").val() ) {

				$(".phoneeditdiv").hide(500);

				var newphone = document.getElementById("phoneinfoedit").value;
				$(".body_profile-info_loaded-phone h4").text(newphone);

			}

			else {

				alert("Please fill this input");
			}

		})

		$(".body_profile-info .body_profile-info_loaded-phone button.cancel").click(function() {

			$(".phoneeditdiv").hide(500);

		})

	})

	//edit desktop adress
	$(".body_profile-info .body_profile-info_loaded-adress .editabsolutedesktop").click(function() {

		$(".body_profile-info .adresseditdiv").show();

		$(".body_profile-info .body_profile-info_loaded-adress button.save").click(function() {

			if ( $("#adressinfoedit").val() ) {

				$(".adresseditdiv").hide(500);

				var newadress = document.getElementById("adressinfoedit").value;
				$(".body_profile-info_loaded-adress h4").text(newadress);

			}

			else {

				alert("Please fill this input");
			}

		})

		$(".body_profile-info .body_profile-info_loaded-adress button.cancel").click(function() {

			$(".adresseditdiv").hide(500);

		})

	})

	//adding css animate to login input

	$(".login_box form #loginemail").click(function() {
		var currentinput = $(this).attr('placeholder');

		if (currentinput.length > 0  ) {

			$(".login_box-email_input_text").text(currentinput);
			$(this).attr('placeholder', '');

		}
	})

	$(".login_box form #loginpass").click(function() {
		var currentinput = $(this).attr('placeholder');

		if (currentinput.length > 0  ) {

			$(".login_box-password_input_text").text(currentinput);
			$(this).attr('placeholder', '');

		}

	})

	
	//adding css animate to settings input

	$(".body_profile-settings form #settingscurrent").click(function() {
		var currentinput = $(this).attr('placeholder');

		if (currentinput.length > 0  ) {

			$(".body_profile-settings-settingscurrent").text(currentinput);
			$(this).attr('placeholder', '');

		}
	})

	$(".body_profile-settings form #settingsnew").click(function() {
		var currentinput = $(this).attr('placeholder');

		if (currentinput.length > 0  ) {

			$(".body_profile-settings-settingsnew").text(currentinput);
			$(this).attr('placeholder', '');

		}
	})

	$(".body_profile-settings form #settingsrepeat").click(function() {
		var currentinput = $(this).attr('placeholder');

		if (currentinput.length > 0  ) {

			$(".body_profile-settings-settingsrepeat").text(currentinput);
			$(this).attr('placeholder', '');

		}
	})


	
	//adding css animate to mobile about edit

	$(".body_profile-info_edit #formfirst").click(function() {
		var currentinput = $(this).attr('placeholder');

		if (currentinput.length > 0  ) {

			$(".body_profile-info_edit-_firstmobile").text(currentinput);
			$(this).attr('placeholder', '');

		}
	})

	$(".body_profile-info_edit #formlast").click(function() {
		var currentinput = $(this).attr('placeholder');

		if (currentinput.length > 0  ) {

			$(".body_profile-info_edit-_lastmobile").text(currentinput);
			$(this).attr('placeholder', '');

		}
	})

	$(".body_profile-info_edit #formsite").click(function() {
		var currentinput = $(this).attr('placeholder');

		if (currentinput.length > 0  ) {

			$(".body_profile-info_edit-_websitemobile").text(currentinput);
			$(this).attr('placeholder', '');
			
		}
	})

	$(".body_profile-info_edit #formphone").click(function() {
		var currentinput = $(this).attr('placeholder');

		if (currentinput.length > 0  ) {

			$(".body_profile-info_edit-_phonemobile").text(currentinput);
			$(this).attr('placeholder', '');

		}
	})

	$(".body_profile-info_edit #formadress").click(function() {
		var currentinput = $(this).attr('placeholder');

		if (currentinput.length > 0  ) {
		
			$(".body_profile-info_edit-_adressmobile").text(currentinput);
			$(this).attr('placeholder', '');

		}

	})



})