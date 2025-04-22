class LRUCache {
    constructor(capacity) {
      this.capacity = capacity;
      this.cache = new Map(); 
    }
  
    get(key) {
      if (!this.cache.has(key)) return -1;

      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
  
    put(key, value) {
      if (this.cache.has(key)) {
        this.cache.delete(key);
      } else if (this.cache.size >= this.capacity) {
        const oldestKey = this.cache.keys().next().value;
        this.cache.delete(oldestKey);
      }

      this.cache.set(key, value);
    }
  }

const cache = new LRUCache(4);
cache.put(1, 1);
cache.put(2, 2);
//console.log(cache.get(1)); // Output: 1
cache.put(3, 3);
cache.put(4, 4);
cache.put(5, 5); 
console.log(cache.get(2));
console.log(cache.get(4));
  