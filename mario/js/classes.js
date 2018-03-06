function Mario() {
    this.top = 380;
    this.left = 150;
    this.name = 'Mario';
    this.coin = 0;
    this.life = 3;
    this.icon = $("<div/>").attr("id", "mario")
        .css({
            "position": "absolute",
            "left": this.left + "px",
            "top": this.top + "px",
        }).appendTo("#map");
    this.addcoin = function() {
        this.coin += 1;
    }
    this.minlife = function() {
        this.life -= 1;
    }
     

}