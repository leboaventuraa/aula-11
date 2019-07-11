//*
// console.log('Helo world');
// let nomeDoUsuario = prompt ('Qual é o seu nome?');
// let idade = prompt ('Quantos anos você tem?');
// let programador = confirm('Voce e um programador');

// alert('Olá' + nomeDoUsuario + 'você tem' + idade + 'anos?');

// if (programador)
// {
//     alert ('Você é um programador, parabéns.');
// }

// else if(Number(idade) >= 16 && Number(idade) <= 25) {
//     alert('Que pena, você deveria conhecer a Estação Hack'); }


// else {
//     alert ('Que pena, vc deveria aprender javascript'); }

//*

let aluno = prompt ('Qual é o nome do aluno?');
let materia = prompt ('Qual materia você está cursando?');
let nota = prompt ('Qual é a sua nota?');

let media = 6;

if (Number(nota) >= media) {
alert ('Parabéns o aluno '+ aluno +' foi aprovado na matéria' + materia); 
}
else if (Number(nota) >= media - 0.5)
{
    alert(aluno + ', vc foi aprovada em ' +materia+ "por arredondamento do sistema" )
}

else {
    alert ('Parece que sua nota ' + nota + 'Foi insuficiente para ser aprovado na materia de ' + materia);

}
