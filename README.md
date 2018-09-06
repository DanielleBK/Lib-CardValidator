Biblioteca Validador de cartão bancário.

Os métodos utilizados na biblioteca são:
getLinksFromMd(text);
Exemplo de uso:

>$node
> let cardNumber = require("cardValidator");
> cartNumber(36490106662661) / 'false' ;

Versão 1.0.0
Verificar se numero de cartão é valido ou invalido;
Não aceita apenas 1 digito;
Devolve erro quando numero conter string; 

Instalação
Você deverá ter o node + npm instalados. Para guia de instalação, visite o site oficial .
Proceda com a instalação com $npm install 'grandcardvalidator'
Roadmap oficial do projeto

versão 1.0.1
Adicionado Eslint 
