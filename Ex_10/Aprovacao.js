class Aluno {
    constructor(nome, RA) {
        this.nome = nome;
        this.RA = RA;
        this.notas = { prova: null, trabalho: null };
        this.faltas = 0;
    }

    cadastrarNotas(prova, trabalho) {
        if (prova >= 0 && prova <= 10 && trabalho >= 0 && trabalho <= 10) {
            this.notas.prova = prova;
            this.notas.trabalho = trabalho;
            console.log("Notas cadastradas com sucesso!");
        } else {
            console.log("Valor das notas inv�lido. Notas devem estar entre 0 e 10.");
        }
    }

    cadastrarFaltas(totalFaltas) {
        if (Number.isInteger(totalFaltas) && totalFaltas >= 0) {
            this.faltas = totalFaltas;
            console.log("Total de faltas cadastrado com sucesso!");
        } else {
            console.log("Total de faltas inv�lido. Deve ser um valor inteiro positivo.");
        }
    }

    calcularMedia() {
        if (this.notas.prova !== null && this.notas.trabalho !== null) {
            return (this.notas.prova * 7 + this.notas.trabalho * 3) / 10;
        } else {
            console.log("Notas n�o cadastradas.");
            return null;
        }
    }

    calcularFrequencia() {
        const totalAulas = 25;
        const frequencia = (totalAulas - this.faltas) / totalAulas * 100;
        return frequencia;
    }

    verificarSituacao() {
        const media = this.calcularMedia();
        const frequencia = this.calcularFrequencia();

        if (media !== null && frequencia >= 75) {
            return "APROVADO";
        } else {
            return "REPROVADO";
        }
    }

    exibirDados() {
        const media = this.calcularMedia();
        const frequencia = this.calcularFrequencia();
        const situacao = this.verificarSituacao();

        console.log(`Nome: ${this.nome}`);
        console.log(`RA: ${this.RA}`);
        console.log(`Nota da Prova: ${this.notas.prova}`);
        console.log(`Nota do Trabalho: ${this.notas.trabalho}`);
        console.log(`M�dia: ${media}`);
        console.log(`Total de Faltas: ${this.faltas}`);
        console.log(`Percentual de Frequ�ncia: ${frequencia}%`);
        console.log(`Situa��o: ${situacao}`);
    }
}

// Fun��o para exibir o menu e executar as op��es
function exibirMenu() {
    console.log("----- MENU -----");
    console.log("1 - Cadastro de Alunos");
    console.log("2 - Cadastro de Notas");
    console.log("3 - Cadastro Total de Faltas");
    console.log("4 - Rela��o de Alunos, Notas, M�dia, Faltas e Situa��o");
    console.log("----------------");

    const opcao = parseInt(prompt("Escolha uma op��o:"));

    switch (opcao) {
        case 1:
            cadastrarAluno();
            break;
        case 2:
            cadastrarNotas();
            break;
        case 3:
            cadastrarFaltas();
            break;
        case 4:
            exibirRelatorio();
            break;
        default:
            console.log("Op��o inv�lida.");
    }
}

// Fun��o para cadastrar um novo aluno
function cadastrarAluno() {
    const nome = prompt("Digite o nome do aluno:");
    const RA = prompt("Digite o RA do aluno:");
    alunos.push(new Aluno(nome, RA));
    console.log("Aluno cadastrado com sucesso!");
}

// Fun��o para cadastrar notas para um aluno existente
function cadastrarNotas() {
    const aluno = selecionarAluno();
    if (aluno) {
        const prova = parseFloat(prompt("Digite a nota da prova (0-10):"));
        const trabalho = parseFloat(prompt("Digite a nota do trabalho (0-10):"));
        aluno.cadastrarNotas(prova, trabalho);
    }
}

// Fun��o para cadastrar faltas para um aluno existente
function cadastrarFaltas() {
    const aluno = selecionarAluno();
    if (aluno) {
        const totalFaltas = parseInt(prompt("Digite o total de faltas:"));
        aluno.cadastrarFaltas(totalFaltas);
    }
}

// Fun��o para exibir o relat�rio completo de um aluno existente
function exibirRelatorio() {
    const aluno = selecionarAluno();
    if (aluno) {
        aluno.exibirDados();
    }
}

// Fun��o para selecionar um aluno existente
function selecionarAluno() {
    const nomeAluno = prompt("Digite o nome do aluno:");
    const aluno = alunos.find(aluno => aluno.nome === nomeAluno);
    if (!aluno) {
        console.log("Aluno n�o encontrado.");
    }
    return aluno;
}

// Array para armazenar os alunos cadastrados
const alunos = [];

// Loop para exibir o menu continuamente
while (true) {
    exibirMenu();
}
