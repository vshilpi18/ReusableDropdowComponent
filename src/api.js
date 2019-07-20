const axios = require('axios');

export function getDropdownData(callback) {
    axios.get('http://dummy.restapiexample.com/api/v1/employees').then(function (response){
        callback(response.data);
    }).catch(function(error){
        console.log(error);
    });
}