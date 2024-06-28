import { login } from './login';

describe('login', () => {
	const mockAlert = jest.fn();
    window.alert = mockAlert;
    
    const mockEmail = 'email@test.com';

	it('deve exibir um alert com boas vindas', async () => {
		await login(mockEmail)
		expect(mockAlert).toHaveBeenCalledWith(`Boas vindas ${mockEmail}`);
    });
    
    it('Não deve exibir a mensaghem de boas vindas sem o email', async () => {
        await login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Bem Vindo')
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        await login('email@invalido.com')
        expect(mockAlert).toHaveBeenCalledWith('Email e Senha inválidos');
    })
});
