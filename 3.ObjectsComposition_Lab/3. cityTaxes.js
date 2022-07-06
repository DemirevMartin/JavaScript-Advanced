function solve(name, population, treasury) {
    const obj = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() { return Math.floor(this.treasury += this.population * this.taxRate) },
        applyGrowth(percentage) { return this.population += Math.floor(this.population * percentage / 100) },
        applyRecession(percentage) { return this.treasury -= Math.floor(this.treasury * percentage / 100) }  
    }
    /*
    •	collectTaxes() - Increase treasury by  population * taxRate
    •	applyGrowth(percentage) - Increase population by given percentage
    •	applyRecession(percentage) - Decrease treasury by given percentage
    */
    return obj;
}