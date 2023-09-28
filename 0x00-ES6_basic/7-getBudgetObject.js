// eslint-disable-next-line
export default function getBudgetObject(income, gdp, capita) {
    const budget = {
      income: income,
      gdp: gdp,
      capita: capita,
    };
  
    return Object.keys(budget);
  }