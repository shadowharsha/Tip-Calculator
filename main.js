"usestrict";

// const calculator = document.querySelector(".calculator");
const reset = document.querySelector(".reset");
const displayTip = document.querySelector(".display-tip");
const displayBill = document.querySelector(".display-bill");
const tipButtons = document.querySelectorAll(".low-tip button, .high-tip button");
const custom = document.querySelector(".custom");
let chosenTip = +custom.innerText;

// reset
reset.addEventListener("click", ()=>{
    displayBill.textContent = "$0.00";
    displayTip.textContent = "$0.00";
});

// when enter key is pressed
custom.addEventListener("keypress", (e)=>{
    if(e.key === "Enter"){
        chosenTip = custom.value;
        calculate();
    }    
})

// when tip buttons are pressed
tipButtons.forEach(element => {
    element.addEventListener("click", ()=>{
    chosenTip = +element.innerText.slice(0,-1);
    calculate();
  })
})

// function calc
function calculate(){

    // get bill
    const initialBill = document.querySelector(".initial-bill-amount");
    let bill = +initialBill.value;

    // get no. of people
    const people = document.querySelector(".people-count");
    let totalPeople = +people.value;

    // error msg
    const errorMsg = document.querySelector(".noPeople");
    if(totalPeople === 0){
        errorMsg.classList.add("errorByZero");
        people.style.border = "0.5px solid crimson";
        return;
    }
    else{
        errorMsg.classList.remove("errorByZero");
        people.style.border = "none";
    }

    // final calculation
    let finalBillPerPerson = ((bill + bill * chosenTip * 0.01) / totalPeople).toFixed(2);
    let tipPerPerson = ((bill * chosenTip * 0.01) / totalPeople).toFixed(2);
    displayTip.innerText = tipPerPerson;
    displayBill.innerText = finalBillPerPerson;
    console.log(finalBillPerPerson);
    console.log(tipPerPerson);
}



