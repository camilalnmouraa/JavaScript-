const user = {
    nome: 'Camila',
    email: 'c@c.com',
    nascimento: '2023/01/01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Mariana",
    email: 'm@m.com',
    role: 'admin',
    criarCurso() {
        console.log('curso criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()