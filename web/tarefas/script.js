function cadastrarTarefa(){
const form = document.querySelector('#cadastro form')
form.addEventListener('submit', e => {
    e.preventDefault()
    const dados = {
        usuario: form.usuario.value,
        descricao: form.descricao.value,
        setor: form.setor.value,
        prioridade: form.prioridade.value
    }
    fetch('http://localhost:3000/tarefas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201)
                alert('Cadastro de tarefa feito com sucesso!');
            else
                alert('Erro ao cadastrar!');
                window.location.reload();
        })
})
}