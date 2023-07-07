const prompt = require('prompt-sync')({sigint: true});

let difficulty;

console.log('Bem vindo(a) ao jogo da adivinhação!');

difficulty = parseInt(prompt('Escolha o nível de dificuldade 0(Fácil) - 1(Normal) - 2(Difícil): '));

if (generate(difficulty) != null || generate(difficulty) != ''){
    let win = false;
    let randomNumber = generate(difficulty);
    while (!win){
        
        let attempt = 0;
        console.log(' ');
        attempt = prompt('Digite um número: ');
        if (attempt < randomNumber){
            console.log('O número secreto é maior!');
        } else if (attempt > randomNumber){
            console.log('O número secreto é menor!');
        } else {
            console.log('Parabéns, você acertou!');
            win = true;
            let again = prompt('Quer jogar novamente? (y/n): ');
            if (again != 'y' && again != 'Y'){
                break;
            } else {
                win = !win;
                randomNumber = generate(difficulty);
            }
        }
    };
} else {
    difficulty = parseInt(prompt('Escolha o nível de dificuldade 0(Fácil) - 1(Normal) - 2(Difícil):'));
}

function generate(difficulty){
    var randomNumber;
    switch (difficulty){
        case 0:
            randomNumber = Math.floor(Math.random() * 10);
            return randomNumber;
        case 1:
            randomNumber = Math.floor(Math.random() * 100);
            return randomNumber;
        case 2:
            randomNumber = Math.floor(Math.random() * 1000);
            return randomNumber;
        default:
            return null;
    }
    
    
}
