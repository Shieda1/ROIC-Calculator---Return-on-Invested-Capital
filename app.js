// https://www.omnicalculator.com/finance/roic

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const ROICRadio = document.getElementById('ROICRadio');
const EBITRadio = document.getElementById('EBITRadio');
const taxrateRadio = document.getElementById('taxrateRadio');
const debtRadio = document.getElementById('debtRadio');
const equityRadio = document.getElementById('equityRadio');

let ROIC;
let EBIT = v1;
let taxrate = v2;
let debt = v3;
let equity = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

ROICRadio.addEventListener('click', function() {
  variable1.textContent = 'EBIT';
  variable2.textContent = 'Tax rate';
  variable3.textContent = 'Debt';
  variable4.textContent = 'Equity';
  EBIT = v1;
  taxrate = v2;
  debt = v3;
  equity = v4;
  result.textContent = '';
});

EBITRadio.addEventListener('click', function() {
  variable1.textContent = 'ROIC';
  variable2.textContent = 'Tax rate';
  variable3.textContent = 'Debt';
  variable4.textContent = 'Equity';
  ROIC = v1;
  taxrate = v2;
  debt = v3;
  equity = v4;
  result.textContent = '';
});

taxrateRadio.addEventListener('click', function() {
  variable1.textContent = 'ROIC';
  variable2.textContent = 'EBIT';
  variable3.textContent = 'Debt';
  variable4.textContent = 'Equity';
  ROIC = v1;
  EBIT = v2;
  debt = v3;
  equity = v4;
  result.textContent = '';
});

debtRadio.addEventListener('click', function() {
  variable1.textContent = 'ROIC';
  variable2.textContent = 'EBIT';
  variable3.textContent = 'Tax rate';
  variable4.textContent = 'Equity';
  ROIC = v1;
  EBIT = v2;
  taxrate = v3;
  equity = v4;
  result.textContent = '';
});

equityRadio.addEventListener('click', function() {
  variable1.textContent = 'ROIC';
  variable2.textContent = 'EBIT';
  variable3.textContent = 'Tax rate';
  variable4.textContent = 'Debt';
  ROIC = v1;
  EBIT = v2;
  taxrate = v3;
  debt = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(ROICRadio.checked)
    result.textContent = `ROIC = ${computeROIC().toFixed(2)}`;

  else if(EBITRadio.checked)
    result.textContent = `EBIT = ${computeEBIT().toFixed(2)}`;

  else if(taxrateRadio.checked)
    result.textContent = `Tax rate = ${computetaxrate().toFixed(2)}`;

  else if(debtRadio.checked)
    result.textContent = `Debt = ${computedebt().toFixed(2)}`;

  else if(equityRadio.checked)
    result.textContent = `Equity = ${computeequity().toFixed(2)}`;
})

// calculation

// NOPAT = EBIT * (1 - tax rate)
// ROIC = NOPAT / invested capital
// invested capital = Debt + Equity

function computeROIC() {
  return ((Number(EBIT.value) * (1 - (Number(taxrate.value) / 100))) / (Number(debt.value) + Number(equity.value))) * 100;
}

function computeEBIT() {
  return ((Number(ROIC.value) / 100) * (Number(debt.value) + Number(equity.value))) / (1 - (Number(taxrate.value) / 100));
}

function computetaxrate() {
  return (1 - (((Number(ROIC.value) / 100) * (Number(debt.value) + Number(equity.value))) / Number(EBIT.value))) * 100;
}

function computedebt() {
  return ((Number(EBIT.value) * (1 - (Number(taxrate.value) / 100))) / (Number(ROIC.value) / 100)) - Number(equity.value);
}

function computeequity() {
  return ((Number(EBIT.value) * (1 - (Number(taxrate.value) / 100))) / (Number(ROIC.value) / 100)) - Number(debt.value);
}