// JavaScript Document
	



      // Menu-toggle button

      $(document).ready(function() {
		  'use strict';
            $("button.Appear").on("click", function() {
				$(".VerhaalHigh2").slideToggle(1000); 
				$(".Seemore").slideToggle(1000);
				$('button.Appear').css('display', 'none');
				$('.VerhaalHigh2').css('display', 'inline-block');
            });
      });

      // Scrolling Effect

      $(window).on("scroll", function() {
		  'use strict';
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      });
	  
	  
	  // Landen pagina
	  
		$(document).ready(function(){
			'use strict';
			$('#Australia').click(function(){
				$('.VerhaalLandAustralia').toggle("slide");
				$('.VerhaalLandAustralia').css('display', 'inline-block');
				$('#Syria').toggle("slide");
				$('#Ukraine').toggle("slide");
				$('#Vietnam').toggle("slide");
			});
			
			$('#Syria').click(function(){
				$('.VerhaalLandSyria').toggle("slide");
				$('.VerhaalLandSyria').css('display', 'inline-block');
				$('#Australia').toggle("slide");
				$('#Ukraine').toggle("slide");
				$('#Vietnam').toggle("slide");
			});
			
			$('#Ukraine').click(function(){
				$('.VerhaalLandUkraine').toggle("slide");
				$('.VerhaalLandUkraine').css('display', 'inline-block');
				$('#Australia').toggle("slide");
				$('#Syria').toggle("slide");
				$('#Vietnam').toggle("slide");
			});
				
			$('#Vietnam').click(function(){
				$('.VerhaalLandVietnam').toggle("slide");
				$('.VerhaalLandVietnam').css('display', 'inline-block');
				$('#Australia').toggle("slide");
				$('#Syria').toggle("slide");
				$('#Ukraine').toggle("slide");
			});
			$(".StartLezen").click(function() {
				$('html, body').animate({
					scrollTop: ($('.VerhaalHigh').first().offset().top)
				},500);
			});
		});


				// Hamburger Menu

		      $(document).ready(function() {
		  'use strict';
            $(".menu-icon").on("click", function() {
				$('.menu').toggle('slow');


            });
      });

