
const namesArray =[];

function display(names){
    // console.log(names)

    const tableBody = document.getElementById('players-name');
    tableBody.innerHTML = '';
    for( let i = 0 ; i < names.length; i++){

        // if(names.length == 6){
        //     alert('Do not Select more than 5 players');
        //     return
        // }
        const index = names[i];

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th>${i + 1}</th>
            <td>${index}</td>
        `;
        tableBody.appendChild(tr)
        
    };

}

function addToSelect(element){
    
    //  console.log(element.parentNode.parentNode.children[1].innerText)
    const playerName = element.parentNode.parentNode.children[1].innerText
    namesArray.push(playerName)
    display(namesArray)

};


// calculator ------------------------------------
document.getElementById('btn-calculator').addEventListener('click', function(){
    const quantity = namesArray.length;

   const perPlayerCoast = getInputFieldValueById('player-field')
    const allPlayersCoast = quantity * perPlayerCoast ;

    setUpdateValue('player-expenses',allPlayersCoast)


    //  console.log(allPlayersCoast, playerExpenses)
});

//calculator total--------------------------
document.getElementById('btn-calculator-total').addEventListener('click', function(){

const managerCoast = getInputFieldValueById('manager-field');
const coachCoast = getInputFieldValueById('coach-field');

const currentAllPlayersCoast = getTextElementValueById('player-expenses')

const sumTotalCoast = managerCoast + coachCoast + currentAllPlayersCoast;


setUpdateValue('total',sumTotalCoast)



})



