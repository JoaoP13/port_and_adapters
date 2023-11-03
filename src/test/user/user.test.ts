import app from "../../app";
import request from 'supertest'

const CREATE_SUCCESS = "User created"
const CREATE_NOT_SUCCESS = "User already exists"
const UPDATE_SUCCESS = "User updated"
const UPDATE_NOT_SUCCESS = "User not found or email already exists"

describe("test User", () => {

  it("Should be able to update user", async () => {
    const response = await request(app).put("/api/user/updateUser/lucasA@example.com").send({name: "test-integration",
    email: "testIntegrationUP@test.com.br",
    birthDate: new Date(),
    });

    expect(response.status).toBe(200);
    expect(response.body.result).toEqual(UPDATE_SUCCESS);
  });

  it("Should be able to create user", async () => {
    const response = await request(app).post("/api/user/createUser").send({name: "test-integration",
    email: "testIntegration@test.com.br",
    birthDate: new Date(),
    });

    expect(response.status).toBe(200);
    expect(response.body.result).toEqual(CREATE_SUCCESS);
  });

  it("Should be able to retrive all users", async () => {
    const response = await request(app).get("/api/user/list").send({
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("result");
  });
  
  it("Should be able to retrive all users by some filters", async () => {
    const response = await request(app).get("/api/user/listByFilters").send({
      name: "test-integration",
      email: "testIntegration@test.com.br",
      birthDate: new Date(),
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("result");
  });
});