//Onchange Select
document.getElementById('simpleMethod').addEventListener('change', function(){
    if(document.getElementById('simpleMethod').value == 'A'){
        document.getElementById('inputs1').style.display = "block";
        document.getElementById('inputs2').style.display = "none";
        document.getElementById('inputs3').style.display = "none";
        document.getElementById('inputs4').style.display = "none";
    } else if(document.getElementById('simpleMethod').value == 'P'){
        document.getElementById('inputs1').style.display = "none";
        document.getElementById('inputs2').style.display = "block";
        document.getElementById('inputs3').style.display = "none";
        document.getElementById('inputs4').style.display = "none";
    } else if(document.getElementById('simpleMethod').value == 'R'){
        document.getElementById('inputs1').style.display = "none";
        document.getElementById('inputs2').style.display = "none";
        document.getElementById('inputs3').style.display = "block";
        document.getElementById('inputs4').style.display = "none";
    } else if(document.getElementById('simpleMethod').value == 't'){
        document.getElementById('inputs1').style.display = "none";
        document.getElementById('inputs2').style.display = "none";
        document.getElementById('inputs3').style.display = "none";
        document.getElementById('inputs4').style.display = "block";
    }
});


//Finding A = P(1 + rt)
let principal_A = document.getElementById('principal_A');
let rateDecimal_A = document.getElementById('rateDecimal_A');
let time_A = document.getElementById('time_A');
let calculate_A = document.getElementById('calculate_A');
let reset_A = document.getElementById('reset_A');

function calculateA(){
    let result_A = findingTotalAmount(principal_A.value, rateDecimal_A.value, time_A.value);
    document.getElementById('result_A').innerHTML = "A = $" + result_A;
}

function resetA(){
    document.getElementById('result_A').innerHTML = "A = ?";
}

//Finding P = A/(1 + rt)
let accrued_P = document.getElementById('accrued_P');
let rateDecimal_P = document.getElementById('rateDecimal_P');
let time_P = document.getElementById('time_P');
let calculate_P = document.getElementById('calculate_P');
let reset_P = document.getElementById('reset_P');

function calculateP(){
    let result_P = findingPrincipal(accrued_P.value, rateDecimal_P.value, time_P.value);
    document.getElementById('result_P').innerHTML = "P = $" + result_P;
}

function resetP(){
    document.getElementById('result_P').innerHTML = "P = ?";
}

//Finding R = (1/t)(A/P - 1)
let accrued_r = document.getElementById('accrued_r');
let principal_r = document.getElementById('principal_r');
let time_r = document.getElementById('time_r');
let calculate_r = document.getElementById('calculate_r');
let reset_r = document.getElementById('reset_r');

function calculateR(){
    const accruedValue = parseFloat(accrued_r.value);
    const principalValue = parseFloat(principal_r.value);

    if(accruedValue < principalValue){
        document.getElementById('result_r').innerHTML = "A must be greater than P";
    }else{
        let result_r = findingRatePerYear(accrued_r.value, principal_r.value, time_r.value);
        document.getElementById('result_r').innerHTML = "R = " + result_r.toFixed(2)+"%/yr";
    }
}

function resetR(){
    document.getElementById('result_r').innerHTML = "R = ?";
}

//Finding t = (1/r)(A/P - 1)
let accrued_t = document.getElementById('accrued_t');
let principal_t = document.getElementById('principal_t');
let rate_t = document.getElementById('rate_t');
let calculate_t = document.getElementById('calculate_t');
let reset_t = document.getElementById('reset_t');

function calculateT(){
    const accruedValue = parseFloat(accrued_t.value);
    const principalValue = parseFloat(principal_t.value);

    if(accruedValue < principalValue){
        document.getElementById('result_t').innerHTML = "A must be greater than P";
    }else{
        let result_t = findingTimePeriod(accruedValue, principalValue, rate_t.value);
        document.getElementById('result_t').innerHTML = "R = " + result_t +" year/s";
    }
}

function resetT(){
    document.getElementById('result_t').innerHTML = "t = ?";
}

//Functions
function findingTotalAmount(P, r, t){//Finding A
    let decimalRate = r/100;
    let A = P*(1+decimalRate*t);
    return A.toFixed(2);
}

function findingPrincipal(A, r, t){//Finding P
    let decimalRate = r/100;
    let P = A/(1 + decimalRate*t);
    return P.toFixed(2);
}

function findingRatePerYear(A, P, t){//finding R
    let R = (1/t)*(A/P-1);
    return R*100;
}

function findingTimePeriod(A, P, r){//finding t
    let decimalRate = r/100;
    let t = (1/decimalRate)*(A/P-1);
    return t.toFixed(1);
}