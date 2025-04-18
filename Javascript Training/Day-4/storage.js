// Local Storage Example
localStorage.setItem("username", "Karan");
console.log("From LocalStorage:", localStorage.getItem("username")); // Output: Karan

// Remove a specific key from local storage
localStorage.removeItem("username");

//  Clear all keys from local storage
localStorage.clear();

// Session Storage Example
sessionStorage.setItem("sessionId", "123ABC");
console.log("From SessionStorage:", sessionStorage.getItem("sessionId")); // Output: 123ABC

// Remove a key from session storage
sessionStorage.removeItem("sessionId");

// Clear all session storage
sessionStorage.clear();
