//function User(nome, email) {
//    this.nome = nome
//    this.email = email

//    this.exibirInfos = function() {
//        return `${this.nome}, ${this.email}`
//    }
//}

//const novoUser = new User('Camilaa', 'p@p.com')
//console.log(novoUser.exibirInfos())

//function Admin(role) {
//    User.call(this, 'Camilaa', 'p@p.com')
//    this.role = role || 'estudante'
//}

//Admin.prototype = Object.create(User.prototype)
//const novoUser = new Admin('admin')
//console.log(novoUser.exibirInfos())

const user = {
    init: function(nome, email) {
        this.nome = nome
        this.email = email
    },

    exibirInfos: function(nome) {
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('Camila', 'c@c.com')
console.log(novoUser.exibirInfos())

//console.log(novoUser.exibirInfos('Camila'))
//console.log(user.isPrototypeOf(novoUser))