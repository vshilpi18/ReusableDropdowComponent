const axios = require('axios');

export function getDropdownData(callback) {
    //Dummy api is being called to fetch data
     axios.get('https://jsonplaceholder.typicode.com/users').then(function(response){
        callback(response.data);
    }).catch(function(error){
        console.log(error);
    });
}
