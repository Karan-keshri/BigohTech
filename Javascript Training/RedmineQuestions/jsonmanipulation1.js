// [
//     {
//       "batch_id": "123",
//       "name": "Tony",
//       "contact": "9872276210"
//     },
//     {
//       "batch_id": "231",
//       "name": "Steve",
//       "contact": "7876543210"
//     },
//     {
//       "batch_id": "123",
//       "name": "Bruce",
//       "contact": "6776543210"
//     },
//     {
//       "batch_id": "321",
//       "name": "Clint",
//       "contact": "8954643210"
//     },
//     {
//       "batch_id": "123",
//       "name": "Peter",
//       "contact": "7666543210"
//     },
//     {
//       "batch_id": "231",
//       "name": "Phil",
//       "contact": "8896543210"
//     },
//     {
//       "batch_id": "321",
//       "name": "Nick",
//       "contact": "9876521210"
//     }
//   ]

// [
//     {
//       "123": [
//         {
//           "name": "Tony",
//           "contact": "9872276210"
//         },
//         {
//           "name": "Bruce",
//           "contact": "6776543210"
//         },
//         {
//           "name": "Peter",
//           "contact": "7666543210"
//         }
//       ]
//     },
//     {
//       "231": [
//         {
//           "name": "Steve",
//           "contact": "7876543210"
//         },
//         {
//           "name": "Phil",
//           "contact": "8896543210"
//         }
//       ]
//     },
//     {
//       "321": [
//         {
//           "name": "Nick",
//           "contact": "9876521210"
//         },
//         {
//           "name": "Clint",
//           "contact": "8954643210"
//         }
//       ]
//     }
//   ]

function groupByBatchId(data) {
    const batchMap = {};

    data.forEach(item => {
        const { batch_id, name, contact } = item;
        if (!batchMap[batch_id]) {
            batchMap[batch_id] = [];
        }
        batchMap[batch_id].push({ name, contact });
    });

    const result = Object.keys(batchMap).map(batch_id => ({
        [batch_id]: batchMap[batch_id]
    }));

    return result;
}

const source = [
    { "batch_id": "123", "name": "Tony", "contact": "9872276210" },
    { "batch_id": "231", "name": "Steve", "contact": "7876543210" },
    { "batch_id": "123", "name": "Bruce", "contact": "6776543210" },
    { "batch_id": "321", "name": "Clint", "contact": "8954643210" },
    { "batch_id": "123", "name": "Peter", "contact": "7666543210" },
    { "batch_id": "231", "name": "Phil", "contact": "8896543210" },
    { "batch_id": "321", "name": "Nick", "contact": "9876521210" }
  ];
  
  const grouped = groupByBatchId(source);
  console.log(JSON.stringify(grouped, null, 2));
  
