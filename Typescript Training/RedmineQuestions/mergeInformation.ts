type User = {
    id: number;
    name: string;
    email: string;
    [key: string]: any;
  };
  
  function mergeUserData<T extends User, U1, U2>(
    users: T[], 
    purchases: U1[], 
    reviews: U2[]
  ): T [] {
    
    return users.map(user => {
      const userPurchases = purchases
        .filter(purchase => purchase['userId'] === user.id)
  
      const userReviews = reviews
        .filter(review => review['userId'] === user.id)
  
      return {
        ...user,
        purchases: userPurchases,
        reviews: userReviews
      };
    });
  }
  
  // Example Data
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Jim Brown", email: "jim@example.com" },
  ];
  
  const purchases = [
    { userId: 1, item: "Laptop", price: 1200 },
    { userId: 2, item: "Phone", price: 800 },
    { userId: 1, item: "Mouse", price: 20 },
    { userId: 3, item: "Keyboard", price: 100 },
    { userId: 2, item: "Monitor", price: 200 },
  ];
  
  const userReviews = [
    { userId: 1, review: "Not good", star: 1200 },
    { userId: 2, review: "Bad", star: 800 },
    { userId: 1, review: "Average", star: 20 },
    { userId: 3, review: "Excellent", star: 100 },
    { userId: 2, review: "Poor", star: 200 },
  ];
  
  const mergedData = mergeUserData(users, purchases, userReviews);
  console.log(mergedData);
  
  export {}