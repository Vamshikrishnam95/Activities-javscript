//get inputs 
const team1_name = document.querySelector("#team1_name");
const team1_score = document.querySelector("#team1_score");
const team2_name = document.querySelector("#team2_name");
const team2_score = document.querySelector("#team2_score");
var errormsg = document.getElementById("errormsg");
const resultBtn = document.querySelector("#result");

//to caculate the  result
function calculateResut(){
    
    const team1NameValue = team1_name.value;
    const team1ScoreValue = team1_score.value;
    const team2NameValue = team2_name.value;
    const team2ScoreValue = team2_score.value;

    
    //var checkNumbers = /[0-9]/g;
    var checkNumbers = /\d/g;
    var checkStrings = /\w/g;
    var scorepattern = /^[0-9 ]{1,3}[\/][0-9]{1,2}$/g;

    var scores = /[0-9]{1,3}/g;
    
    var score1match = team1ScoreValue.match(scorepattern);
   var score2match = team2ScoreValue.match(scorepattern);
    //To check all mandatory fields
    if(team1NameValue.length == 0 || team1ScoreValue.length == 0 || team2NameValue.length == 0 || team2ScoreValue.length == 0){
        
        errormsg.innerHTML="*All fields mandtory";
        errormsg.className = "errors";
        return false;
    }

    //To check team names are same
    if(team1NameValue === team2NameValue){
      
        errormsg.innerHTML= "Invalid input! Please enter differnt team names";
        errormsg.className = "errors";
        return false;
    }

    //To check  numbers present in team name
   if(team1NameValue.match(checkNumbers) || team2NameValue.match(checkNumbers)){

        errormsg.innerHTML= "Do not enter numbers for team names!! Invalid input";
        errormsg.className = "errors";
        return false;
    }
   
    //To check team score pattern
    if(score1match == null || score2match == null){
        
        errormsg.innerHTML= " please enter score format (runs/wickets) eg: 150/3";
        errormsg.className = "errors";
        return false;
    }

    errormsg.innerHTML = "";
    errormsg.className="errorm"
    //calculate winner
    var team1score;
    var team1wickets;
    var team2score;
    var team2wickets;

   var score1 = team1ScoreValue.match(scores);
      score1.forEach( (score,index,scores) => {
          team1score = scores[0];
          team1wickets = scores[1];
          
                    });

    var score2 = team2ScoreValue.match(scores);
      score2.forEach( (score,index,scores) => {
          team2score = scores[0];
          team2wickets = scores[1];
          
                    });

                    if(team1score > team2score){
                        errormsg.className="errorm"
                    errormsg.innerHTML = team1NameValue + ' won by ' + (team1score-team2score)+ ' runs';
                    }
                    else if(team2score > team1score){
                      
                        errormsg.innerHTML = team2NameValue + ' won by ' + (team2score-team1score)+ ' runs';
                        errormsg.className="errorm"
                    }
                    else{
                        errormsg.className="errorm"
                        errormsg.innerHTML = 'Match is drawn';
                    }
        
      
    
}
    

resultBtn.addEventListener('click', calculateResut);