'use strict';
angular.module('sponsBrochureApp')
	.controller('homeCtrl', function ($scope) {
		var count = 0;
		$scope.onClick = function() {
			if(count == 1) {
			  document.getElementById("menu-container").style.right="-200px";
			  document.getElementById("menu-container").style.opacity="0";
			  document.getElementById("closemenu").style.right="30px";
			  document.getElementById("closeiconcontainer").style.display="none";
			  document.getElementById("closefirstline").style.display="none";
			  document.getElementById("closesecondline").style.display="none";
			  document.getElementById("firstline").style.display="block";
			  document.getElementById("secondline").style.display="block";
			  document.getElementById("thirdline").style.display="block";
			  document.getElementById("fourthline").style.display="block";
    		  count=count-1;
			}
			else {
			  document.getElementById("menu-container").style.right="0px";
			  document.getElementById("menu-container").style.opacity="1";
			  document.getElementById("closemenu").style.right="120px";
			  document.getElementById("closeiconcontainer").style.display="block";
			  document.getElementById("closefirstline").style.display="block";
			  document.getElementById("closesecondline").style.display="block";
			  document.getElementById("firstline").style.display="none";
			  document.getElementById("secondline").style.display="none";
			  document.getElementById("thirdline").style.display="none";
			  document.getElementById("fourthline").style.display="none";
   			  count=count+1;
			}
		};

	$.noConflict();	
    // $(document).ready(function() {
    	jQuery( document ).ready(function( $ ) {
      // $("#menu").load('menu.html');
      // $("#ticks").addClass('initialAdjustment');
      // var topOfOthDiv = $("#about-shaastra-two").offset().top;  
      // $(window).scroll(function () {
      //   if ($(window).scrollTop() > topOfOthDiv) {
      //     $('#ticks').removeClass('initialAdjustment');
      //   }
      // });

      var ticks = $(".tt");
      var ticks_topOfOthDiv = $("#about-shaastra-two").offset().top - 100;  
      ticks.css({"opacity": '0'});

      var acheivements = $(".ach");
      var acheivements_topOfthDiv = $("#ticks").offset().top - 100;
      acheivements.css({"opacity": '0'});

      var stats = $(".sta");
      var stats_topOfthDiv = $("#acheivements-last").offset().top - 200;
      stats.css({"opacity": '0'});

      var awaits = $(".awaits");
      var awaits_topOfthDiv = $("#statistics").offset().top - 200;
      awaits.css({"opacity": '0'});

      var motto = $(".motto");
      var motto_topOfthDiv = $("#awaits-last").offset().top + 100;
      motto.css({"opacity": '0'});

      var aim = $(".aaa");
      var aim_topOfthDiv = $("#motto").offset().top;
      aim.css({"opacity": '0'});

      var events = $(".eve");
      var events_topOfthDiv = $("#shaastraActivity").offset().top + 100;
      events.css({"opacity": '0'});

      var misVis = $(".misVis");
      var misVis_topOfthDiv = $("#events-last").offset().top - 200;
      misVis.css({"opacity": '0'});

      var humble = $(".humble");
      var humble_topOfthDiv = $("#mission").offset().top + 500;
      humble.css({"opacity": '0'});

      var cores = $(".cores");
      var cores_topOfthDiv = $("#foot-mid").offset().top - 300;
      cores.css({"opacity": '0'});

      $(window).scroll(function () {
        if ($(window).scrollTop() > ticks_topOfOthDiv) {
          ticks.each(function (i) {
            $(this).delay((i++)*250).fadeTo(1000, 1);
          });
        }
        if ($(window).scrollTop() > acheivements_topOfthDiv) {
          acheivements.each(function (i) {
            $(this).delay((i++)*250).fadeTo(500, 1);
          });
        }
        if ($(window).scrollTop() > stats_topOfthDiv) {
          stats.each(function (i) {
            $(this).delay((i++)*250).fadeTo(750, 1);
          });
        }
        if ($(window).scrollTop() > awaits_topOfthDiv) {
          awaits.each(function (i) {
            $(this).delay((i++)*500).fadeTo(1000, 1);
          });
        }
        if ($(window).scrollTop() > motto_topOfthDiv) {
          motto.each(function (i) {
            $(this).delay((i++)*500).fadeTo(1000, 1);
          });
        }
        if ($(window).scrollTop() > aim_topOfthDiv) {
          aim.each(function (i) {
            $(this).delay((i++)*250).fadeTo(1000, 1);
          });
        }
        if ($(window).scrollTop() > events_topOfthDiv) {
          events.each(function (i) {
            $(this).delay((i++)*500).fadeTo(1000, 1);
          });
        }
        if ($(window).scrollTop() > misVis_topOfthDiv) {
          misVis.each(function (i) {
            $(this).delay((i++)*500).fadeTo(1000, 1);
          });
        }
        if ($(window).scrollTop() > humble_topOfthDiv) {
          humble.each(function (i) {
            $(this).delay((i++)*250).fadeTo(1000, 1);
          });
        }
        if ($(window).scrollTop() > cores_topOfthDiv) {
          cores.each(function (i) {
            $(this).delay((i++)*250).fadeTo(1000, 1);
          });
        }
      });      
    })

	});



