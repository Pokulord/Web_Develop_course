

var TRIES_COUNT = 5;

let but_to_start_game = document.getElementById("start-but");
let but_to_end_game = document.getElementById("finish_game_but");
let but_to_send_digit = document.getElementById("send_but");
var GenInt = localStorage.getItem("cur_digit") ;


function isEmp(str)
{
    if (str.trim() == '') {return true}
    return false;
}


function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }



function isInteger(num) {
    return (num ^ 0) === num;
}


function StartGame()
{
    res = prompt("Введите имя");
    if (!isEmp(res))
    {
        but_to_start_game.classList.remove("gameisnot");
        but_to_start_game.classList.add("gameison");
        document.getElementById("gameblock").classList.remove("gameisnot");
        var WasGameStarted = localStorage.getItem("gamestart") === 'true';
        localStorage.setItem("gamestart" , !WasGameStarted);
        var GenInt = randomInteger(1, 10); 
        localStorage.setItem("cur_digit" , GenInt);
        console.log(`Загаданное число : ${GenInt}`)
        localStorage.setItem("tries_left" , TRIES_COUNT) ;
        document.querySelector(".tries-count").innerHTML = `Осталось попыток : ${TRIES_COUNT}`;

    }
    else
    {
        alert("Пустые значения не принимаются") ;
        return;
    }
    
}

function FinishGame()
{
    localStorage.setItem("gamestart", 'false');
    location.reload();
    localStorage.setItem("tries_left", null);
    localStorage.setItem("cur_digit", null) ;
}

function SendDigit()
{
    var GenInt = localStorage.getItem("cur_digit");
    var current_tries = localStorage.getItem("tries_left");
    var user_digit = document.querySelector("#user_digit_input").value ;
    if (!isEmp(user_digit) && isInteger(Number(user_digit)) )
    {
        if (user_digit === GenInt)
        {
            alert ("Поздравляем!!!!");
            FinishGame();
        }
        else
        {
            document.querySelector(".text-under-input").innerHTML = `Вводимое число ${(Number(user_digit) >  Number(GenInt)) ? "больше" : "меньше"}` ;
            localStorage.setItem("tries_left", current_tries - 1);
            document.querySelector(".tries-count").innerHTML = `Осталось попыток : ${current_tries - 1} ` ;
            if (Number(current_tries - 1 ) == 0)
                {
                    FinishGame();
                    return;
                }
        }
    }
    else
    {
        alert("Пустые значения не принимаются, равно как и не численные") ;
        return;
    }
}

function LoadGame()
{
    var cur_game_status = localStorage.getItem("gamestart") ;
    if (cur_game_status == null)
    {
        localStorage.setItem("gamestart", 'false');
        but_to_start_game.classList.remove("gameison");
        but_to_start_game.classList.add("gameisnot");
    }
    
    if (cur_game_status == "true" )
    {
        but_to_start_game.classList.remove("gameisnot");
        but_to_start_game.classList.add("gameison");
        document.getElementById("gameblock").classList.remove("gameisnot");
        console.log(`Загаданное число : ${GenInt}`);
        document.querySelector(".tries-count").innerHTML = `Осталось попыток : ${localStorage.getItem("tries_left")}`;
    }

    if (cur_game_status == "false")
    {
        but_to_start_game.classList.remove("gameison");
        but_to_start_game.classList.add("gameisnot");
        document.getElementById("gameblock").classList.add("gameisnot");
    }


    
}




but_to_start_game.addEventListener("click", StartGame ) ;
but_to_end_game.addEventListener("click", FinishGame);
but_to_send_digit.addEventListener("click", SendDigit) ;
document.addEventListener("DOMContentLoaded", LoadGame);



