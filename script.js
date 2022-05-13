

$(".ClickC").click(function() {
     $(".CartReg") .hide(); 
      $(".ClickC") .hide(); 
     $(".ButtersReg") .hide(); 
     $(".ClickB") .hide(); 
     $(".q1") .hide(); 
    $(".q3").show();
     $(".school").show(); 
     $(".fatman") .show(); 
    $(".goschool") .show(); 
    $(".fat") .show();  
});

$(".ClickC").hover(function() {
    $(".ClickB").css("background-color","#A84531");
    $(".ClickC").css("background-color","#CBF584");
    });

   
$(".ClickB").hover(function() {
    $(".ClickB").css("background-color","#CBF584");
    $(".ClickC").css("background-color","#A84531");
    });
    
    
$(".ClickB").click(function() {
     $(".CartReg") .hide(); 
      $(".ClickC") .hide(); 
     $(".ButtersReg") .hide(); 
     $(".ClickB") .hide(); 
     $(".q1") .hide(); 
     $(".q2") .show(); 
    $(".q2") .css("color","#A84531");
    $("body").css("background-color","#CBF584");
    $(".loserbutters") .fadeIn(1000); 
    $(".r1") .fadeIn(); 
    $(".r1") .text("You are now considered a loser as well. Better luck next time!"); 
    
});

$(".fat").click(function() {
      $(".pics2") .hide(); 
      $(".buttons2") .hide(); 
    $(".q3") .hide(); 
    $(".q4") .fadeIn();
    $(".chili") .fadeIn(1000); 
     $(".r2") .fadeIn(1000); 
    $(".r2") .text("You angered Cartman and he cooked you into chili. Yikes!");
     $(".q4") .css("color","#A84531");
    $("body").css("background-color","#CBF584");
    });
$(".goschool").click(function() {
      $(".pics2") .hide(); 
      $(".buttons2") .hide(); 
    $(".q3") .hide(); 
      $(".q5") .show();
     $(".bus") .show();
        });
$(".fat").hover(function() {
    $(".goschool").css("background-color","#A84531");
    $(".fat").css("background-color","#CBF584");
    });
$(".goschool").hover(function() {
    $(".fat").css("background-color","#A84531");
    $(".goschool").css("background-color","#CBF584");
    });

$(".bus").dblclick(function() {
     $(".bus") .hide(); 
     $(".q5") .hide();
     $(".main") .show();
     $(".craigs") .show();
     $(".cg") .show();
    $(".m4") .show();
    $(".q6") .show();
      });
$(".cg").hover(function() {
    $(".cg").css("background-color","#CBF584");
    $(".m4").css("background-color","#A84531");
    });
$(".m4").hover(function() {
    $(".m4").css("background-color","#CBF584");
    $(".cg").css("background-color","#A84531");
    });

$(".cg").click(function() {
     $(".pics3") .hide(); 
      $(".buttons3") .hide(); 
    $(".q6") .hide(); 
     $(".q7") .show(); 
      $(".craigfin") .fadeIn(1000); 
    $(".r3") .fadeIn(1000); 
    $(".r3") .text("You are now super popular! Which says a lot coming from 10 year olds...");
     $(".q7") .css("color","#A84531");
    $("body").css("background-color","#CBF584");
    
    
      });

$(".m4").click(function() {
     $(".pics3") .hide(); 
      $(".buttons3") .hide(); 
    $(".q6") .hide(); 
     $(".q8") .fadeIn(); 
     $(".finale") .fadeIn(); 
     $(".r4") .fadeIn(1000); 
    $(".r4") .text("You aren't as popular, but you definitely have more fun!");
     $(".q8") .css("color","#A84531");
    $("body").css("background-color","#CBF584");
    
      });

