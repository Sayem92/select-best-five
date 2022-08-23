/// ---------  value

function getInputFieldValueById(input){

    const inputField = document.getElementById(input);
    const inputFieldString = inputField.value;
    const amount = parseFloat(inputFieldString);
    return amount
}

//----------innweText
function getTextElementValueById(text){

    const allElement = document.getElementById(text);
    const allElementString = allElement.innerText;
    const element = parseFloat(allElementString);
    return element
};


//---------------- setValue 
function setUpdateValue(elementId,value){
    const previousElement = document.getElementById(elementId);
    previousElement.innerText = value;
};