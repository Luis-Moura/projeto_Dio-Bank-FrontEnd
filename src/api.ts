const conta = {
    name: 'teste',
    email: 'email@test.com',
    password: 'teste123'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
