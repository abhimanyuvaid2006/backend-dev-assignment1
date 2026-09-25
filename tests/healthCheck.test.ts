import request, { Response } from "supertest";
import app from "../src/app";

describe("Basic Route Tests", () => {

    describe("GET /api/v1/health", () => {
        it("should return a valid health check response", async () => {
            // Act
            const response: Response = await request(app).get("/api/v1/health");

            // Assert
            expect(response.status).toBe(200);
            expect(response.body).toHaveProperty("status", "OK");
            expect(response.body).toHaveProperty("uptime");
            expect(response.body).toHaveProperty("timestamp");
            expect(response.body).toHaveProperty("version", "1.0.0");
        });
    });

});