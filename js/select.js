

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

}



