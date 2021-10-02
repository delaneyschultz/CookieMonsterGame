'strict';

function startGame(){
    var x = 90;
    var countDown = setInterval(timer,1000);

    function timer()
    {
        x = x - 1;
        if (x <= 0)
        {
            var modal = document.getElementById("myModal");
            document.getElementById("content1").innerHTML = "Goals scored: " + document.getElementById("num").value
            document.getElementById("content2").innerHTML = "Cookies earned: " + document.getElementById("num3").value
            if (Number(document.getElementById("num").value) > Number(localStorage.getItem("Goals Scored"))){
                localStorage.setItem("Goals Scored", document.getElementById("num").value);
            }
            if (Number(document.getElementById("num3").value) > Number(localStorage.getItem("Cookies Earned"))){
                localStorage.setItem("Cookies Earned", document.getElementById("num3").value);
            }
            document.getElementById("content3").innerHTML = "Goals scored: " + localStorage.getItem("Goals Scored")
            document.getElementById("content4").innerHTML = "Cookies earned: " + localStorage.getItem("Cookies Earned")

            modal.style.display = "block";
            var span = document.getElementsByClassName("close")[0];
            span.onclick = function() {
                modal.style.display = "none";
                startGame();
            }
            clearInterval(countDown);
            return;
        }
        document.getElementById("timer").innerHTML= x + " secs";
    }
}


startGame();


function firstProblem(){

    let first = Math.floor(Math.random() * 10);
    let second = Math.floor(Math.random() * 10);
    if (Number(document.getElementById("count").value) == 0){
        document.getElementById("prob").innerHTML = String(first) + " + " + String(second);
    }
    else if(Number(document.getElementById("count").value) == 1){
        document.getElementById("prob").innerHTML = String(first) + " - " + String(second);
    }
    else{
        document.getElementById("prob").innerHTML = String(first) + " x " + String(second);
    }
}

function submit1() {
    var problem = document.getElementById("prob").innerHTML;
    var num1 = Number(problem[0]);
    var num2 = Number(problem[4]);
    var answer = num1+num2;

    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);


    if (parseInt(document.getElementById("a").value, 10) == answer) {
        document.getElementById("a").value = "";
        document.getElementById("prob").innerHTML = x + " + " + y;
        count = count + 1;
        document.getElementById("cookies").innerHTML = "Cookies Collected: " + count;
        var c = Number(document.getElementById("num3").value);
        c = c+ 1;
        document.getElementById("num3").value = c;
        if (window.getComputedStyle(document.getElementById("cookie1")).display == "none"){
            document.getElementById("cookie1").style.display = "block";

        }
        else if(window.getComputedStyle(document.getElementById("cookie2")).display === "none"){
            document.getElementById("cookie2").style.display = "block";

        }
        else if(window.getComputedStyle(document.getElementById("cookie3")).display === "none"){
            document.getElementById("cookie3").style.display = "block";
            var count = Number(document.getElementById("count").value);
            count = count + 1;
            document.getElementById("count").value = count;
            setTimeout(function(){
                document.getElementById("correct").innerHTML = "Shoot";
            },1000)

        }


    } else {

        document.getElementById("a").value = "";
        document.getElementById("prob").innerHTML = x + " + " + y;

    }
}

function submit2() {
    var problem = document.getElementById("prob").innerHTML;
    var num1 = Number(problem[0]);
    var num2 = Number(problem[4]);
    var answer = num1-num2;

    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);


    if (parseInt(document.getElementById("a").value, 10) == answer) {
        document.getElementById("a").value = "";
        document.getElementById("prob").innerHTML = x + " - " + y;
        count = count + 1;
        document.getElementById("cookies").innerHTML = "Cookies Collected: " + count;
        var c = Number(document.getElementById("num3").value);
        c = c+ 1;
        document.getElementById("num3").value = c;
        if (window.getComputedStyle(document.getElementById("cookie1")).display == "none"){
            document.getElementById("cookie1").style.display = "block";

        }
        else if(window.getComputedStyle(document.getElementById("cookie2")).display === "none"){
            document.getElementById("cookie2").style.display = "block";

        }
        else if(window.getComputedStyle(document.getElementById("cookie3")).display === "none"){
            document.getElementById("cookie3").style.display = "block";
            var count = Number(document.getElementById("count").value);
            count = count + 1;
            document.getElementById("count").value = count;
            setTimeout(function(){
                document.getElementById("correct").innerHTML = "Shoot";
            },1000)

        }


    } else {

        document.getElementById("a").value = "";
        document.getElementById("prob").innerHTML = x + " - " + y;

    }
}

