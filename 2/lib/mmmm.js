var secretNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;

function checkGuess()
{   
    var userGuess = document.getElementById("guess").value;
    if (isNaN(userGuess) || userGuess.trim() === '')
    {   
        document.getElementById("result").innerHTML = "呃。。。";
        return;
    }

    userGuess = Number(userGuess);
    attempts++;

    if (userGuess == secretNumber)
    {   
        document.getElementById("result").innerHTML = "尝试了 " + attempts + " 次之后，你猜到了" + secretNumber + "。";
    }
    else if (userGuess < secretNumber)
    {   
        document.getElementById("result").innerHTML = userGuess + " 太低了。继续。";
    }
    else if (userGuess > secretNumber)
    {   
        document.getElementById("result").innerHTML = userGuess + " 太高了。继续。";
    }
 
    document.getElementById("guess").value = "";
}

document.getElementById('guess').addEventListener('keypress', function(event)
{   
    if (event.keyCode === 13)
    {   
        event.preventDefault();
        checkGuess();
    }
});

document.getElementById('trigger').addEventListener('click', function()
{   
    document.getElementById('game-container').style.display = 'block';
});