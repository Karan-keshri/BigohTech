function evaluateExpression(expression) {
    try {
      const result = eval(expression); // Follows BODMAS internally
      return result;
    } catch (error) {
      return "Invalid expression!";
    }
  }
  
  console.log(evaluateExpression("10 + 2 * 3"));      // 16
  console.log(evaluateExpression("(10 + 2) * 3"));    // 36
  console.log(evaluateExpression("100 / 2 + 5 * 3")); // 65
  console.log(evaluateExpression("10 + hi ")); // Invalid expression!
  console.log(evaluateExpression(1+(2+3)*4-10/2)); // 16