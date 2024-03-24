function opcoesProfessor() {
    var professor = document.getElementById("opcoesProfessor");
    var aluno = document.getElementById("opcoesAlunos");

    professor.classList.remove("hidden");
    aluno.classList.add("hidden");
}

function opcoesAlunos() {
    var professor = document.getElementById("opcoesProfessor");
    var aluno = document.getElementById("opcoesAlunos");

    professor.classList.add("hidden");
    aluno.classList.remove("hidden");
}

function enviado() {
    alert("Formulário enviado com sucesso!");
}