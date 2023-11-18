// Function Clears all values

function Clear() {
    let res = document.getElementById("result");
    res.value = "";
}

// Function displays the values

function displayVal(value) {
    let solve = document.getElementById("result");
    solve.value += value;
}

// Function evaluates expressions and returns result

function Result() {
    let p = document.getElementById("result").value;
    let q = eval(p);
    document.getElementById("result").value = q;
}