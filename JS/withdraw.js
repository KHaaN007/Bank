document.getElementById('withdraw-btn').addEventListener('click',function(){
    const getWithdrawfield = document.getElementById('withdraw-field')
    const getWithdrawfieldValueInString = getWithdrawfield.value;
    getWithdrawfieldValue = parseFloat(getWithdrawfieldValueInString)
    
    const getCurrentWithdraw = document.getElementById('current-withdraw')
    const getCurrentWithdrawValueInString = getCurrentWithdraw.innerText
    getcurrentWithdrawValue =parseFloat(getCurrentWithdrawValueInString)
    
    getWithdrawfield.value = ''
   
    getNewWithdrawValue = getWithdrawfieldValue + getcurrentWithdrawValue
    getCurrentWithdraw.innerText = getNewWithdrawValue

    const currentBalanceField = document.getElementById('balance-field')
    const currentBalanceFieldValueInString = currentBalanceField.innerText;
    currentBalanceFieldValue = parseFloat(currentBalanceFieldValueInString)

    const newCurrentBalance = currentBalanceFieldValue - getWithdrawfieldValue
    currentBalanceField.innerText = newCurrentBalance
    
   

   
})