const RewardsList = ["Taxi", "Dozer", "Clown Van", "Trashmaster", "Barracks Semi", "Mixer", "Space Docker", "Tractor"]
const LevelsList = [25,50,75,100,200,300,500,1000]

/**
 * Function that returns the total number of AP acquired at the specified level  
 * @param {Number} level 
 * @returns {Number} total number of AP acquired at the specified level
 */
function arenaTotal(level){
    return 5*level**2 + 45*level 
}

/**
 * Function that returns how many hours of grind left based on the specified level and the specified amount of AP per hour 
 * @param {Number} APperHour 
 * @param {Number} currentLevel 
 * @returns {Number[]} array containing the hours left to grind for each reward
 */
function hoursLeft(APperHour, currentLevel){
    var hoursList=[]
    LevelsList.forEach((levelToReach)=>{
        hours = (arenaTotal(levelToReach)-arenaTotal(currentLevel))/APperHour;
        if(hours < 0) hours=0;
        hoursList.push(hours);
    });

    return hoursList
}

/**
 * Function that returns all the completion purcentages for all the rewards
 * @param {Number} currentLevel 
 * @returns {Number[]} array containing the purcentages of completions for each reward
 */
function purcentageCompleted(currentLevel){
    var purcentagesList = []
    LevelsList.forEach((levelToReach)=>{
        purcentage = (arenaTotal(currentLevel)/arenaTotal(levelToReach))*100
        if(purcentage>100) purcentage =100;
        purcentagesList.push(purcentage);
    });
    return purcentagesList;
}


function updateProgressBars() {
    var inputLevel = document.getElementById("inputLevel").value;
    var inputXP = document.getElementById("inputXP").value;
    const completionList = purcentageCompleted(inputLevel);
    const hoursLeftList = hoursLeft(inputXP,inputLevel);

    for(let i=0; i<RewardsList.length;i++){
        var progressBarName = "progressBar"+RewardsList[i]; 
        var progressBar = document.getElementById(progressBarName);
        progressBar.value = completionList[i];

        var purcentageSpanName = "purcentage"+RewardsList[i];
        var purcentageSpan = document.getElementById(purcentageSpanName);
        purcentageSpan.innerHTML = Math.round(completionList[i]*100)/100;

        var hoursLeftSpanName = "hours"+RewardsList[i];
        var hoursLeftSpan = document.getElementById(hoursLeftSpanName);
        hoursLeftSpan.innerHTML = Math.round(hoursLeftList[i]*100)/100;
    }
}