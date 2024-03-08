const RewardsList = ["Taxi", "Dozer", "Clown Van", "Trashmaster", "Barracks Semi", "Mixer", "Space Docker", "Tractor"]
const LevelsList = [25,50,75,100,200,300,500,1000]

function arenaTotal(level){
    return 5*level**2 + 45*level 
}

function hoursLeft(APperHour, currentLevel){
    var hoursList=[]
    LevelsList.forEach((levelToReach)=>{
        hours = (arenaTotal(levelToReach)-arenaTotal(currentLevel))/APperHour;
        if(hours < 0) hours=0;
        hoursList.push(hours);
    });

    return hoursList
}

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
    /*var progressBar = document.getElementById("progressBar");
    progressBar.value = inputLevel;*/
    const completionList = purcentageCompleted(inputLevel);
    for(let i=0; i<RewardsList.length;i++){
        var progressBarName = "progressBar"+RewardsList[i]; 
        var progressBar = document.getElementById(progressBarName);
        progressBar.value = completionList[i];
        //console.log(completionList[i]);
    }
}