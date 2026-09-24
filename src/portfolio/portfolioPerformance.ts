/**
 * Represents the calculated performance of a financial portfolio
 */
export interface PortfolioPerformance {
    initialInvestment: number;
    currentValue: number;
    profitOrLoss: number;
    percentageChange: number;
    performanceSummary: string;
}

/**
 * Calculates the performance of a financial portfolio based on initial and current values
 * @param initialInvestment - The original amount invested
 * @param currentValue - The current value of the portfolio
 * @returns An object containing profit/loss, percentage change, and a performance summary
 */
export function calculatePortfolioPerformance(initialInvestment: number, currentValue: number): PortfolioPerformance {
    const profitOrLoss: number = currentValue - initialInvestment;
    const percentageChange: number = (profitOrLoss / initialInvestment) * 100;
    const performanceSummary: string = getPerformanceSummary(percentageChange, profitOrLoss);

    return {
        initialInvestment,
        currentValue,
        profitOrLoss,
        percentageChange,
        performanceSummary,
    };
}

/**
 * Determines the performance summary message based on percentage change
 * @param percentageChange - The percentage change of the portfolio
 * @param profitOrLoss - The dollar amount gained or lost
 * @returns A summary string describing the portfolio's performance
 */
const getPerformanceSummary = (percentageChange: number, profitOrLoss: number): string => {
    switch (true) {
        case percentageChange >= 30:
            return `Excellent performance your investment are doing great`;
        case percentageChange >= 10:
            return `Solid gain. Keep monitoring your investments.`;
        case percentageChange > 0:
            return `Modest gain. your portfollio is growing slowly.`;
        case percentageChange == 0:
            return `No change. your portfolio is holding steady.`;
        case percentageChange >= -10:
            return `Minor loss. Stay calm and review your options.`;
        default:
            return `Significant loss. Review your portfolio stratergy.`;            
        
        }
};