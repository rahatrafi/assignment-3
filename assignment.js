// feet to mile conversion
function feetToMile(feet){
    var mileCount = feet/5280;
    return mileCount;
}

// wood calculator for chair, table & bed
 function woodCalculator(chair, table, bed){
     var totalWood = chair*1 + table*3 + bed*5;
     return totalWood;
}

// brick calculator for floor
function brickCalculator(floor){
    if(floor>0 && floor<=10){
        var totalBrick = (floor*15)*1000; 
    }
    else if(floor>0 && floor<=20){
        var totalBrick = (((floor-10)*12)*1000) + (10*15*1000); 
    }
    else if(floor>0 && floor>20){
        var totalBrick = ((floor-20)*10)*1000 + ((20-10)*12*1000) + (10*15*1000); 
    }
    else{
        console.log("Invalid floor");
    }
    return totalBrick;
}

// shortest string finder
function tinyFriend(stringInput){
    var tinyString = stringInput[0];
    for (var i=0; i<stringInput.length; i++){
            var currentString = stringInput[i];
            if(currentString.length < tinyString.length){
                tinyString = currentString;
            }
    }
    return tinyString;
}