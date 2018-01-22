const url = "http://pb-api.herokuapp.com/bars";
fetch(url).then(a => a.json()).then(function(a) {
    var b = document.getElementById("pg");
    for (i = 0; i < a.bars.length; i++) {
        var c = "progress" + i,
            d = new Option(c, c);
        b.options.add(d);
        var e = new ldBar(".progress" + i, {
            stroke: "#0000FF",
            "stroke-height": 5,
            preset: "circle",
            value: 0
        });

        e.set(a.bars[i]);
    }
    for (i = i+1; i < 7; i++)
    {
    	var x = "progress" + i;
    	x.style.display = "none";
    }
    return a
}).then(function(a) {
    var b = document.getElementById("pgbuttons");
    for (localStorage.setItem("limit", a.limit), i = 0; i < a.buttons.length; i++) {
        var c = document.createElement("div");
        c.setAttribute("class", "col-sm"), c.innerHTML = "<input type='button' class='btn btn-md btn-block btn-primary' onclick=process(" + a.buttons[i] + ") value='" + a.buttons[i] + "'/></div>", b.appendChild(c)
    }
}).catch(function(a) {
    console.log(a)
});

function process(a) {
    var b = document.getElementById("pg"),
        c = b.options[b.selectedIndex].value,
        d = document.querySelector("."+c+" .ldBar-label").innerHTML,
        e = parseInt(d) + parseInt(a),
        f = localStorage.getItem("limit");
    if (0 <= e && f >= e) {
        document.getElementById(c).innerHTML = "";
        var g = new ldBar("." + c, {
            stroke: 100 > e ? "#0000FF" : "#FF0000",
            "stroke-height": 5,
            preset: "circle",
            value: 0
        });
        g.set(parseInt(d) + parseInt(a))
    }
}