
const options = {
    method:  'post',
    headers: {
      accept: 'text/plain',
      
   Content-Type : 'application/json' 
      },
       body: JSON.stringify({})
      };
            
  fetch('https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));