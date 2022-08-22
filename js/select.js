
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
    event.target.style.display = 'none'
    
    });
};

function addToSelect(element){
    
    const playerName = element.parentNode.parentNode.children[1].innerText
    namesArray.push(playerName)
    display(namesArray)

};


// calculator ------------------------------------
document.getElementById('btn-calculator').addEventListener('click', function(){
    const quantity = namesArray.length - 1;

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



