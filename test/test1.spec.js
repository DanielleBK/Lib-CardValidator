const chai = require('chai');
const indexs = require('../index.js');
const expect = chai.expect;

 describe("cardValidator()", () =>{
   it("Cartão valido", () =>{
     expect(indexs('36490102462661')).to.equal(true);
   });
   it("Cartão invalido", () =>{
     expect(indexs('1234')).to.equal(false);
   });
   it('Quando nao houver parametro deve lancar um erro', () =>{
     expect(() => indexs()).to.throw('Coloque um numero de cartão');
   });
   it('Quando o numero for uma string deve lancar um erro', () =>{
     expect(() => indexs('abc')).to.throw('Colocar apenas numeros');
   });
   it('Quando o numero for um inteiro e houver um digito deve lancar um erro', () =>{
     expect(() => indexs('1')).to.throw('Numero incompleto');
   });
 });

 // Quando nao houver parametro deve lancar um erro.
 // Quando o numero for uma string deve lancar um erro.
 // Quando o numero for um inteiro e houver um digito deve lancar um erro.
 // Quando o numero for um inteiro e for um cartão válido deve retornar true, se o cartao for invalido deve retornar false.
