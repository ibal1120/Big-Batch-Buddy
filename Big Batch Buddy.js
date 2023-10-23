document.getElementById('inputValue').addEventListener('input',function(e){
    let inputValue = e.target.value;
    const Tbsp = 15;
    const tsp = 5;
document.getElementById('fourthCupOutput').innerHTML = Math.round(Number(inputValue * Tbsp / 60));
document.getElementById('halfCupOutput').innerHTML = Math.round(Number(inputValue * Tbsp / 118));
document.getElementById('thirdCupOutput').innerHTML = Math.round(Number(inputValue * Tbsp / 177));
document.getElementById('cupOutput').innerHTML = Math.round(Number(inputValue * Tbsp / 237));

document.getElementById('fourthCupOutput').innerHTML = Math.round(Number(inputValue * tsp / 60));
document.getElementById('halfCupOutput').innerHTML = Math.round(Number(inputValue * tsp / 118));
document.getElementById('thirdCupOutput').innerHTML = Math.round(Number(inputValue * tsp / 177));
document.getElementById('cupOutput').innerHTML = Math.round(Number(inputValue * tsp / 237));
});
       



  