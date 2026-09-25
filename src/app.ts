import express, { Express } from "express";
import { calculatePortfolioPerformance } from "./portfolio/portfolioPerformance";

const app: Express = express();

app.use(express.json());

/**
 * Represents the response structure for a health check endpoint
 */
interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}

app.get("/api/v1/health", (req, res) => {
    // Create a response object that matches our interface
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };

    res.json(healthData);
});

app.get("/api/v1/portfolio/performance", (req, res) => {
    const { initialInvestment, currentValue } = req.body;

    if (typeof initialInvestment !== "number" || typeof currentValue !== "number") {
        return res.status(400).json({
            error: "initialInvestment and currentValue must be numbers.",
        });
    }

    const result = calculatePortfolioPerformance(initialInvestment, currentValue);
    res.json(result);
});

export default app;