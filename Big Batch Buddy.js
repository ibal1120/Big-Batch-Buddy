document.getElementById('inputValue').addEventListener('input',function(e){
    let inputValue = e.target.value;
    const Tbsp = 15;
    const tsp = 5;
document.getElementById('fourthCupOutput').innerHTML = (Number(inputValue * Tbsp / 60)).toFixed(4);
document.getElementById('halfCupOutput').innerHTML = (Number(inputValue * Tbsp / 118)).toFixed(4);
document.getElementById('thirdCupOutput').innerHTML = (Number(inputValue * Tbsp / 177)).toFixed(4);
document.getElementById('cupOutput').innerHTML = (Number(inputValue * Tbsp / 237)).toFixed(4);

document.getElementById('fourthCupOutput').innerHTML = (Number(inputValue * tsp / 60)).toFixed(4);
document.getElementById('halfCupOutput').innerHTML = (Number(inputValue * tsp / 118)).toFixed(4);
document.getElementById('thirdCupOutput').innerHTML = (Number(inputValue * tsp / 177)).toFixed(4);
document.getElementById('cupOutput').innerHTML = (Number(inputValue * tsp / 237)).toFixed(4);
});
       



  