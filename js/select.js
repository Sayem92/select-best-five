
const namesArray =[];

function display(names){

    const tableBody = document.getElementById('players-name');
    if(names.length == 6){
        alert('Do not select more than 5 players !!!')
        return;
    }
    
       tableBody.innerHTML = '';
    
    for( let i = 0 ; i < names.length; i++){
      
            const index = names[i];
            
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <th>${i + 1}</th>
                <td>${index}</td>
            `;
         
            tableBody.appendChild(tr)  
            
        };

};


// hide button-----------------------------
const allButton= document.getElementsByClassName('btn-select');

for( const button of allButton){
    button.addEventListener('click',function(event){
       
    // const btn1 = document.getElementById('btn-1').disabled = true;
    // const btn2 = document.getElementById('btn-2').disabled = true;
    // const btn3 = document.getElementById('btn-3').disabled = true;
    // const btn4 = document.getElementById('btn-4').disabled = true;
    // const btn5 = document.getElementById('btn-5').disabled = true;
    // const btn6 = document.getElementById('btn-6').disabled = true;
    // event.target.style.display = 'none'
  
   
    if(namesArray.length == 1 || namesArray.length == 2 || namesArray.length == 3 || namesArray.length == 4 || namesArray.length == 5 ){event.target.style.display = 'none'}
     
    
    });
 };


function addToSelect(element){
    
    const playerName = element.parentNode.parentNode.children[1].innerText
   
    if(namesArray.length < 5){
        namesArray.push(playerName)
        display(namesArray);
        return;
    }
    
};


// calculator ------------------------------------
document.getElementById('btn-calculator').addEventListener('click', function(){
    const quantity = namesArray.length;

   const perPlayerCoast = getInputFieldValueById('player-field');
    
   if(isNaN(perPlayerCoast)){
        alert('Please input a data!!');
         return}
    const allPlayersCoast = quantity * perPlayerCoast ;

    setUpdateValue('player-expenses',allPlayersCoast)

});



//calculator total--------------------------
document.getElementById('btn-calculator-total').addEventListener('click', function(){

const managerCoast = getInputFieldValueById('manager-field');
const coachCoast = getInputFieldValueById('coach-field');

    if(isNaN(managerCoast) || isNaN(coachCoast)){
        alert('Please input a data!!');
        return}
const currentAllPlayersCoast = getTextElementValueById('player-expenses')

const sumTotalCoast = managerCoast + coachCoast + currentAllPlayersCoast;


setUpdateValue('total',sumTotalCoast)


});



