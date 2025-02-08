var input_area_g = document.getElementById("Input_area");
var sub_area_g = document.getElementById("sub_input");
var keys = document.getElementById("keys");
var chanbool = false;
keys.addEventListener('click', buttonpress);

const operators = new Set(["+", "-", "/", "*", "%", "**"]);
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

function ShowError() {
    // Get the alert element
    let alertElement = document.getElementById('danger-alert');

    // Show the alert by removing the 'd-none' class
    alertElement.classList.remove('d-none');

    // Hide the alert after 5 seconds
    setTimeout(() => {
        alertElement.classList.add('d-none');
    }, 3000); // 5000 milliseconds = 5 seconds

    // Add event listener to the close button
    let closeButton = alertElement.querySelector('.btn-close');
    closeButton.addEventListener('click', () => {
        alertElement.classList.add('d-none');
    });
}


window.onload = function () {
    document.getElementById("Input_area").focus();
    var square_inv = document.getElementById("square_inv");
    var square_root_inv = document.getElementById("square_root_inv");
    var pow_inv = document.getElementById("**_inv");
    var tenpow_inv = document.getElementById("tenpow_inv");
    var log_inv = document.getElementById("log_inv");
    var ln_inv = document.getElementById("ln_inv");

    square_inv.style.display = "none";
    square_root_inv.style.display = "none";
    pow_inv.style.display = "none";
    tenpow_inv.style.display = "none";
    log_inv.style.display = "none";
    ln_inv.style.display = "none";
}
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function changeBtn() {
    var square = document.getElementById("square");
    var square_root = document.getElementById("square_root");
    var pow = document.getElementById("**");
    var tenpow = document.getElementById("tenpow");
    var log = document.getElementById("log");
    var ln = document.getElementById("ln");

    var square_inv = document.getElementById("square_inv");
    var square_root_inv = document.getElementById("square_root_inv");
    var pow_inv = document.getElementById("**_inv");
    var tenpow_inv = document.getElementById("tenpow_inv");
    var log_inv = document.getElementById("log_inv");
    var ln_inv = document.getElementById("ln_inv");

    var chanbtn = document.getElementById("chan");
    if (!chanbool) {
        square.style.display = "none";
        square_root.style.display = "none";
        pow.style.display = "none";
        tenpow.style.display = "none";
        log.style.display = "none";
        ln.style.display = "none";

        square_inv.style.display = "block";
        square_root_inv.style.display = "block";
        pow_inv.style.display = "block";
        tenpow_inv.style.display = "block";
        log_inv.style.display = "block";
        ln_inv.style.display = "block";

        chanbool = true;
        chanbtn.classList.add('btn-primary');
        chanbtn.classList.remove('btn-light');


    } else {
        square_inv.style.display = "none";
        square_root_inv.style.display = "none";
        pow_inv.style.display = "none";
        tenpow_inv.style.display = "none";
        log_inv.style.display = "none";
        ln_inv.style.display = "none";

        square.style.display = "block";
        square_root.style.display = "block";
        pow.style.display = "block";
        tenpow.style.display = "block";
        log.style.display = "block";
        ln.style.display = "block";

        chanbool = false;
        chanbtn.classList.add('btn-light');
        chanbtn.classList.remove('btn-primary');

    }
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
    else if (e.target.closest("#chan")) {
        changeBtn();
    }
    else if (val === "change_sign") {
        input_area_g.value = Number(input_area_g.value) * -1;
    }
    else if (operators.has(val)) {
        // console.log("here");
        if (input_area_g.value === "" && sub_area_g.value === "") {
            sub_area_g.value = "0" + val;
            return;
        }
        else if(input_area_g.value === ""){
            sub_area_g.value=sub_area_g.value.slice(0,sub_area_g.value.length-1)+val;
            return;
        }
        if(Number(input_area_g.value)<0){
            var opp = sub_area_g.value.at(sub_area_g.value.length-1);
            // console.log(opp);
            
            if(opp == "+"){
            sub_area_g.value = sub_area_g.value.slice(0,sub_area_g.value.length-1) +
                                '-' + Math.abs(input_area_g.value);
            }
            else if(opp=='-'){
                sub_area_g.value = sub_area_g.value.slice(0,sub_area_g.value.length-1) +
                '+' + Math.abs(input_area_g.value);
            }else{
                sub_area_g.value += input_area_g.value + val;
            }
        }else{
            sub_area_g.value += input_area_g.value + val;
        }
        // input_area_g.value='';
    }
    else if (val === 'pi') {
        input_area_g.value = Math.PI;
    }
    else if (val === 'e') {
        input_area_g.value = Math.E;
    }
    else if (val === "clear") {
        if(input_area_g.value!=''){
            input_area_g.value = '';
        }else{
            sub_area_g.value = '';
        }
    }
    else if (val === "fact") {
        if (input_area_g.value === '') {
            input_area_g.value = 1;
        } else {
            console.log(Number(input_area_g.value));
            input_area_g.value = factorial(Number(input_area_g.value));
        }
    }
    else if (val === "=") {
        if(Number(input_area_g.value)<0){
            var opp = sub_area_g.value.at(sub_area_g.value.length-1);
            // console.log(opp);
            if(opp=="+"){
                var exp = sub_area_g.value.slice(0,sub_area_g.value.length-1) +
                '-' + Math.abs(input_area_g.value);
            }else if(opp=='-'){
                var exp = sub_area_g.value.slice(0,sub_area_g.value.length-1) +
                '+' + Math.abs(input_area_g.value);
            }
        }else{
            var exp = sub_area_g.value + input_area_g.value;
        }
        
        if (input_area_g.value === '') {
            input_area_g.value = eval(exp.substr(0, exp.length - 1));
            sub_area_g.value = '';
        }
        else {
            input_area_g.value = eval(exp);
            sub_area_g.value = '';
        }
    }
    else if (e.target.closest("#abs")) {
        // console.log("fj");
        if (input_area_g.value < 0) {
            input_area_g.value *= -1;
        }
    }
    else if (e.target.closest("#inverse")) {
        if (input_area_g.value === '') {
            console.log("fff");
            ShowError();
        } else {
            input_area_g.value = Math.pow(Number(input_area_g.value), -1);
        }
    }
    else if (e.target.closest("#square")) {
        if (input_area_g.value != '') {
            input_area_g.value = Math.pow(Number(input_area_g.value), 2);
        }
    }
    else if (e.target.closest("#square_inv")) {
        if (input_area_g.value != '') {
            input_area_g.value = Math.pow(Number(input_area_g.value), 3);
        }
    }
    else if (e.target.closest("#square_root")) {
        if (input_area_g.value != '') {
            input_area_g.value = Math.sqrt(Number(input_area_g.value));
        }
    }
    else if (e.target.closest("#square_root_inv")) {
        if (input_area_g.value != '') {
            input_area_g.value = Math.cbrt(Number(input_area_g.value));
        }
    }
    else if (e.target.closest("#tenpow")) {
        if (input_area_g.value != '') {
            input_area_g.value = Math.pow(10, Number(input_area_g.value));
        } else {
            input_area_g.value = 1;
        }
    }
    else if (e.target.closest("#tenpow_inv")) {
        if (input_area_g.value != '') {
            input_area_g.value = Math.pow(2, Number(input_area_g.value));
        } else {
            input_area_g.value = 1;
        }
    }
    else if (e.target.closest("#log")) {
        if (input_area_g.value != '') {
            input_area_g.value = Math.log10(Number(input_area_g.value));
        } else {
            ShowError();
        }
    }
    else if (e.target.closest("#ln")) {
        if (input_area_g.value != '') {
            input_area_g.value = Math.log(Number(input_area_g.value));
        } else {
            ShowError();
        }
    }
    else if (e.target.closest("#ln_inv")) {
        if (input_area_g.value != '') {
            input_area_g.value = Math.exp(Number(input_area_g.value));
        } else {
            ShowError();
        }
    }
    else if (val === ".") {
        if (input_area_g.value.at(input_area_g.value.length - 1) == '.') {
            return;
        }
        if (input_area_g.value === '') {
            input_area_g.value = 0.;
        }
        input_area_g.value += val;
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
