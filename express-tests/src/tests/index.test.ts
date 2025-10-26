import {describe, expect, it} from "@jest/globals"
import request from "supertest"
import { app } from ".."

describe('Get /sum', () => {
  it("should give us the values of a and b " , async () => {
    const res = await request(app).get("/sum")
    expect(res.statusCode).toBe(200)
    expect(res.body.answer).toBe(5)
  })
})
