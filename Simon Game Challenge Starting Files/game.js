let buttonColours=["red", "blue", "green" , "yellow"];
let gamePattern=[];
let userClickedPattern=[];
let started=false;
let level=0;

$(".btn").click(function(){
    let userChosenColour=$(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

$(document).keydown(function(){
    if(!started){
        $("#level-title").text("Level " + level);
        nextSecuence();
        started=true;
    }
})

function nextSecuence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    let randomNumber=Math.floor(Math.random()*4);
    let randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name){
    let audio=new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("Success");
        if(userClickedPattern.length===gamePattern.length){
            setTimeout(function(){
                nextSecuence();
            }, 1000);
        }
    }else{
        console.log("Wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart ");
        startOver();
    }
}

function startOver(){
    level=0;
    gamePattern=[];
    started=false;
}