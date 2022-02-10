const depositButton = document.getElementById("deposit-btn");
depositButton.addEventListener("click", function () {
  // deposit amount
  const depositAmount = document.getElementById("deposit-amount");
  const depositPrevAmountText = depositAmount.innerText;
  const depositPrevAmount = parseFloat(depositPrevAmountText);

  //deposit input
  const depositInput = document.getElementById("deposit-input");
  const depositInputText = depositInput.value;
  const depositInputAmount = parseFloat(depositInputText);
  depositInput.value = "";

  //adding value with deposit amount
  const depositNewAmount = depositPrevAmount + depositInputAmount;
  depositAmount.innerText = depositNewAmount;
  // const totalDepositText = depositAmount.innerText;
  // const totalDepositAmount = parseFloat(totalDepositText);

  //adding deposit to balance amount
  const balance = document.getElementById("balance-amount");
  const balanceAmountText = balance.innerText;
  const balanceAmountAmount = parseFloat(balanceAmountText);
  const totalBalance = depositInputAmount + balanceAmountAmount;
  balance.innerText = totalBalance;
});
