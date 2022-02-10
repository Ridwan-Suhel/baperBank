function inputAmount(inputId) {
  //bank input
  const inputField = document.getElementById(inputId);
  const inputText = inputField.value;
  const amountValue = parseFloat(inputText);
  inputField.value = "";
  return amountValue;
}
function updateAmount(amountValueId, amount) {
  //deposit and withdrawal amount
  const amountTotal = document.getElementById(amountValueId);
  const prevAmountText = amountTotal.innerText;
  const prevAmount = parseFloat(prevAmountText);
  const newAmount = prevAmount + amount;
  amountTotal.innerText = newAmount;
}
function currentBalance() {
  const balance = document.getElementById("balance-amount");
  const balanceAmountText = balance.innerText;
  const balanceAmountAmount = parseFloat(balanceAmountText);
  return balanceAmountAmount;
}

function currentBlanceCondition(amount, isAdd) {
  const balance = document.getElementById("balance-amount");
  const balanceAmountAmount = currentBalance();

  if (isAdd == true) {
    const totalBalance = amount + balanceAmountAmount;
    balance.innerText = totalBalance;
  } else {
    const totalBalance = balanceAmountAmount - amount;
    balance.innerText = totalBalance;
  }
}
//============================
// event listener
//============================
const depositButton = document.getElementById("deposit-btn");
depositButton.addEventListener("click", function () {
  const depositInputAmount = inputAmount("deposit-input");
  if (depositInputAmount > 0) {
    updateAmount("deposit-amount", depositInputAmount);
    currentBlanceCondition(depositInputAmount, true);
  }
});

const withdrawButton = document.getElementById("withdraw-btn");
withdrawButton.addEventListener("click", function () {
  const withdrawInputAmount = inputAmount("withdraw-input");
  const currentBalanceTotal = currentBalance();
  if (withdrawInputAmount > 0 && withdrawInputAmount <= currentBalanceTotal) {
    updateAmount("withdraw-amount", withdrawInputAmount);
    currentBlanceCondition(withdrawInputAmount, false);
  }
  if (withdrawInputAmount > currentBalanceTotal) {
    document.getElementById("warning").innerText =
      "Insufficent Balance To Withdraw";
  } else {
    document.getElementById("warning").innerText = "";
  }
});
