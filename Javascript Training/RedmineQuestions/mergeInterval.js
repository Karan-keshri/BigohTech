function mergeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
  
    const result = [intervals[0]];
  
    for (let i = 1; i < intervals.length; i++) {
      const last = result[result.length - 1];
      const current = intervals[i];

      if (current[0] <= last[1]) {
        last[1] = Math.max(last[1], current[1]); 
      } else {
        result.push(current); 
      }
    }
  
    return result;
  }

  let intervals = [[1,3],[2,6],[8,10],[15,18]];
  console.log(mergeIntervals(intervals)); // Output: [[1,6],[8,10],[15,18]]
  