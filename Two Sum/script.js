let numList = [];

//Esta função é responsável por preencher a lista com os números digitados pelo usuário.
function addNum() {


  let num = parseInt(document.getElementById("num").value)
  
//Tratativa de erros
  
  if (isNaN(num)) {
    document.getElementById('problem').innerHTML = "Insira um número."
    return;
  } else if (numList.includes(num)) {
    document.getElementById('problem').innerHTML = "Número já adicionado."
    return;
  }

  //Esvazia o campo de erros e preenche a lista.
  document.getElementById('problem').innerHTML = ""
  numList.push(num)

  //Atualiza a lista na tela.
  document.getElementById('output').innerHTML = numList.join(' ,');
  document.getElementById("num").value = '';
}


//Implementação do Two Sum
function twoSum() {

  //Pega o valor alvo
  let targetNum = parseInt(document.getElementById("targetNum").value);

  //Adiciona na tela o valor alvo
  document.getElementById("numOutput").innerHTML = targetNum;

  let num1 = 0;
  let posicao1 = 0;
  let num2 = 0;
  let posicao2 = 0;

  //Percorre a lista para encontrar os números que somados dão o valor alvo.
  for (let i = 0; i < numList.length; i++) {
    for (let j = i + 1; j < numList.length; j++) {
      if (numList[i] + numList[j] == targetNum) {
        num1 = numList[i];
        num2 = numList[j];
        break;
      }
    }
    // Identifica a posição dos números na lista
    posicao1 = numList.indexOf(num1) + 1
    posicao2 = numList.indexOf(num2) + 1
  }

  //Se a combinaçao dos números não for encontrada, exibe uma mensagem, identificando que os números não foram encontrados
  if (num1 + num2 != targetNum) {
    document.getElementById('result').innerHTML = "No numbers found";
  } else {
  
    document.getElementById('result').innerHTML = `Os números são ${num1} na ${posicao1}° posição e ${num2}, na ${posicao2}°.`;


  }



}