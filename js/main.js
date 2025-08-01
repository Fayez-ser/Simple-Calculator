
/* Number Status */
const state = {
    currentNum: '',
    previousNum: '',
    operation: null,
}

let calcScreen = document.getElementById('calc-screen');
let clearBtn = document.getElementById('clear-btn');
let equalBtn = document.getElementById('equal-btn');
let numberBtn = document.getElementsByClassName('num-btn');
let operationBtn = Array.from(document.getElementsByClassName('op-btn'));
let clickedBtnNum = Array.from(document.getElementsByClassName('num-btn'));

/* Numbers Storage in currentNum Property */
function appendNum(num) {
    state.currentNum = num;
}

/* Clear Screen Content */
function clearAll() {
    calcScreen.value = '';
}

/* Adding Operation and Updating CurrentNum */
function appendOperation (ope) {
    state.previousNum = state.currentNum;
    state.currentNum = '';
    state.operation = ope.innerText;
}

/* appending Keys Content To Screen */
function appendToScreen(target) {
    calcScreen.value += target.innerText;
}

/* Calculate The Result and Display it on The Screen*/
function calcResult(operation) {
    let previousNum = parseFloat(state.previousNum);
    let currentNum = parseFloat(state.currentNum);
            if(operation === "+") {
            result = previousNum + currentNum;
        }

        else if(operation === "-") {
                result = previousNum - currentNum;
        }

        else if(operation === "x") {
            result = previousNum * currentNum;
        }

        else if(operation === "/") {
            if(currentNum !== 0) {
                result = previousNum / currentNum;
            }
            else {
                result = "Impossible Operation";
            }
        }

        else {
            result = previousNum % currentNum;
        }
        calcScreen.value = result;
}


/* The Event of Click on Numbers Keys */
clickedBtnNum.forEach(btn => {
  btn.addEventListener("click", () => {
   appendToScreen(btn);
   appendNum(btn.innerText);   
});
});

/* The Event of Click on The Clear Key */
clearBtn.addEventListener("click",clearAll);

/* The Event of Click on any Operation Keys */
operationBtn.forEach(op => {
  op.addEventListener("click", () => { 
    appendOperation(op);
    appendToScreen(op);
});
});

/* The Event of Click on The Equal Key */
equalBtn.addEventListener("click", () => calcResult(state.operation));