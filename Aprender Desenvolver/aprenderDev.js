// Pergunta Inicial
const firstQ = prompt('Você deseja seguir Front-End (1) ou Back-End (2)?');

// Front
const front1 = 'Como você escolheu Front-End, você deseja aprender "React" (1) ou aprender "Vue" (2)?'
const secondQ = 'Você deseja continuar se especializando no Front-End ou deseja seguir desenvolvendo para se tornar Fullstack ? ( 1 - Especializar / 2 - Fullstack )';

// Back
const backQ = 'Como você escolheu Back-End, você deseja aprender "C#" (1) ou aprender "Java" (2)?';
const secondBq = 'Você deseja continuar se especializando no Back-End ou deseja seguir desenvolvendo para se tornar Fullstack ? ( 1 - Especializar / 2 - Fullstack )';

// Ambos
const especFront = 'Qual tecnologia você deseja se especializar ou conhecer?';
const espFront = 'Tem mais alguma tecnologia você deseja se especializar ou conhecer?';

// Full
const msgFullStackF = 'Como você escolheu Fullstack. Agora que estamos no Front-End, você deseja aprender "React" (1) ou aprender "Vue" (2)?';
const msgFullStackB = 'Como você escolheu Fullstack. Agora que estamos no Back-End, você deseja aprender "C#" (1) ou aprender "Java" (2)?';

if (firstQ === '1') { // Front
    const altQ = prompt(front1);

    if (altQ === '1' || '2') {
        const secondQt = prompt(secondQ);

        if (secondQt === '1') { // Especializar
            let especializar;
            let tecnologias = [];
            let firstPrompt = true;
            do {
                if (firstPrompt) {
                    especializar = prompt(especFront);
                    firstPrompt = false;
                } else {
                    const message = (`Que legal que você quer aprender ${tecnologias[tecnologias.length - 1]}. ${espFront}`)
                    especializar = prompt(message);
                }
                if (especializar !== "") {
                    tecnologias.push(especializar);
                }
            } while (especializar !== "");
        } else if (secondQt === '2') { // Fullstack
            prompt(msgFullStackB);
        }
    }
}
else if (firstQ === '2') { // Back-End
    const altQ = prompt(backQ);

    if (altQ === '1' || altQ === '2') {
        const secondQt = prompt(secondBq);

        if (secondQt === '1') { // Especializar
            let especializar;
            let tecnologias = [];
            let firstPrompt = true;

            do {
                if (firstPrompt) {
                    especializar = prompt(especFront);
                    firstPrompt = false;
                } else {
                    const message = `Que legal que você quer aprender ${tecnologias[tecnologias.length - 1]}. ${espFront}`;
                    especializar = prompt(message);
                }

                if (especializar !== "") {
                    tecnologias.push(especializar);
                }
            } while (especializar !== "");
        } else if (secondQt === '2') { // Fullstack
            prompt(msgFullStackF);
        }
    }
}
