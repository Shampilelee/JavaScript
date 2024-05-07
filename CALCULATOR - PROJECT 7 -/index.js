
// CALCULATOR PROGRAM

const display =  document.getElementById("display");

function append_To_Display(user_input) {
    display.value += user_input;
}

function clear_Display() {
    display.value = "";
}

function calculate() {
    
    // !! WARNING !!
    /*
        EXECUTING JS FROM A STRING IS A ENORMOUS SECURITY RISK.
        IT IS FAR TOO EASY FOR A BAD ACTOR(HACKER), 
        TO RUN ARBITRARY CODE WHEN YOU USE [eval()].

        ! NEVER USE [eval()] IN REAL LIFE PROJECT.
    */
    // eval(), TAKES A STRING(expression) AND EVALUATE IT.
    
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}





