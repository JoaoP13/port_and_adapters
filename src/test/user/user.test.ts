import app from "../../app";
import request from 'supertest'

describe("return list of user by filters", () => {
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