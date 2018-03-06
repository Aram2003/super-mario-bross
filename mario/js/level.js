function level(){

   $("#map").empty();
       $('#map').css({
        "position": "relative",
        "background-image": "url(images/level2.png)",
        "height": "600px",
        "width": "2000px",
        "background-position": "center",
        "background-repeat": "no-repeat",
        "background-size": "2000px 600px"
        });

     var f = $("<input/>").appendTo("#map").attr("type", "button").attr("value", "MUSIC ON").attr("id", "start");
    var f2 = $("<input/>").appendTo("#map").attr("type", "button").attr("value", "MUSIC OFF").attr("id", "stopButton");
    var a = $("<audio/>").appendTo("#map").attr("id", "buzzer").attr("src", "audio/buzzer.ogg");
    var buzzer = $('#buzzer')[0];
    f.css({
        'margin-top': '1px'

        
    });
    f2.css({
    'margin-left':'-17px'

    });

    $("#stopButton").click(function() {
        buzzer.pause();
    })

    $('#start').on('click', function() {
        buzzer.play();
    });

    $("<div/>").attr("id", "mario")
        .css({
            "position": "absolute",
            "left":  "180px",
            "top":  "490px",
        }).appendTo("#map");
 		

    var wall = ['0', '0', '0', '1', '1', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0'];
    var j = 0;
    for(var i in wall){
    	if(wall[i]=='1'){
    		$('<div/>').attr('class', 'wall').attr('id', 'qarer' + j).css({
                'top': 332 + 'px',
                'left': 260 + i * 40 + 'px',
            }).appendTo('#map');
            j++;
    	}
    }



   var fundament = ['2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2',
        '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2'
        , '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '2',
         '2', '2', '2','2', '2', '2', 
        '2', '2', '2','2','2'];
    for (var i in fundament) {
        if (fundament[i] == '2') {
            $('<div/>').attr('class', 'wall').attr('id', 'fundament' + i).css({
                'top': 535 + 'px',
                'left': i * 40 + 'px',
            }).appendTo('#map');
        }
    }


     var gem = ['0', '0', '0', '3', '3', '3', '3', '3', '0', '0', '0', '0', '0', '0', '0'];
     var j = 0;
    for (var i in gem) {
        if (gem[i] == '3') {
            console.log(i);
            $('<div/>').attr('class', 'coin').attr('id', 'gem' + j).css({
                'top': 300 + 'px',
                'left': 260 + i * 40 + 'px',
            }).appendTo('#map');
            j++;
        }
    }
    var truba = ['0', '0', '4', '0', '0', '0', '0', '0', '4', '0', '0', '0', '0', '0', '0'];
    var j = 0;
    for (var i in truba) {
        if (truba[i] == '4') {
            console.log(i);
            $('<div/>').attr('class', 'pipe').attr("id", "object" + j).css({
                'top': 420 + 'px',
                'left': 1020 + i * 43 + 'px',
            }).appendTo('#map');
            j++;
        }
    }

    var enemy =  ['5', '0', '5', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];
    var j = 0;
    for (var i in enemy) {
        if (enemy[i] == '5') {
            console.log(i);
            $('<div/>').attr('class', 'bird').attr('id', 'tshnami' + j).css({
                'top': 490 + 'px',
                'left': 470 + i * 68 + 'px',
            }).appendTo('#map');
            j++;
       }
    }
    var plant = ['0', '0', '6', '0', '0', '0', '0', '0', '6', '0', '0', '0', '0', '0', '0'];
    var j = 0;
    for (var i in plant) {
        if (plant[i] == '6') {
            console.log(i);
            $('<div/>').attr('class', 'plant').attr('id', 'plant' + j).css({
                'top': 380 + 'px',
                'left': 1040 + i * 43 + 'px',
            }).appendTo('#map');
            j++;
       }
   }
     var liver = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '7'];
    for (var i in liver) {
        if (liver[i] == '7') {
            console.log(i);
            $('<div/>').attr('class', 'life').css({
                'top': 10 + 'px',
                'left': 1370 + i * 40 + 'px',
            }).appendTo('#map');
        }
    }
    var lifescore = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '8'];
    for (var i in lifescore) {
        if (lifescore[i] == '8') {
            console.log(i);
            $('<div/>').attr('class', 'tiv').css({
                'top': 10 + 'px',
                'left': 1280 + i * 40 + 'px',
            }).appendTo('#map');
        }
    }

    var coinshow = ['9', '0', '0', '0', '0', '0', '0'];
    for (var i in coinshow) {
        if (coinshow[i] == '9') {
            $('<div/>').attr('class', 'coinscore').css({
                'top': 70 + 'px',
                'left': 1950 + i * 40 + 'px',
            }).appendTo("#map");
        }
    }
    var cm = ['10', '0', '0', '0', '0', '0', '0'];
    for (var i in cm){
        if(cm[i] == '10'){
            $('<div/>').attr('class','cb').css({
              'top':70+ 'px',
              'left': 1860 + i*40 +'px'
            }).appendTo("#map");
        }
    }
    
 	var kopek = ['0', '0', '0', '11', '11', '11', '11', '11', '0', '0', '0', '0', '0', '0', '0'];
     var j = 5;
    for (var i in kopek) {
        if (kopek[i] == '11') {
            console.log(i);
            $('<div/>').attr('class', 'coin').attr('id', 'gem' + j).css({
                'top': 500 + 'px',
                'left': 1400 + i * 40 + 'px',
            }).appendTo('#map');
            j++;
        }
    }
	var win = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '12'];
    for (var i in win) {
        if (win[i] == '12') {
            console.log(i);
            $('<div/>').attr('class', 'cup').attr("id", "bajak").css({
                'top': 440 + 'px',
                'left':1360 + i*40 +'px'
            }).appendTo('#map');
        }
    }
 	var pat2 = ['14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '14', '0', '0', '0', '0'];
    var j = 4;
    for(var i in pat2){
    	if(pat2[i]=='14'){
    		$('<div/>').attr('class', 'pat2').attr("id","qarer"+j).css({
                'top': 495 + 'px',
                'left': 658 + i * 40 + 'px',
            }).appendTo('#map');
            j++;
    	}
    }
    var pat3 = ['0', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '0', '0', '0', '0'];
    var j = 15;
    for(var i in pat3){
    	if(pat3[i]=='15'){
    		$('<div/>').attr('class', 'pat2').attr("id","qarer"+j).css({
                'top': 455 + 'px',
                'left': 658 + i * 40 + 'px',
            }).appendTo('#map');
            j++;
    	}
    }
     var pat4 = ['0', '0', '16', '16', '16', '16', '16', '16', '16', '16', '16', '0', '0', '0', '0'];
    var j = 25;
    for(var i in pat4){
    	if(pat4[i]=='16'){
    		$('<div/>').attr('class', 'pat2').attr("id","qarer"+j).css({
                'top': 415 + 'px',
                'left': 658 + i * 40 + 'px',
            }).appendTo('#map');
            j++;
    	}
    }
    var pat5 = ['0', '0', '0', '17', '17', '17', '17', '17', '17', '17', '17', '0', '0', '0', '0'];
    var j = 34;
    for(var i in pat5){
    	if(pat5[i]=='17'){
    		$('<div/>').attr('class', 'pat2').attr("id","qarer"+j).css({
                'top': 375 + 'px',
                'left': 658 + i * 40 + 'px',
            }).appendTo('#map');
            j++;
    	}
    }
    var pat6 = ['0', '0', '0', '0', '18', '18', '18', '18', '18', '18', '18', '0', '0', '0', '0'];
    var j = 42;
    for(var i in pat6){
    	if(pat6[i]=='18'){
    		$('<div/>').attr('class', 'pat3').attr("id","qarer"+j).css({
                'top': 328 + 'px',
                'left': 658 + i * 40 + 'px',
            }).appendTo('#map');
            j++;
    	}
    }
    var pat7 = ['19', '19', '19', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];
    var j = 49;
    for(var i in pat7){
    	if(pat7[i]=='19'){
    		$('<div/>').attr('class', 'pat2').attr("id","qarer"+j).css({
                'top': 495 + 'px',
                'left': 1213 + i * 40 + 'px',
            }).appendTo('#map');
            j++;
    	}
    }
     var pat8 = ['20', '20', '20', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];
    var j = 52;
    for(var i in pat8){
    	if(pat8[i]=='20'){
    		$('<div/>').attr('class', 'pat2').attr("id","qarer"+j).css({
                'top': 460 + 'px',
                'left': 1213 + i * 40 + 'px',
            }).appendTo('#map');
            j++;
    	}
    }
    var pat9 = ['21', '21', '21', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];
    var j = 55;
    for(var i in pat9){
    	if(pat9[i]=='21'){
    		$('<div/>').attr('class', 'pat2').attr("id","qarer" +j).css({
                'top': 420 + 'px',
                'left': 1213 + i * 40 + 'px',
            }).appendTo('#map');
            j++;
    	}
    }
    var pat10 = ['22', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];
    var j = 58;
    for(var i in pat10){
    	if(pat10[i]=='22'){
    		$('<div/>').attr('class', 'pat2').attr("id","qarer" +j).css({
                'top': 380 + 'px',
                'left': 1213 + i * 40 + 'px',
            }).appendTo('#map');
            j++;
    	}
    }
  levelplay();

}



