//pegar valores

let cxNome = document.querySelector('#nome');
let cxIdade = document.querySelector('#idade');
let cxPeso = document.querySelector('#peso');
let cxAltura = document.querySelector('#altura');
let cxImc = document.querySelector('#resImc');
let enviar = document.querySelector('#btnEnviar');
let cxAviso = document.querySelector('#aviso');
let cliente = document.querySelectorAll('.pessoa');

enviar.addEventListener('click', function(e){

    let nome = cxNome.value;
    let idade = cxIdade.value;
    let peso = cxPeso.value;
    let altura = cxAltura.value;

    let imc = (peso / (altura * altura)).toFixed(1);
    console.log(imc);

    cxImc.value = imc;

    let mensagem = funcaoMensagem(imc);
    cxAviso.textContent = mensagem;

    let cidadao = {
        nome : nome,
        idade : idade,
        peso : peso,
        altura: altura,
        imc : imc
    }

    
    cliente[1].textContent = cidadao.nome;
    cliente[2].textContent = cidadao.idade + ' anos';
    cliente[3].textContent = cidadao.peso + ' kg';
    cliente[4].textContent = cidadao.altura + ' m';
    cliente[5].textContent = cidadao.imc + ' - ' + mensagem;
    

    (e).preventDefault();
})

function funcaoMensagem(imc){

    let situacao = '';
    if(imc < 18.5){
        situacao = 'Abaixo do peso';
    }else if(imc >= 18.5 && imc <= 24.9){
        situacao = "Parabéns! Você está no seu peso normal!";
    }else if(imc > 24.9 && imc <= 29.9){
        situacao = "Você está acima do seu peso";
    }else if(imc > 29.9 && imc <= 34.9){
        situacao = "Obresidade grau 1";
    }else if(imc > 34.9 && imc <=39.9){
        situacao = "Obesidade grau 2";
    }else{
        situacao = "Obesidade graus 3 e 4";
    }
    return situacao;
}

