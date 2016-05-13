'use strict';
angular.module('sponsBrochureApp')
	.controller('menuCtrl', function ($scope) {
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

		$scope.homePage = function() {
			window.location.assign("http://ebrochure.shaastra.org/#/");
			location.reload();
		};
	});