function submit3() {
    var problem = document.getElementById("prob").innerHTML;
    var num1 = Number(problem[0]);
    var num2 = Number(problem[4]);
    var answer = num1*num2;

    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);


    if (parseInt(document.getElementById("a").value, 10) == answer) {
        document.getElementById("a").value = "";
        document.getElementById("prob").innerHTML = x + " x " + y;
        count = count + 1;
        document.getElementById("cookies").innerHTML = "Cookies Collected: " + count;
        var c = Number(document.getElementById("num3").value);
        c = c+ 1;
        document.getElementById("num3").value = c;
        if (window.getComputedStyle(document.getElementById("cookie1")).display == "none"){
            document.getElementById("cookie1").style.display = "block";

        }
        else if(window.getComputedStyle(document.getElementById("cookie2")).display === "none"){
            document.getElementById("cookie2").style.display = "block";

        }
        else if(window.getComputedStyle(document.getElementById("cookie3")).display === "none"){
            document.getElementById("cookie3").style.display = "block";
            var count = Number(document.getElementById("count").value);
            count = count + 1;
            document.getElementById("count").value = count;
            setTimeout(function(){
                document.getElementById("correct").innerHTML = "Shoot";
            },1000)

        }


    } else {

        document.getElementById("a").value = "";
        document.getElementById("prob").innerHTML = x + " x " + y;

    }
}

function go(){
    if (Number(document.getElementById("count").value) == 0){
        submit1();
    }
    else if(Number(document.getElementById("count").value) == 1){
        submit2();
    }
    else{
        submit3();
    }
}






