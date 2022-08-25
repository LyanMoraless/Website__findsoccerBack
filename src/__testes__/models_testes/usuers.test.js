const { Usuario, sequelize } = require('./models');

describe("Usuários", () => {

    // Usuário: nome, email e senha (obrigatórios)
    // Casos de teste: 
    // Inserido com todos os dados
    // Nome não informado
    // Email não informado
    // Email não pode ser duplicado
    // Email deve ser válido
    // Senha não informada 
    // Senha não pode ter espaços em branco

    beforeAll(async () => {
        await sequelize.sync({ logging: true });
    });

    beforeEach(async () => {
        await Usuario.truncate();
    });

    test("Inserir usuário com todos os dados", async () => {
        await expect(Usuario.create({
            nome: "Lyan",
            email: "drlyanmorales@gmail.com",
            senha: "123"
        })).resolves.toBeDefined();

        const usuario2 = await Usuario.findOne({
            where: {
                email: "drlyanmorales@gmail.com"
            }
        });

    });

    test("Usuário sem nome", async () => {
        await expect(Usuario.create({
            email: "drlyanmorales@gmail.com",
            senha: "123"
        })).rejects.toThrow();

        await expect(Usuario.create({
            nome: '',
            email: "drlyanmorales@gmail.com",
            senha: "123"
        })).rejects.toThrow();

        await expect(Usuario.create({
            nome: '  ',
            email: "drlyanmorales@gmail.com",
            senha: "123"
        })).rejects.toThrow();


    });

    test("Usuário sem email", async () => {
        await expect(Usuario.create({
            nome: "Lyan",
            senha: "123"
        })).rejects.toThrow();

        await expect(Usuario.create({
            nome: "Lyan",
            email: '',
            senha: "123"
        })).rejects.toThrow();


        await expect(Usuario.create({
            nome: "Lyan",
            email: '  ',
            senha: "123"
        })).rejects.toThrow();

    });

    test("Usuário sem senha", async () => {
        await expect(Usuario.create({
            nome: "Lyan",
            email: "drlyanmorales@gmail.com",
        })).rejects.toThrow();

        await expect(Usuario.create({
            nome: "Lyan",
            email: "drlyanmorales@gmail.com",
            senha: ''
        })).rejects.toThrow();

        await expect(Usuario.create({
            nome: "Lyan",
            email: "drlyanmorales@gmail.com",
        })).rejects.toThrow();

        // expect(usuario).toBeNull(); // ou // expect(usuario.id).toBe(0); 

    });
});