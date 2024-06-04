//As arrow functions são uma forma mais concisa de escrever funções em JavaScript, introduzidas com o ECMAScript 6.//
//A sintaxe básica consiste em usar uma seta => após a lista de parâmetros entre parênteses ().// 
//Se a função tiver apenas uma expressão, as chaves {} e a palavra-chave return podem ser omitidas, já que a expressão será implicitamente retornada.//

//No JavaScript, escrever funções é agora mais atual e conciso com a utilização de Funções de seta.//
//Ao invés das funções convencionais, que utilizam a palavra-chave function, as Arrow Functions utilizam uma seta => numa sintaxe mais condensada e direta.//
//Desta forma, aumenta a legibilidade e a limpeza do código, principalmente para as funções curtas e básicas.//


// Função para dobrar os valores de um array de números
const dobrarValores = () => {
    // Solicita ao usuário que insira valores separados por vírgula
    const valoresInpt = prompt("Coloque  os valores!");
    // Divide a string em um array de substrings usando a vírgula como delimitador
    const numeros = valoresInpt.split(",").map(valor => parseFloat(valor));
    // Cria um novo array com os valores dobrados usando a função map()
    const resultado = numeros.map(valor => valor * 2);
    // Exibe o resultado usando o alert()
    alert("Dobrados: " + resultado);
  };
  
  // Função para ordenar um array de strings com base em seu comprimento
  const ordenarComprimento = () => {
    const valoresInpt = prompt("Coloque as palavras!");
    const palavras = valoresInpt.split(",");
    const resultado = palavras.sort((a, b) => a.length - b.length);
    alert("Palavras Ordenadas: " + resultado);
  };
  
  // Função para filtrar pares de um array de números
  const filtrarPares = () => {
    const valoresInpt = prompt("Coloque valores!");
    const numeros = valoresInpt.split(",").map(valor => parseInt(valor));
    const resultado = numeros.filter(numero => numero % 2 === 0);
    alert("Pares: " + resultado);
  };