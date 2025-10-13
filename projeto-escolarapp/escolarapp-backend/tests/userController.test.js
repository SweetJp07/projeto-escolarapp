const request = require("supertest");
const app = require("../index");

describe("User Controller", () => {
  describe("POST /api/users/register", () => {
    it("deve retornar 400 se campos obrigatórios estiverem faltando", async () => {
      const res = await request(app).post("/api/users/register").send({
        username: "gabriel",
        password: "123456",
        // cpf, email, role ausentes
      });

      expect(res.statusCode).toBe(400);
      expect(res.body.message).toMatch(/obrigatórios/);
    });

    it("deve retornar 400 se usuário já existir", async () => {
      await request(app).post("/api/users/register").send({
        username: "gabriel",
        password: "123456",
        cpf: "12345678900",
        email: "gabriel@example.com",
        address: "Rua A",
        role: "aluno",
      });

      const res = await request(app).post("/api/users/register").send({
        username: "gabriel",
        password: "123456",
        cpf: "12345678900",
        email: "gabriel@example.com",
        address: "Rua A",
        role: "aluno",
      });

      expect(res.statusCode).toBe(400);
      expect(res.body.message).toMatch(/já cadastrado/);
    });

    it("deve retornar 201 se o usuário for cadastrado com sucesso", async () => {
      const res = await request(app).post("/api/users/register").send({
        username: "novoUsuario",
        password: "senhaSegura",
        cpf: "98765432100",
        email: "novo@example.com",
        address: "Rua B",
        role: "motorista",
      });

      expect(res.statusCode).toBe(201);
      expect(res.body.message).toMatch(/cadastrado com sucesso/);
    });
  });

  describe("POST /api/users/login", () => {
    it("deve retornar 400 se username ou password estiverem ausentes", async () => {
      const res = await request(app).post("/api/users/login").send({
        username: "gabriel",
      });

      expect(res.statusCode).toBe(400);
      expect(res.body.message).toMatch(/obrigatórios/);
    });

    it("deve retornar 401 se o usuário não existir", async () => {
      const res = await request(app).post("/api/users/login").send({
        username: "inexistente",
        password: "qualquer",
      });

      expect(res.statusCode).toBe(401);
      expect(res.body.message).toMatch(/Credenciais inválidas/);
    });

    it("deve retornar 200 se o login for bem-sucedido", async () => {
      await request(app).post("/api/users/register").send({
        username: "loginTeste",
        password: "senha123",
        cpf: "11122233344",
        email: "login@example.com",
        address: "Rua C",
        role: "coordenador",
      });

      const res = await request(app).post("/api/users/login").send({
        username: "loginTeste",
        password: "senha123",
      });

      expect(res.statusCode).toBe(200);
      expect(res.body.message).toMatch(/Login bem-sucedido/);
    });
  });
});
