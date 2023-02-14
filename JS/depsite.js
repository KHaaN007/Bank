document.getElementById('deposit-btn').addEventListener('click', function(){
    const getDepositeField = document.getElementById('deposit-field')
    const getDepositeFieldValueInString = getDepositeField.value;
    getDepositeFieldValue = parseFloat(getDepositeFieldValueInString)
    getDepositeField.value = ''
    
    const getCurrentDeposit = document.getElementById('current-deposit')
    const getCurrentDepositValueinString =getCurrentDeposit.innerText;
    getCurrentDepositValue = parseFloat(getCurrentDepositValueinString)

    const newDopositTotal = getCurrentDepositValue + getDepositeFieldValue
    getCurrentDeposit.innerText = newDopositTotal

    const getCurrentBalance = document.getElementById('balance-field')
    const getCurrentBalanceValueInString = getCurrentBalance.innerText;
    getCurrentBalanceValue = parseFloat(getCurrentBalanceValueInString)

    const getNewBalance =getCurrentBalanceValue + getDepositeFieldValue
    getCurrentBalance.innerText = getNewBalance 
})