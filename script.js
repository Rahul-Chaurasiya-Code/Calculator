let btns = document.querySelectorAll("button");
let input = document.getElementById("result");

for(let i=0; i<btns.length; i++){
    btns[i].addEventListener("click", () => {
        console.log("button clciked");

        const buttons = btns[i].textContent;

        if(buttons === "C"){
            clearResult();
        } else if(buttons === "="){
            ans();
        } else{
            appendValue(buttons);
        }
    })

    
};


function clearResult(){
    input.value = "";
};

function ans(){
    input.value = eval(input.value);
};

function appendValue(buttons){
    input.value += buttons;
};















// let btns = document.querySelectorAll("button");

// let input = document.getElementById("result");

// for(let i=0; i<btns.length; i++){
//     btns[i].addEventListener("click", () => {
//         const buttonValue = btns[i].textContent;

//         if(buttonValue ==="C"){
//             clearResult();
//         } else if(buttonValue ==="="){
//             calculateResult();
//         } else {
//             appendValue(buttonValue);
//         }
//     });
// };

// function clearResult(){
//     input.value = "";
// };

// function calculateResult(){
//     input.value = eval(input.value);
// };

// function appendValue(buttonValue) {
//    input.value +=  buttonValue
// };