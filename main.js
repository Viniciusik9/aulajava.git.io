alert('Bom dia!');
let limite = 100;
let secret_number = parseInt(Math.random() * limite) + 1; // Número aleatório entre 1 e 5
let guess;
let guess_count = 1;

while (secret_number !== guess) {
    guess = prompt(`Digite um número de 1 a ${limite}`);

    // Verifica se o usuário clicou em "Cancelar"
    if (guess === null) {
        alert('Jogo cancelado.');
        break;
    }

    // Converte a entrada do usuário para número
    guess = parseInt(guess);

    // Verifica se a entrada é um número válido
    if (isNaN(guess) || guess < 1 || guess > limite) {
        alert('Por favor, digite um número válido.');
        continue;
    }

    // Verifica se o número está correto
    if (secret_number === guess) {
        let palavra_tentativa = guess_count > 1 ? 'tentativas' : 'tentativa';
        alert(`Parabéns, você acertou em ${guess_count} ${palavra_tentativa}!`);
        break;
    } else {
        // Dá uma dica ao jogador
        if (guess > secret_number) {
            alert(`Chuta mais baixo! Você digitou: ${guess}`);
        } else {
            alert(`Chuta mais alto! Você digitou: ${guess}`);
        }
        // Aumenta a contagem de tentativas
        guess_count++;
    }
}
