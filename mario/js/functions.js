function levelplay(){
	var haxtanak =[$("#bajak")];
	var voskiner = 0;
	var kyanqer =3;
	var hero = $("#mario");
	var xochndot = [$("#tshnami0"),$("#tshnami1")];
	var buys= [$("#plant0"),$("#plant1")];
	var cack = [];
	for(var i = 0;i<50;i++){
	 	cack.push($("#fundament"+i));
	}
	for(var i = 0;i<59;i++){
       cack.push($("#qarer" +i));
		cack.push($("#qarer4"));
	}
	cack.push($("#object0"),$("#object1"));
	var voski = [];
	for(var i=0;i<10;i++){
		voski.push($("#gem" +i));
	}


    var directions = {};
    var speedX = 4;
    var speedY = 0;

    var gravity = 0.2;
    var jumpState = true;

    var STATIC_HOR_CENTER;
    var STATIC_VER_CENTER

    var WIDTH_DIFFERENCE;
    var HEIGHT_DIFFERENCE;


    var STATIC_HOR_CENTER
    var STATIC_VER_CENTER

    var WIDTH_DIFFERENCE
    var HEIGHT_DIFFERENCE

    var HERO_HOR_CENTER;
    var HERO_VER_CENTER;

    var lastDirection = "down";
    var count = 0;
    var imageCounter = 1;

	$('html').keyup(stop).keydown(charMovement);

    function charMovement(e) {
        directions[e.which] = true;
        console.log(directions);
    }

    function stop(e) {
        delete directions[e.which];
        console.log(directions);
    }
    function baxum() {
        for (var i in cack) {
            STATIC_HOR_CENTER = cack[i].position().left + cack[i].width() / 2;
            STATIC_VER_CENTER = cack[i].position().top;

            WIDTH_DIFFERENCE = hero.width() / 2 + cack[i].width() / 2;
            HERO_HOR_CENTER = hero.position().left + hero.width() / 2;
            HERO_VER_CENTER = hero.position().top + hero.height();

            if (Math.abs(HERO_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
                Math.abs(HERO_VER_CENTER - STATIC_VER_CENTER) <= 5

            ) {
                jumpState = false;
                hero.css("top", cack[i].position().top - hero.height()-1);
                speedY = 9;
                break;
            } else {
                if (jumpState == false) {
                    speedY = 0;
                    jumpState = true;
                }

            }
        }
    }
 		
  function sharjum() {

        if ((count += 20) % 200 == 0) {
            imageCounter = imageCounter == 1 ? 0 : (imageCounter + 1);
        }
        for (var i in directions) {
            if (hero.position().left > 0 && i == 37) {
                hero.css("left", (hero.position().left - speedX) + "px");
                lastDirection = "left";
                if (jumpState == false) {
                    hero.css("background-position", -108 + 36 * imageCounter + "px 0")
                } else {
                    hero.css("background-position", "-108px 0");
                }
            }

            if (hero.position().left < ($("#map").width() - hero.width()) && i == 39) {
                hero.css("left", (hero.position().left + speedX) + "px");
                lastDirection = "right";
                if (jumpState == false) {
                    hero.css("background-position", -36 * imageCounter + "px 0")
                } else {
                    hero.css("background-position", "-0px 0");
                }
            }
            if (hero.position().top > 0 && i == 38 && jumpState == false) {
                jumpState = true;
                hero.css("top", (hero.position().top - 6));
                lastDirection = "up";
            }

            if (hero.position().top < ($("#map").height() - hero.height()-1) && i == 40) {
                jumpState = false;
                hero.css("top", hero.position().top + speedX + "px");
                lastDirection = "down";


            }
        }
    }
    function trubiBaxum() {
        for (var i in cack) {
            STATIC_VER_CENTER = cack[i].position().top + cack[i].height() / 2;
            STATIC_HOR_CENTER = cack[i].position().left + cack[i].width() / 2;

            HERO_VER_CENTER = hero.position().top + hero.height() / 2;
            HERO_HOR_CENTER = hero.position().left + hero.width() / 2;

            WIDTH_DIFFERENCE = hero.width() / 2 + cack[i].width() / 2;
            HEIGHT_DIFFERENCE = hero.height() / 2 + cack[i].height() / 2;
            if (Math.abs(HERO_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
                Math.abs(HERO_VER_CENTER - STATIC_VER_CENTER) <= HEIGHT_DIFFERENCE) {
               
                if (lastDirection == 'left') {
                    hero.css("left", (hero.position().left + speedX) + "px");

                } else if (lastDirection == 'right') {
                    hero.css("left", (hero.position().left - speedX) + "px");

                }
                if (jumpState) {
                    hero.css("top", (hero.position().top + speedY) + "px");
                    speedY = 0;
                }
                break;
            }
        }
    }
function voskuHavaqum() {
        for (var i in voski) {
            STATIC_VER_CENTER = voski[i].position().top + voski[i].height() / 2;
            STATIC_HOR_CENTER = voski[i].position().left + voski[i].width() / 2;

            HERO_VER_CENTER = hero.position().top + hero.height() / 2;
            HERO_HOR_CENTER = hero.position().left + hero.width() / 2;

            WIDTH_DIFFERENCE = hero.width() / 2 + voski[i].width() / 2;
            HEIGHT_DIFFERENCE = hero.height() / 2 + voski[i].height() / 2;

            if (Math.abs(HERO_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
                Math.abs(HERO_VER_CENTER - STATIC_VER_CENTER) <= HEIGHT_DIFFERENCE) {

                if (lastDirection == 'left') {
                    hero.css("left", (hero.position().left + speedX) + "px");
                    voski[i].remove();
                    voskiner++;
                    console.log[i];
                    if(voskiner==1){
                       $('.cb').css('background-image','url("images/1.png")');
                    }
                    else if(voskiner==2){
                     $('.cb').css('background-image','url("images/2.png")');   
                    }
                    else if(voskiner==3){
                        $('.cb').css('background-image','url("images/3.png")');  
                    }
                     else if(voskiner==4){
                        $('.cb').css('background-image','url("images/4.png")');  
                    }
                     else if(voskiner==5){
                        $('.cb').css('background-image','url("images/5.png")');  
                    }
                     else if(voskiner==6){
                        $('.cb').css('background-image','url("images/6.png")');  
                    }
                     else if(voskiner==7){
                        $('.cb').css('background-image','url("images/7.png")');  
                    }
                     else if(voskiner==8){
                        $('.cb').css('background-image','url("images/8.png")');  
                    }
                     else if(voskiner==9){
                        $('.cb').css('background-image','url("images/9.png")');  
                    }
                      else if(voskiner==10){
                        $('.cb').css('background-image','url("images/10.png")');  
                    }




                } 
                else if (lastDirection == 'right') {
                    hero.css("left", (hero.position().left - speedX) + "px");
                    voski[i].remove();
                    voskiner++;
                    console.log[i];
                    if(voskiner==1){
                        $('.cb').css('background-image','url("images/1.png")');
                    }
                    else if(voskiner==2){
                         $('.cb').css('background-image','url("images/2.png")');
                      
                    }
                    else if(voskiner==3){
                         $('.cb').css('background-image','url("images/3.png")');
                    }
                    else if(voskiner==4){
                        $('.cb').css('background-image','url("images/4.png")');  
                    }
                     else if(voskiner==5){
                        $('.cb').css('background-image','url("images/5.png")');  
                    }
                     else if(voskiner==6){
                        $('.cb').css('background-image','url("images/6.png")');  
                    }
                     else if(voskiner==7){
                        $('.cb').css('background-image','url("images/7.png")');  
                    }
                     else if(voskiner==8){
                        $('.cb').css('background-image','url("images/8.png")');  
                    }
                     else if(voskiner==9){
                        $('.cb').css('background-image','url("images/9.png")');  
                    }
                      else if(voskiner==10){
                        $('.cb').css('background-image','url("images/10.png")');  
                    }
                    

                } else if (jumpState) {
                    hero.css("left", (hero.position().left - speedX) + "px");
                    voski[i].remove();
                    voskiner++;
                    console.log[i];
                    if(voskiner==1){
                      $('.cb').css('background-image','url("images/1.png")');  
                    }
                    else if(voskiner==2){
                      $('.cb').css('background-image','url("images/2.png")');  
                    }
                    else if(voskiner==3){
                         $('.cb').css('background-image','url("images/3.png")');
                    }
                    else if(voskiner==4){
                        $('.cb').css('background-image','url("images/4.png")');  
                    }
                     else if(voskiner==5){
                        $('.cb').css('background-image','url("images/5.png")');  
                    }
                     else if(voskiner==6){
                        $('.cb').css('background-image','url("images/6.png")');  
                    }
                     else if(voskiner==7){
                        $('.cb').css('background-image','url("images/7.png")');  
                    }
                     else if(voskiner==8){
                        $('.cb').css('background-image','url("images/8.png")');  
                    }
                     else if(voskiner==9){
                        $('.cb').css('background-image','url("images/9.png")');  
                    }
                      else if(voskiner==10){
                        $('.cb').css('background-image','url("images/10.png")');  
                    }
                    

                  

                }

            }

        }

    }

 function tshnamuBaxum() {
        for (var i in xochndot) {
            STATIC_VER_CENTER = xochndot[i].position().top + xochndot[i].height() / 2;
            STATIC_HOR_CENTER = xochndot[i].position().left + xochndot[i].width() / 2;

            HERO_VER_CENTER = hero.position().top + hero.height() / 2;
            HERO_HOR_CENTER = hero.position().left + hero.width() / 2;

            WIDTH_DIFFERENCE = hero.width() / 2 + xochndot[i].width() / 2;
            HEIGHT_DIFFERENCE = hero.height() / 2 + xochndot[i].height() / 2;
            if (Math.abs(HERO_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
                Math.abs(HERO_VER_CENTER - STATIC_VER_CENTER) <= HEIGHT_DIFFERENCE) {
                if (jumpState) {
                    hero.css("top", (hero.position().top + speedY*5) + "px");
                    speedY=-5;
                    xochndot[i].remove();
                }
                else if (lastDirection == 'left') {
                    hero.css("left","150px");
                    kyanqer--;
                    if(kyanqer>0)
                    $('.tiv').css('background-image','url("images/'+kyanqer +'.png")');
                    else{
                    alert("Game OVER");
                    clearInterval(interval);
                    
                    }
                }
                 else if (lastDirection == 'right') {

                    hero.css("left","380px");
                    kyanqer--;
                    if(kyanqer>0)
                    $('.tiv').css('background-image','url("images/'+kyanqer+'.png")');
                    else {
                    alert("Game OVER");
                    clearInterval(interval);
                    
                    }
                }
                

            }
        }
    }
    function plantCollision(){
    	for(var i in buys){
    		  STATIC_VER_CENTER = buys[i].position().top + buys[i].height() / 2;
            STATIC_HOR_CENTER = buys[i].position().left + buys[i].width() / 2;

            HERO_VER_CENTER = hero.position().top + hero.height() / 2;
            HERO_HOR_CENTER = hero.position().left + hero.width() / 2;

            WIDTH_DIFFERENCE = hero.width() / 2 + buys[i].width() / 2;
            HEIGHT_DIFFERENCE = hero.height() / 2 + buys[i].height() / 2;

             if (Math.abs(HERO_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
                Math.abs(HERO_VER_CENTER - STATIC_VER_CENTER) <= HEIGHT_DIFFERENCE) {
                if (jumpState) {
                    hero.css("top", (hero.position().top + speedY*5) + "px");
                    speedY=-5;
                    kyanqer--;
                    if(kyanqer==3)
                    $('.tiv').css('background-image','url("images/3.png")');
                    else if(kyanqer==2){
                    $('.tiv').css('background-image','url("images/2.png")');	
                    }
                    else if(kyanqer==1){
                    $('.tiv').css('background-image','url("images/1.png")');
                    }
                    else{
                   
                    clearInterval(interval);
                    
                    }
                }
                else if (lastDirection == 'left') {
                    hero.css("left","150px");
                    kyanqer--;
                    if(kyanqer>0)
                    $('.tiv').css('background-image','url("images/'+kyanqer +'.png")');
                    else{
                    
                    clearInterval(interval);
                  
                    
                    }
                }
                 else if (lastDirection == 'right') {

                    hero.css("left","380px");
                    kyanqer--;
                    if(kyanqer>0)
                    $('.tiv').css('background-image','url("images/'+kyanqer+'.png")');
                    else{
                   
                    clearInterval(interval);
                   
                   
                    }
                }


    	}
    }
}
    function ancum() {
        for (var i in haxtanak) {
            STATIC_VER_CENTER = haxtanak[i].position().top + haxtanak[i].height() / 2;
            STATIC_HOR_CENTER = haxtanak[i].position().left + haxtanak[i].width() / 2;

            HERO_VER_CENTER = hero.position().top + hero.height() / 2;
            HERO_HOR_CENTER = hero.position().left + hero.width() / 2;

            WIDTH_DIFFERENCE = hero.width() / 2 + haxtanak[i].width() / 2;
            HEIGHT_DIFFERENCE = hero.height() / 2 + haxtanak[i].height() / 2;
            if (Math.abs(HERO_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
                Math.abs(HERO_VER_CENTER - STATIC_VER_CENTER) <= HEIGHT_DIFFERENCE) {



                  if (lastDirection == 'right') {
                    hero.css("left", (hero.position().left - speedX) + "px");
                    haxtanak[i].remove();
                    console.log[i];
                    alert("You won")
                    
                   
                    
                      
                }
                 else if (jumpState) {
                    hero.css("left", (hero.position().left - speedX) + "px");
                    haxtanak[i].remove();
                    console.log[i];
                    alert("You won")
                   
                   
                    
                     
                }
            }
        }
    }
function trichq() {

        if (jumpState) {
            if (speedY > -9) {
                speedY -= gravity;

            }
            hero.css("top", hero.position().top - speedY);
        }
    }

    var interval = setInterval(function() {
        sharjum();
        trichq();
        baxum();
        trubiBaxum();
       voskuHavaqum();
       ancum();
        tshnamuBaxum();
        plantCollision();

       
    }, 20);

}