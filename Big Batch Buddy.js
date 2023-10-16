    // Retrieve input values
    function convert(){    
    let inputValue = 
        document.getElementById("inputValue").value;
    let fromUnit = 
        document.getElementById("fromUnit").value;
    let toUnit = 
        document.getElementById("toUnit").value; 
    // Convert the length based on the selected units
    
    const Tbsp = 15;
    const tsp = 5;
    const Cup = 237;
    const thirdCup = 177;
    const halfCup = 118;
    const fourthCup = 60;
   
    if(fromUnit === "Tbsp" && toUnit === "Cup"){
       result = Math.round((inputValue * Tbsp/ Cup));
    }else if(fromUnit === "Tbsp" && toUnit === "thirdCup"){
       result = Math.round((inputValue * Tbsp / thirdCup));
    }else if(fromUnit === "Tbsp" && toUnit === "halfCup"){
        result = Math.round((inputValue * Tbsp / halfCup));
    }else if(fromUnit === "Tbsp" && toUnit === "fourthCup"){
        result = Math.round((inputValue * Tbsp)/ fourthCup);
    }else if(fromUnit === "tsp" && toUnit === "Cup"){
        result = Math.round((inputValue * tsp / Cup));
    }else if(fromUnit === "tsp" && toUnit === "thirdCup"){
        result = Math.round((inputValue * tsp / thirdCup));
    }else if(fromUnit === "tsp" && toUnit === "halfCup"){
        result = Math.round((inputValue * tsp / halfCup));
    }else if(fromUnit === "tsp" && toUnit === "fourthCup"){
        result = Math.round((inputValue * tsp / fourthCup));
    }else{
        result = inputValue; // No conversion needed  
    //     // Display the result
        document.getElementById("result").innerHTML=result;
    }
    document.getElementById("result").innerHTML=result;
        }
    convert()
       



  