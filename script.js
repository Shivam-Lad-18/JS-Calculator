var input_area_g = document.getElementById("Input_area");
var sub_area_g = document.getElementById("sub_input");
var keys = document.getElementById("keys");
keys.addEventListener('click', buttonpress);

const operators = new Set(["+","-","/","*"]);
function setActive(clickedButton) {
    // Remove 'active' class from all buttons
    document.querySelectorAll(".nav-link").forEach(button => button.classList.remove("active"));

    clickedButton.classList.add("active");
}
function toggleActiveClass(checkbox) {
    const navLink = checkbox.closest('.nav-link');
    if (checkbox.checked) {
        navLink.classList.add('active');
    } else {
        navLink.classList.remove('active');
    }
}

function toggleText(button) {
    const currentText = button.innerText;

    if (currentText === "DEG") {
        button.innerText = "GRAD";  // Change to Grad
    } else if (currentText === "GRAD") {
        button.innerText = "RAD";  // Change to Rad
    } else {
        button.innerText = "DEG";  // Change back to Degree
    }
}

function keepFocus() {
    const inputElement = document.getElementById("Input_area");

    // Keep the input focused even when clicking elsewhere
    inputElement.focus();

    // Ensure input is focused whenever the page is loaded or focus is lost
    setInterval(() => {
        inputElement.focus();
    }, 100); // Refocus every 100ms
}
window.onload = function () {
    document.getElementById("Input_area").focus();
}

function buttonpress(e) {
    let val = e.target.id.trim(); // Get clicked element's ID

    // console.log(typeof val, val);

    if (val === "b_space" || val === "b_space_cont") {
        // console.log("Backspace clicked");
        if (input_area_g.value.length > 0) {
            input_area_g.value = input_area_g.value.slice(0, -1); // Remove last character
        }
    }
    else if (val === "change_sign") {
        input_area_g.value = Number(input_area_g.value) * -1;
    }
    else if(operators.has(val)){
        // console.log("here");
        if(input_area_g.value === "" && sub_area_g.value === ""){
            sub_area_g.value="0*";
            return;
        }
        sub_area_g.value+=input_area_g.value+val;
        // input_area_g.value='';
    }
    else if(val === 'pi'){
        input_area_g.value = Math.PI;
    }
    else if(val === 'e'){
        input_area_g.value = Math.E;
    }
    else if (val === "clear") {
        input_area_g.value = '';
    }
    else if (val === "="){
        var exp = sub_area_g.value + input_area_g.value;
        input_area_g.value = eval(exp);
        sub_area_g.value='';
    }
    else if (val === "."){
        if(input_area_g.value.at(input_area_g.value.length-1)=='.'){
            return;
        }
        if(input_area_g.value===''){
        input_area_g.value =0.;
        }
        input_area_g.value +=val;
    }
    else if (!isNaN(val) && val !== "") { // Check if val is a valid number
        val = Number(val);

        // Prevent leading zero when pressing 0 first
        if (input_area_g.value === "0") {
            input_area_g.value = "";
        }
        input_area_g.value += val; // Append number to input field
    }
}
