// 1.random computerchoice *
// 2.create an array with rock,paper,scissors
//3. use math.random to getcomputerchoice randomly
// Function getrandom(array) {
 // return Math.floor(Math.random() * array.lenghth *

 //4. get user input : 
 //let result = text.toLowerCase();
 //5. compare to computerchoice
 // if players win + 1, if not -1
 //if === then both +1

// 
let pc_input, user_input;
let pc_final_score, player_final_score;


function get_pc_choice(pc) {
    let array = ["rock","paper","scissors"];
     pc_input = array[Math.floor(Math.random()*array.length)];
    return pc_input;
}

function get_user_choice(user) {
    user = prompt("Please type your input : ");
    user_input = user.toLowerCase();
    return user_input;
}
function play()
    {   
    get_pc_choice(),
    get_user_choice();
}

function gamestart(play_5_game)
{   
for (let i=0,pc_score = 0,player_score = 0;i<5;i++)
{
    play();

    if (pc_input === user_input){
        pc_score += 0;
        player_score +=0;
        console.log(pc_input,user_input);
        console.log(pc_score,player_score);
        console.log("Pc score is " + pc_score)
        console.log("Pc score is " + player_score)
    }
    else if (pc_input === "rock" && user_input === "paper" || pc_input === "scissors" && user_input === "rock" || pc_input==="paper" && user_input === "scissors")
    {
        player_score += 1;
        console.log(pc_input,user_input);
        console.log(pc_score,player_score);
        console.log("Pc score is " + pc_score)
        console.log("Pc score is " + player_score)
    }
    else if ( pc_input === "rock" && user_input === "scissors" || pc_input === "paper" && user_input === "rock" || pc_input === "scissors" && user_input === "paper" ) {
        pc_score += 1;
        console.log(pc_input,user_input);
        console.log(pc_score,player_score);
        console.log("Pc score is " + pc_score)
        console.log("Pc score is " + player_score)
    }
    pc_final_score = pc_score;
    }
    
    
}


//
//pc : paper ---> user : rock -> pc +1
   // paper ---> user : scissors ---> user + 1


//pc : rock ---> u : paper -> u + 1
 //   rock ----> u : scissors -> pc + 1
//
 //   scissors --> p : paper ---> pc +1
//
 //   scissors ---> p : rock --> u + 1
//
