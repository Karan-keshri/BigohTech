function calculator() {
    const PI = Math.PI;
  
    // 1. Square and Square Root
    function square(num) {
      return num * num;
    }
  
    function squareRoot(num) {
      if (num < 0) return "Square root of negative number is not real.";
      return Math.sqrt(num);
    }
  
    // 2. Log base 10 and Natural Log
    function log10(num) {
      if (num <= 0) return "Logarithm undefined for zero or negative numbers.";
      return Math.log10(num);
    }
  
    function naturalLog(num) {
      if (num <= 0) return "Natural log undefined for zero or negative numbers.";
      return Math.log(num);
    }
  
    // 3. Trigonometric Functions (angle in degrees)
    function toRadians(deg) {
      return deg * (PI / 180);
    }
  
    function sin(deg) {
      return Math.sin(toRadians(deg));
    }
  
    function cos(deg) {
      return Math.cos(toRadians(deg));
    }
  
    function tan(deg) {
      return Math.tan(toRadians(deg));
    }
  
    // 4. X to the power Y
    function power(x, y) {
      return Math.pow(x, y);
    }
  
    // 5. Area of a Circle
    function areaOfCircle(radius) {
      if (radius < 0) return "Radius cannot be negative.";
      return PI * radius * radius;
    }
  
    console.log("Square of 5:", square(5));
    console.log("Square root of 25:", squareRoot(25));
    console.log("Square root of -9:", squareRoot(-9));
    
    console.log("Log base 10 of 1000:", log10(1000));
    console.log("Natural log of 5:", naturalLog(5));
    console.log("Log base 10 of -10:", log10(-10));
  
    console.log("sin(30°):", sin(30));
    console.log("cos(60°):", cos(60));
    console.log("tan(45°):", tan(45));
  
    console.log("2 to the power 3:", power(2, 3));
    console.log("Area of circle with radius 5:", areaOfCircle(5));
    console.log("Area of circle with radius -5:", areaOfCircle(-5));
  }
  
  calculator();
  