document.getElementById('inputValue').addEventListener('input',function(e){
    let inputValue = e.target.value;
    const Tbsp = 15;
    const tsp = 5;
document.getElementById('fourthCupOutput').innerHTML = (Number(inputValue * Tbsp / 60));
document.getElementById('halfCupOutput').innerHTML = (Number(inputValue * Tbsp / 118));
document.getElementById('thirdCupOutput').innerHTML = (Number(inputValue * Tbsp / 177));
document.getElementById('cupOutput').innerHTML = (Number(inputValue * Tbsp / 237));

document.getElementById('fourthCupOutput').innerHTML = (Number(inputValue * tsp / 60));
document.getElementById('halfCupOutput').innerHTML = (Number(inputValue * tsp / 118));
document.getElementById('thirdCupOutput').innerHTML = (Number(inputValue * tsp / 177));
document.getElementById('cupOutput').innerHTML = (Number(inputValue * tsp / 237));
});
       



  