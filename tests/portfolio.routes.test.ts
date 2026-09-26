import { calculatePortfolioPerformance } from "../src/portfolio/portfolioPerformance";
// import calculatePortfolioPerformance function

describe("calculatePortfolioPerformance - profit", () => {
    it("should calculate profit correctly", () => {
        // calculate portfolio performance with an initial investment of $1000 and current value of $1200
        const result = calculatePortfolioPerformance(10000, 14000);

        // assert profit, percentage change, and performance summary
        expect(result.profitOrLoss).toBe(4000);
        expect(result.percentageChange).toBe(40);
        expect(result.performanceSummary).toBe(
            "Excellent performance your investment are doing great"
        );
    });
});

describe("calculatePortfolioPerformance - profit", () => {
    it("should calculate profit correctly", () => {
        // calculate portfolio performance with an initial investment of $1000 and current value of $1200
        const result = calculatePortfolioPerformance(1000, 1200);

        // assert profit, percentage change, and performance summary
        expect(result.profitOrLoss).toBe(200);
        expect(result.percentageChange).toBe(20);
        expect(result.performanceSummary).toBe(
            "Solid gain. Keep monitoring your investments."
        );
    });
});

describe("calculatePortfolioPerformance - no change", () => {
    it("should return no change when investment value stays the same", () => {
        // calculate portfolio performance with the same initial and current value
        const result = calculatePortfolioPerformance(1000, 1000);

        // assert no profit or loss, 0% change, and correct summary
        expect(result.profitOrLoss).toBe(0);
        expect(result.percentageChange).toBe(0);
        expect(result.performanceSummary).toBe(
            "No change. Your portfolio is holding steady."
        );
    });
});

describe("calculatePortfolioPerformance - loss", () => {
    it("should calculate loss correctly", () => {
        // calculate portfolio performance with an initial investment of $1000 and current value of $800
        const result = calculatePortfolioPerformance(1000, 800);

        // assert loss, percentage change, and performance summary
        expect(result.profitOrLoss).toBe(-200);
        expect(result.percentageChange).toBe(-20);
        expect(result.performanceSummary).toBe(
            "Significant loss. Review your portfolio strategy."
        );
    });
});