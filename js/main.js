const a = "test";

$(function() {
    

	if ($(window).width() < 768) {
	   $(".body_profile-settings > h2").html("SETTINGS");
	}

	$(".login_bg .login_box button").click(function() {

		$(".login_bg").hide(500);
		$(".website_bg").show(500);

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

	$(".body_profile-info_edit .save").click(function() {

		$(".body_profile-info_edit").hide();
		$(".body_profile-info").show(500);



	})



})