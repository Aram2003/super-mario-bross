$(document).ready(function() {

     var d = $("<div/>").appendTo("body").attr("id", "menu");
     var b = $("<button/>").appendTo("#menu").text("START").attr("id", "da");
     var i = $("<img/>").appendTo("#menu").attr("src", "images/menu.jpg").attr("class", "mario");
     d.prepend(i);
     d.prepend(b);
     d.css({
         "width": "600px",
         "height": "400px"
     });
     i.css({
         "height": "250px",
         "width": "355px",
         "margin-right": "500px"
     });
     b.css({
         "margin-left": "145px",
         "display":"inline-block"
     })
     $("#da").click(function() {
         $("#menu").empty();
         game();
     });  

});




function game() {


    $("#map").empty();
    $('#map').css({
        "position": "relative",
        "background-image": "url(images/download.png)",
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


    var m1 = new Mario();

    var arr = ['0', '0', '0', '1', '1', '1', '0', '0', '0', '0', '0', '0', '0', '0', '0'];

    var j = 0
    for (var i in arr) {
        if (arr[i] == '1') {
            console.log(i);
            $('<div/>').attr('class', 'collision').attr('id', 'hark' + j).css({
                'top': 350 + 'px',
                'left': 200 + i * 40 + 'px',
            }).appendTo('#map');
            j++;
        }
    }


    var pipe = ['0', '0', '2', '0', '0', '0', '0', '0', '2', '0', '0', '0', '0', '0', '2'];
    var j = 0;
    for (var i in pipe) {
        if (pipe[i] == '2') {
            console.log(i);
            $('<div/>').attr('class', 'pipe').attr("id", "pipe" + j).css({
                'top': 385 + 'px',
                'left': 830 + i * 43 + 'px',
            }).appendTo('#map');
            j++;
        }
    }
    var j = 0;
    var bird = ['0', '0', '3', '0', '0', '0', '0', '0', '3', '0', '0', '0', '0', '0', '0'];
    for (var i in bird) {
        if (bird[i] == '3') {
            console.log(i);
            $('<div/>').attr('class', 'bird').attr('id', 'enemy' + j).css({
                'top': 460 + 'px',
                'left': 970 + i * 40 + 'px',
            }).appendTo('#map');
            j++;
        }
    }

    var j = 0
    var coin = ['0', '0', '0', '4', '4', '4', '0', '0', '0', '0', '0', '0', '0', '0', '0'];
    for (var i in coin) {
        if (coin[i] == '4') {
            console.log(i);
            $('<div/>').attr('class', 'coin').attr('id', 'coin' + j).css({
                'top': 320 + 'px',
                'left': 205 + i * 40 + 'px',
            }).appendTo('#map');
            j++;
        }
    }
    var victory = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '5'];
    for (var i in victory) {
        if (victory[i] == '5') {
            console.log(i);
            $('<div/>').attr('class', 'cup').attr("id", "cup").css({
                'top': 410 + 'px',
                'left':1360 + i*40 +'px'
            }).appendTo('#map');
        }
    }
    var life = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '6'];
    for (var i in life) {
        if (life[i] == '6') {
            console.log(i);
            $('<div/>').attr('class', 'life').css({
                'top': 10 + 'px',
                'left': 1370 + i * 40 + 'px',
            }).appendTo('#map');
        }
    }
    var cuant = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '7'];
    for (var i in cuant) {
        if (cuant[i] == '7') {
            console.log(i);
            $('<div/>').attr('class', 'cuant').css({
                'top': 10 + 'px',
                'left': 1280 + i * 40 + 'px',
            }).appendTo('#map');
        }
    }

    var collision = ['9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9',
        '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9'
        , '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9', '9','9', '9', '9', '9', '9', '9','9','9'

    ];

    for (var i in collision) {
        if (collision[i] == '9') {
            $('<div/>').attr('class', 'collision').attr('id', 'collision' + i).css({
                'top': 500 + 'px',
                'left': i * 40 + 'px',
            }).appendTo('#map');
        }
    }
    var coinscore = ['10', '0', '0', '0', '0', '0', '0'];
    for (var i in coinscore) {
        if (coinscore[i] == '10') {
            $('<div/>').attr('class', 'coinscore').css({
                'top': 70 + 'px',
                'left': 1950 + i * 40 + 'px',
            }).appendTo("#map");
        }
    }
    var cb = ['11', '0', '0', '0', '0', '0', '0'];
    for (var i in cb){
        if(cb[i] == '11'){
            $('<div/>').attr('class','cb').css({
              'top':70+ 'px',
              'left': 1860 + i*40 +'px'
            }).appendTo("#map");
        }
    }

    var cc = ['12','12','12','0','0','0','0'];
    var j =3;
    for (var i in cc){
        if(cc[i] == '12'){
            $('<div/>').attr('class','coin').attr("id","coin"+j)
                .css({
              'top':470+ 'px',
              'left': 660 + i*40 +'px'
            }).appendTo("#map");
                j++;
        }
    }
    var cd = ['13','13','13','13','0','0','0'];
    var j =6;
    for (var i in cd){
        if(cd[i] == '13'){
            $('<div/>').attr('class','coin').attr("id","coin"+j)
                .css({
              'top':470+ 'px',
              'left': 1620 + i*40 +'px'
            }).appendTo("#map");
                j++;
        }
    }
    var hy = ['14','0','0','0'];
    var j= 3;
    for (var i in hy){
        if(hy[i] == '14'){
            $('<div/>').attr('class','collision').attr("id","hark"+j)
                .css({
              'top':260+ 'px',
              'left': 360 + i*40 +'px'
            }).appendTo("#map");
            j++;
        }
    }
   gamestart();
}