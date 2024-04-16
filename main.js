
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("insira a senha de 8 digitos");

    
    if (respostaTime.toLowerCase() === "19278406") {
      alert("senha correta");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("senha incorreta, tente novamente");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
