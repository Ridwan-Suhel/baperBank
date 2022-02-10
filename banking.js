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

  //adding deposit to balance amount and balance input
  const balance = document.getElementById("balance-amount");
  const balanceAmountText = balance.innerText;
  const balanceAmountAmount = parseFloat(balanceAmountText);
  const totalBalance = depositInputAmount + balanceAmountAmount;
  balance.innerText = totalBalance;
});

const withdrawButton = document.getElementById("withdraw-btn");
withdrawButton.addEventListener("click", function () {
  // withdraw amount
  const withdrawAmount = document.getElementById("withdraw-amount");
  const withdrawPrevAmountText = withdrawAmount.innerText;
  const withdrawPrevAmount = parseFloat(withdrawPrevAmountText);

  //withdraw input
  const withdrawInput = document.getElementById("withdraw-input");
  const withdrawInputText = withdrawInput.value;
  const withdrawInputAmount = parseFloat(withdrawInputText);
  withdrawInput.value = "";

  //adding value with withdrae amount and withdraw input
  const withdrawNewAmount = withdrawPrevAmount + withdrawInputAmount;
  withdrawAmount.innerText = withdrawNewAmount;

  //minus withdraw to balance amount and balance input
  const balance = document.getElementById("balance-amount");
  const balanceAmountText = balance.innerText;
  const balanceAmountAmount = parseFloat(balanceAmountText);
  const totalBalance = balanceAmountAmount - withdrawInputAmount;
  balance.innerText = totalBalance;

  // condition
});