var createApp = function(canvas) {


    var monster = new Image();
    var cookie = new Image();
    var clicked = false;
    var clicked2 = false;
    var clicked3 = false;
    var clicked4 = false;
    var clicked5 = false;
    var correct = false;
    var turn_around = false;
    var c = canvas.getContext("2d");


    document.getElementById("kick1").onclick = function(){
        clicked = true;
        var rand = String(Math.floor(Math.random() * 3) + 1);
        document.getElementById("rnd").value = rand;
        loop();
    }
    document.getElementById("kick2").onclick = function(){
        clicked2 = true;
        var rand = String(Math.floor(Math.random() * 3) + 1);
        document.getElementById("rnd").value = rand;
        loop2();
    }
    document.getElementById("kick3").onclick = function(){
        clicked3 = true;
        var rand = String(Math.floor(Math.random() * 3) + 1);
        document.getElementById("rnd").value = rand;
        loop3();
    }
    document.getElementById("kick4").onclick = function(){
        clicked4 = true;
        var rand = String(Math.floor(Math.random() * 3) + 1);
        document.getElementById("rnd").value = rand;
        loop4();
    }
    document.getElementById("kick5").onclick = function(){
        clicked5 = true;
        var rand = String(Math.floor(Math.random() * 3) + 1);
        document.getElementById("rnd").value = rand;
        loop5();
    }


    var x1 = 460;
    var x2 = 480;
    var x_m = 460;
    var y_m = 350;
    var y2 = 350;
    var stop = false;



    function init() {
        monster.src = 'https://i.pinimg.com/originals/79/8e/01/798e014e9faca457001cfd277ea425e5.png';
        cookie.src = 'https://media0.giphy.com/media/xUPGcKMDiPWDDL90uQ/giphy.gif';
        begin()
    }


    function begin() {
        c.clearRect(0, 0, canvas.width, canvas.height);
        window.requestAnimationFrame(begin);
        if (document.getElementById("correct").innerHTML == "Shoot") {
            c.drawImage(cookie, 480, 350, 75, 75);
            c.drawImage(monster, 460, 80, 150, 150);

            document.getElementById("cookie1").style.display = "none"
            document.getElementById("cookie2").style.display = "none"
            document.getElementById("cookie3").style.display = "none"
        } else {
            c.drawImage(monster, x1, 80, 150, 150);
            if (stop == false) {
                if (turn_around == false) {
                    x1 = x1 + 5;
                } else {
                    x1 = x1 - 5;
                }
            }
        }
        if (x1 == 525 && turn_around == false) {
            turn_around = true;
        }
        if (x1 == 350 && turn_around == true) {
            turn_around = false;
        }
    }

    function shoot1() {

        if (clicked == true) {
            c.clearRect(0,0, canvas.width,canvas.height);
            var intRnd = Number(document.getElementById("rnd").value);
            if (x2 == 200) {
                stop = true;
                clicked=false;
                window.requestAnimationFrame(shoot1);
                c.drawImage(monster, x_m, 90, 150, 150);
                c.drawImage(cookie, x2, y2, 75, 75);
                setTimeout(function go(){
                    x2 = 480;
                    x_m = 460;
                    y2 = 350;
                    document.getElementById("correct").innerHTML = "No Shot";},2000)
                if (x_m == 180){
                    var score2 = Number(document.getElementById("num2").value);
                    score2 = score2 + 1;
                    document.getElementById("cm").innerHTML = "Cookie Monster: " + score2;
                    document.getElementById("num2").value = score2;

                }
                else{
                    var score = Number(document.getElementById("num").value);
                    score = score + 1;
                    document.getElementById("player").innerHTML = "Player: " + score;
                    document.getElementById("num").value = score;


                }
            }
            else{
            x2 = x2 - 1;
            y2 = y2 - 1.05;

            if (intRnd == 1) {
                x_m = x_m + 1;
            } else if (intRnd == 2) {
                x_m = 460;
            } else if (intRnd == 3) {
                x_m = x_m - 1;
            }

            window.requestAnimationFrame(shoot1);
            c.drawImage(monster, x_m, 90, 150, 150);
            c.drawImage(cookie, x2, y2, 75, 75);
            }


        }



    }

    function shoot2() {

        if (clicked2 == true) {
            c.clearRect(0,0, canvas.width,canvas.height);
            var intRnd = Number(document.getElementById("rnd").value);
            if (x2 == 750) {
                stop = true;
                clicked2=false;
                window.requestAnimationFrame(shoot2);
                c.drawImage(monster, x_m, 90, 150, 150);
                c.drawImage(cookie, x2, y2, 75, 75);
                setTimeout(function go(){
                    x2 = 480;
                    x_m = 460;
                    y2 = 350;
                    document.getElementById("correct").innerHTML = "No Shot";},2000)
                if (x_m == 730){
                    var score2 = Number(document.getElementById("num2").value);
                    score2 = score2 + 1;
                    document.getElementById("cm").innerHTML = "Cookie Monster: " + score2;
                    document.getElementById("num2").value = score2;
                }
                else{
                    var score = Number(document.getElementById("num").value);
                    score = score + 1;
                    document.getElementById("player").innerHTML = "Player: " + score;
                    document.getElementById("num").value = score;

                }
            }
            else{
                x2 = x2 + 1;
                y2  = y2 - 1.1;

                if (intRnd == 1) {
                    x_m = x_m + 1;
                } else if (intRnd == 2) {
                    x_m = 460;
                } else if (intRnd == 3) {
                    x_m = x_m - 1;
                }

                window.requestAnimationFrame(shoot2);
                c.drawImage(monster, x_m, 90, 150, 150);
                c.drawImage(cookie, x2, y2, 75, 75);
            }


        }



    }

    function shoot3() {

        if (clicked3 == true) {
            c.clearRect(0,0, canvas.width,canvas.height);
            var intRnd = Number(document.getElementById("rnd").value);
            if (x2 == 760) {
                stop = true;
                clicked3=false;
                window.requestAnimationFrame(shoot3);
                c.drawImage(monster, x_m, 90, 150, 150);
                c.drawImage(cookie, x2, y2, 75, 75);
                setTimeout(function go(){
                    x2 = 480;
                    x_m = 460;
                    y2 = 350;
                    document.getElementById("correct").innerHTML = "No Shot";},2000)
                if (x_m == 740){
                    var score2 = Number(document.getElementById("num2").value);
                    score2 = score2 + 1;
                    document.getElementById("cm").innerHTML = "Cookie Monster: " + score2;
                    document.getElementById("num2").value = score2;
                }
                else{
                    var score = Number(document.getElementById("num").value);
                    score = score + 1;
                    document.getElementById("player").innerHTML = "Player: " + score;
                    document.getElementById("num").value = score;


                }
            }
            else{
                x2 = x2 + 1;
                y2  = y2 - 0.8;

                if (intRnd == 1) {
                    x_m = x_m + 1;
                } else if (intRnd == 2) {
                    x_m = 460;
                } else if (intRnd == 3) {
                    x_m = x_m - 1;
                }

                window.requestAnimationFrame(shoot3);
                c.drawImage(monster, x_m, 90, 150, 150);
                c.drawImage(cookie, x2, y2, 75, 75);
            }


        }



    }


    function shoot4() {

        if (clicked4 == true) {
            c.clearRect(0,0, canvas.width,canvas.height);
            var intRnd = Number(document.getElementById("rnd").value);
            if (x2 == 200) {
                stop = true;
                clicked4=false;
                window.requestAnimationFrame(shoot4);
                c.drawImage(monster, x_m, 90, 150, 150);
                c.drawImage(cookie, x2, y2, 75, 75);
                setTimeout(function go(){
                    x2 = 480;
                    x_m = 460;
                    y2 = 350;
                    document.getElementById("correct").innerHTML = "No Shot";},2000)
                if (x_m == 180){
                    var score2 = Number(document.getElementById("num2").value);
                    score2 = score2 + 1;
                    document.getElementById("cm").innerHTML = "Cookie Monster: " + score2;
                    document.getElementById("num2").value = score2;
                }
                else{
                    var score = Number(document.getElementById("num").value);
                    score = score + 1;
                    document.getElementById("player").innerHTML = "Player: " + score;
                    document.getElementById("num").value = score;


                }
            }
            else{
                x2 = x2 - 1;
                y2  = y2 - 0.8;

                if (intRnd == 1) {
                    x_m = x_m + 1;
                } else if (intRnd == 2) {
                    x_m = 460;
                } else if (intRnd == 3) {
                    x_m = x_m - 1;
                }

                window.requestAnimationFrame(shoot4);
                c.drawImage(monster, x_m, 90, 150, 150);
                c.drawImage(cookie, x2, y2, 75, 75);
            }


        }



    }

    function shoot5() {

        if (clicked5 == true) {
            c.clearRect(0,0, canvas.width,canvas.height);
            var intRnd = Number(document.getElementById("rnd").value);
            if (y2 == 50) {
                stop = true;
                clicked5=false;
                window.requestAnimationFrame(shoot5);
                c.drawImage(monster, x_m, 90, 150, 150);
                c.drawImage(cookie, x2, y2, 75, 75);
                setTimeout(function go(){
                    x2 = 480;
                    x_m = 460;
                    y2 = 350;
                    document.getElementById("correct").innerHTML = "No Shot";},2000)
                if (x_m == 460){
                    var score2 = Number(document.getElementById("num2").value);
                    score2 = score2 + 1;
                    document.getElementById("cm").innerHTML = "Cookie Monster: " + score2;
                    document.getElementById("num2").value = score2;
                }
                else{
                    var score = Number(document.getElementById("num").value);
                    score = score + 1;
                    document.getElementById("player").innerHTML = "Player: " + score;
                    document.getElementById("num").value = score;

                }
            }
            else{
                y2  = y2 - 1;

                if (intRnd == 1) {
                    x_m = x_m + 1;
                } else if (intRnd == 2) {
                    x_m = 460;
                } else if (intRnd == 3) {
                    x_m = x_m - 1;
                }

                window.requestAnimationFrame(shoot5);
                c.drawImage(monster, x_m, 90, 150, 150);
                c.drawImage(cookie, x2, y2, 75, 75);
            }


        }



    }

    function loop(){
        setInterval(shoot1,200);
    }

    function loop2(){
        setInterval(shoot2,200);
    }

    function loop3(){
        setInterval(shoot3,200);
    }

    function loop4(){
        setInterval(shoot4,200);
    }
    function loop5(){
        setInterval(shoot5,200);
    }

    init();


};

window.onload = function() {
    var app = createApp(document.querySelector("canvas"));
    firstProblem();
};












