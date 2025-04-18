// What is fetch()?
// fetch() is used to get data from a server or send data to a server.


fetch('url')
  .then(response => response.json()) // convert response to JSON
  .then(data => {
    console.log('Fetched Post:', data);
  })
  .catch(error => console.error('Error:', error));

//with async and await
async function getData() {
    try {
      const response = await fetch('url');
      const data = await response.json();
      console.log('Data is :', data);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  getData();
  