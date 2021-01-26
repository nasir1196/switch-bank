//Login click handler
function forLoginButton() {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
}
const loginButton = document.getElementById('login');
loginButton.addEventListener('click', forLoginButton);

//Deposit click handler
function addDepositAmount() {
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount);

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);

    document.getElementById('depositAmount').value = "";
}
function updateSpanText(id, addedNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}

const addDeposit = document.getElementById('addDeposit');
addDeposit.addEventListener('click', addDepositAmount);


//Withdraw click handler
const addWithdrawButton = document.getElementById('addWithdraw');
addWithdrawButton.addEventListener('click', withdrawHandler);

function withdrawHandler() {
    const withdrawAmount = getInputNumber('withdrawAmount');
    updateSpanText('currentWithdraw', withdrawAmount);
    updateSpanText('currentBalance', -1 * withdrawAmount)
    document.getElementById('withdrawAmount').value = "";

}
function getInputNumber(id) {
    const withdrawAmount = document.getElementById(id).value;
    const amountNumber = parseFloat(withdrawAmount);
    return amountNumber;
}
