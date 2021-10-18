const axios = require('axios');
const credentials = require('../noGIT/crendential');
  
const utils = {
    baseUrl: 'https://for-ambient-default-rtdb.firebaseio.com',
    auth: credentials.auth
}

const user = {}

function getAPI(path, auth) {
    auth = auth || utils.auth || 'teste'
    console.log(auth)
    const mountedURL = `${utils.baseUrl}${path}?auth=${auth}`

    axios.get(mountedURL)
    .then((response) => {
        console.log(response.data);
        Object.assign(user, response.data)
        console.log(user)
    }).catch((error) => {
        console.error(error);
        console.log(auth)
    })
   
}

getAPI('/forjob/user1.json')

