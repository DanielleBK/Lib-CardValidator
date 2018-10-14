function cardValidator(cardNumber){
  if(typeof cardNumber !== 'undefined' || cardNumber !== ''){ 
    for(let i = 0; i < cardNumber.length; i++){
      if(cardNumber.charCodeAt(i) < 48 || cardNumber.charCodeAt(i) > 57) {
      throw new Error('Colocar apenas numeros');
      cardNumber = "";
    }
  }
  if (cardNumber.length ===1) {
    throw new Error('Numero incompleto');
  }
}
  else {
  throw new Error('Coloque um numero de cartão');
}
  cardNumber = cardNumber.split('').reverse().join('');
  const validate = [];
  for(let i = 1; i < cardNumber.length; i += 2){
    validate[i] = cardNumber[i] *= 2;
    if(validate[i] > 9) {
      let aux = validate[i];
      aux = aux.toString();
      aux = aux.split('');
      aux = parseInt(aux[0]) + parseInt(aux[1]);
      validate[i] = aux;
    }
  }
  for(let i = 0; i < cardNumber.length; i += 2){
    validate[i] = parseInt(cardNumber[i]);
  }
  let sum = 0;
  for(let i = 0; i < validate.length; i++) {
    sum += validate[i];
  }

  if(sum % 10 !== 0) {
    return false;
  } 
    return true;
  }
}
module.exports = cardValidator;
