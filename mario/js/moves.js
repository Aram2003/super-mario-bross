function gamestart() {
    var complete = [$("#cup")];
    var coins = 0;
    var lives=3;
    var hero = $("#mario");
    var floor = [];
    for (var i = 0; i < 50; i++)
    {
        floor.push($("#collision" + i));
    }

    for (var i = 0; i < 4; i++) {
        floor.push($("#hark" + i));
    }

    floor.push($("#pipe0"), $("#pipe1"), $("#pipe2"));
    
    var coin = [];
    for(var i =0;i<10;i++)
    {
        coin.push($("#coin" +i));
        
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
    var enemy = [$("#enemy0"), $("#enemy1"),$("#enemy2")];
    function charMovement(e) {
        directions[e.which] = true;
        console.log(directions);
    }

    function stop(e) {
        delete directions[e.which];
        console.log(directions);
    }

    function checkCollision() {
        for (var i in floor) {
            STATIC_HOR_CENTER = floor[i].position().left + floor[i].width() / 2;
            STATIC_VER_CENTER = floor[i].position().top;

            WIDTH_DIFFERENCE = hero.width() / 2 + floor[i].width() / 2;
            HERO_HOR_CENTER = hero.position().left + hero.width() / 2;
            HERO_VER_CENTER = hero.position().top + hero.height();

            if (Math.abs(HERO_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
                Math.abs(HERO_VER_CENTER - STATIC_VER_CENTER) <= 5

            ) {
                jumpState = false;
                hero.css("top", floor[i].position().top - hero.height()-1);
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

    function move() {

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


    function checkCollisionPipe() {
        for (var i in floor) {
            STATIC_VER_CENTER = floor[i].position().top + floor[i].height() / 2;
            STATIC_HOR_CENTER = floor[i].position().left + floor[i].width() / 2;

            HERO_VER_CENTER = hero.position().top + hero.height() / 2;
            HERO_HOR_CENTER = hero.position().left + hero.width() / 2;

            WIDTH_DIFFERENCE = hero.width() / 2 + floor[i].width() / 2;
            HEIGHT_DIFFERENCE = hero.height() / 2 + floor[i].height() / 2;
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

    function collectCoins() {
        for (var i in coin) {
            STATIC_VER_CENTER = coin[i].position().top + coin[i].height() / 2;
            STATIC_HOR_CENTER = coin[i].position().left + coin[i].width() / 2;

            HERO_VER_CENTER = hero.position().top + hero.height() / 2;
            HERO_HOR_CENTER = hero.position().left + hero.width() / 2;

            WIDTH_DIFFERENCE = hero.width() / 2 + coin[i].width() / 2;
            HEIGHT_DIFFERENCE = hero.height() / 2 + coin[i].height() / 2;

            if (Math.abs(HERO_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
                Math.abs(HERO_VER_CENTER - STATIC_VER_CENTER) <= HEIGHT_DIFFERENCE) {

                if (lastDirection == 'left') {
                    hero.css("left", (hero.position().left + speedX) + "px");
                    coin[i].remove();
                    coins++;
                    console.log[i];
                    if(coins==1){
                       $('.cb').css('background-image','url("images/1.png")');
                    }
                    else if(coins==2){
                     $('.cb').css('background-image','url("images/2.png")');   
                    }
                    else if(coins==3){
                        $('.cb').css('background-image','url("images/3.png")');  
                    }
                     else if(coins==4){
                        $('.cb').css('background-image','url("images/4.png")');  
                    }
                     else if(coins==5){
                        $('.cb').css('background-image','url("images/5.png")');  
                    }
                     else if(coins==6){
                        $('.cb').css('background-image','url("images/6.png")');  
                    }
                     else if(coins==7){
                        $('.cb').css('background-image','url("images/7.png")');  
                    }
                     else if(coins==8){
                        $('.cb').css('background-image','url("images/8.png")');  
                    }
                     else if(coins==9){
                        $('.cb').css('background-image','url("images/9.png")');  
                    }
                      else if(coins==10){
                        $('.cb').css('background-image','url("images/10.png")');  
                    }




                } 
                else if (lastDirection == 'right') {
                    hero.css("left", (hero.position().left - speedX) + "px");
                    coin[i].remove();
                    coins++;
                    console.log[i];
                    if(coins==1){
                        $('.cb').css('background-image','url("images/1.png")');
                    }
                    else if(coins==2){
                         $('.cb').css('background-image','url("images/2.png")');
                      
                    }
                    else if(coins==3){
                         $('.cb').css('background-image','url("images/3.png")');
                    }
                    else if(coins==4){
                        $('.cb').css('background-image','url("images/4.png")');  
                    }
                     else if(coins==5){
                        $('.cb').css('background-image','url("images/5.png")');  
                    }
                     else if(coins==6){
                        $('.cb').css('background-image','url("images/6.png")');  
                    }
                     else if(coins==7){
                        $('.cb').css('background-image','url("images/7.png")');  
                    }
                     else if(coins==8){
                        $('.cb').css('background-image','url("images/8.png")');  
                    }
                     else if(coins==9){
                        $('.cb').css('background-image','url("images/9.png")');  
                    }
                      else if(coins==10){
                        $('.cb').css('background-image','url("images/10.png")');  
                    }
                    

                } else if (jumpState) {
                    hero.css("left", (hero.position().left - speedX) + "px");
                    coin[i].remove();
                    coins++;
                    console.log[i];
                    if(coins==1){
                      $('.cb').css('background-image','url("images/1.png")');  
                    }
                    else if(coins==2){
                      $('.cb').css('background-image','url("images/2.png")');  
                    }
                    else if(coins==3){
                         $('.cb').css('background-image','url("images/3.png")');
                    }
                    else if(coins==4){
                        $('.cb').css('background-image','url("images/4.png")');  
                    }
                     else if(coins==5){
                        $('.cb').css('background-image','url("images/5.png")');  
                    }
                     else if(coins==6){
                        $('.cb').css('background-image','url("images/6.png")');  
                    }
                     else if(coins==7){
                        $('.cb').css('background-image','url("images/7.png")');  
                    }
                     else if(coins==8){
                        $('.cb').css('background-image','url("images/8.png")');  
                    }
                     else if(coins==9){
                        $('.cb').css('background-image','url("images/9.png")');  
                    }
                      else if(coins==10){
                        $('.cb').css('background-image','url("images/10.png")');  
                    }
                    

                  

                }

            }

        }

    }

    function killingBirds() {
        for (var i in enemy) {
            STATIC_VER_CENTER = enemy[i].position().top + enemy[i].height() / 2
            STATIC_HOR_CENTER = enemy[i].position().left + enemy[i].width() / 2;

            HERO_VER_CENTER = hero.position().top + hero.height() / 2;
            HERO_HOR_CENTER = hero.position().left + hero.width() / 2;

            WIDTH_DIFFERENCE = hero.width() / 2 + enemy[i].width() / 2;
            HEIGHT_DIFFERENCE = hero.height() / 2 + enemy[i].height() / 2;
            if (Math.abs(HERO_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
                Math.abs(HERO_VER_CENTER - STATIC_VER_CENTER) <= HEIGHT_DIFFERENCE) {
                if (jumpState) {
                    hero.css("top", (hero.position().top + speedY*5) + "px");
                    speedY=-5;
                   enemy[i].remove();
                }
                else if (lastDirection == 'left') {
                    hero.css("left","150px");
                    lives--;
                    if(lives>0)
                    $('.cuant').css('background-image','url("images/'+lives+'.png")');
                    else{
                    alert("Game OVER");
                    clearInterval(interval);
                    }
                }
                 else if (lastDirection == 'right') {

                    hero.css("left","380px");
                    lives--;
                    if(lives>0)
                    $('.cuant').css('background-image','url("images/'+lives+'.png")');
                    else if (lives ==0){
                    //alert("Game OVER");
                    clearInterval(interval);
                    }
                }
                

            }
        }
    }


    function winTheGame() {
        for (var i in complete) {
            STATIC_VER_CENTER = complete[i].position().top + complete[i].height() / 2;
            STATIC_HOR_CENTER = complete[i].position().left + complete[i].width() / 2;

            HERO_VER_CENTER = hero.position().top + hero.height() / 2;
            HERO_HOR_CENTER = hero.position().left + hero.width() / 2;

            WIDTH_DIFFERENCE = hero.width() / 2 + complete[i].width() / 2;
            HEIGHT_DIFFERENCE = hero.height() / 2 + complete[i].height() / 2;
            if (Math.abs(HERO_HOR_CENTER - STATIC_HOR_CENTER) <= WIDTH_DIFFERENCE &&
                Math.abs(HERO_VER_CENTER - STATIC_VER_CENTER) <= HEIGHT_DIFFERENCE) {



                  if (lastDirection == 'right') {
                    hero.css("left", (hero.position().left - speedX) + "px");
                    complete[i].remove();
                    console.log[i];
                    
                    
                      level();
                }
                 else if (jumpState) {
                    hero.css("left", (hero.position().left - speedX) + "px");
                    complete[i].remove();
                    console.log[i];
                   
                    
                     level();
                }
            }
        }
    }



    function jump() {

        if (jumpState) {
            if (speedY > -9) {
                speedY -= gravity;

            }
            hero.css("top", hero.position().top - speedY);
        }
    }



    var interval = setInterval(function() {
        move();
        jump();
        checkCollision();
        checkCollisionPipe();
        collectCoins();
        winTheGame();
        killingBirds();
    }, 20);


};