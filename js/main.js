const a = "test";

$(function() {
    

	//change text if is mobile
	if ($(window).width() < 768) {
	   $(".body_profile-settings > h2").html("SETTINGS");
	}

	$(".login_bg .login_box button").click(function() {

		$(".login_bg").hide(500);
		$(".website_bg").show(500);


		//if user logedout and login again he will start with info window showing
		$(".body_profile-info").show(500);
		$(".body_profile-settings").hide(500);
		$(".header_bottom_nav a.about").addClass("selected");
		$(".header_bottom_nav a.settings").removeClass("selected");

	})

	$(".header_logout button").click(function() {

		$(".login_bg").show(500);
		$(".website_bg").hide(500);

	})

	$(".website_bg .body_profile-info .editabsolute").click(function() {

		$(".body_profile-info").hide();
		$(".body_profile-info_edit").show(500);

	})

	$(".body_profile-info_edit .cancel").click(function() {

		$(".body_profile-info_edit").hide();
		$(".body_profile-info").show(500);

	})


	$(".header_bottom_nav a.settings").click(function() { 

			$(".body_profile-info").hide(500);
			$(".body_profile-settings").show(500);

			$(".header_bottom_nav a.about").removeClass("selected");
			$(".header_bottom_nav a.settings").addClass("selected");

		// i would use foreach if tehre was more menu content for other links
	})

	$(".header_bottom_nav a.about, .body_profile-settings form .save").click(function() { 

			$(".body_profile-info").show(500);
			$(".body_profile-settings").hide(500);

			$(".header_bottom_nav a.about").addClass("selected");
			$(".header_bottom_nav a.settings").removeClass("selected");

	})

	$(".header_bottom_nav a.about, .body_profile-settings form .cancel").click(function() { 

			$(".body_profile-info").show(500);
			$(".body_profile-settings").hide(500);

	})

	//mobile edditing and saving scripts

	$(".body_profile-info_edit .save").click(function() {

		$(".body_profile-info_edit").hide();
		$(".body_profile-info").show(500);

		if ( $("#formfirst").val() ) {
			var text1 = document.getElementById("formfirst").value; 
			$(".body_profile-info h3 span.first").text(text1);
		}

		if ( $("#formlast").val() ) {
			var text2 = document.getElementById("formlast").value; 
			$(".body_profile-info h3 span.second").text(text2);
		}

		if ( $("#formsite").val() ) {
			var text3 = document.getElementById("formsite").value; 
			$(".body_profile-info h4 a").text(text3);
			$(".body_profile-info h4 a").attr("href", text3)
		}

		if ( $("#formphone").val() ) {
			var text4 = document.getElementById("formphone").value; 
			$(".body_profile-info .ion-ios-telephone-outline h4").text(text4);

		}

		if ( $("#formadress").val() ) {
			var text5 = document.getElementById("formadress").value; 
			$(".body_profile-info .ion-ios-home-outline h4").text(text5);

		}

	})


	//desktop about edditing and saving scripts

	//edit desktop name
	$(".body_profile-info .body_profile-info_loaded-name .editabsolutedesktop").click(function() {

		$(".body_profile-info .nameeditdiv").show();

		$(".body_profile-info .body_profile-info_loaded-name button.save").click(function() {

				$(".nameeditdiv").hide(500);

				var newname = document.getElementById("nameinfoedit").value;
				$(".body_profile-info_loaded-name h3").text(newname);


		})

		$(".body_profile-info .body_profile-info_loaded-name button.cancel").click(function() {

			$(".nameeditdiv").hide(500);

		})

	})


	//edit desktop website
	$(".body_profile-info .body_profile-info_loaded-website .editabsolutedesktop").click(function() {

		$(".body_profile-info .websiteeditdiv").show();

		$(".body_profile-info .body_profile-info_loaded-website button.save").click(function() {


				$(".websiteeditdiv").hide(500);

				var newwebsite = document.getElementById("websiteinfoedit").value;
				$(".body_profile-info_loaded-website h4 a").text(newwebsite);
				$(".body_profile-info_loaded-website h4 a").attr("href", newwebsite)


		})

		$(".body_profile-info .body_profile-info_loaded-website button.cancel").click(function() {

			$(".websiteeditdiv").hide(500);

		})

	})


	//edit desktop phone
	$(".body_profile-info .body_profile-info_loaded-phone .editabsolutedesktop").click(function() {

		$(".body_profile-info .phoneeditdiv").show();

		$(".body_profile-info .body_profile-info_loaded-phone button.save").click(function() {

				$(".phoneeditdiv").hide(500);

				var newphone = document.getElementById("phoneinfoedit").value;
				$(".body_profile-info_loaded-phone h4").text(newphone);


		})

		$(".body_profile-info .body_profile-info_loaded-phone button.cancel").click(function() {

			$(".phoneeditdiv").hide(500);

		})

	})

	//edit desktop adress
	$(".body_profile-info .body_profile-info_loaded-adress .editabsolutedesktop").click(function() {

		$(".body_profile-info .adresseditdiv").show();

		$(".body_profile-info .body_profile-info_loaded-adress button.save").click(function() {

				$(".adresseditdiv").hide(500);

				var newadress = document.getElementById("adressinfoedit").value;
				$(".body_profile-info_loaded-adress h4").text(newadress);


		})

		$(".body_profile-info .body_profile-info_loaded-adress button.cancel").click(function() {

			$(".adresseditdiv").hide(500);

		})

	})




	



})