const axios = require('axios');
const credentials = require('../../../noGIT/crendential');
  
const utils = {
    baseUrl: 'https://for-ambient-default-rtdb.firebaseio.com',
    auth: credentials.auth
}

function createURL(path) {
    try {
        auth = utils.auth || '--> Sem AUTH'
        return `${utils.baseUrl}${path}.json?auth=${auth}`
    } catch (error) {
        console.error('Não conseguiu criar o URL', error)
    }
}

function getDATA(path) {
    const data = {}
    axios.get(createURL(path))
    .then((response) => {
        Object.assign(data, response.data)
        return data
    }).catch((error) => {
        console.error(error);
    })
    return data
}

function setDATA(path, mod) {
    const data = JSON.stringify(mod);

    axios.patch(createURL(path), data)
    .then((response) => {
        console.log(getDATA())
    }).catch((error) => {
        console.error(error);
    })
}


function deleteDATA(path) {
    axios.delete(createURL(path))
    .then((response) => {
        console.log(path + " foi deletado com sucesso")
    }).catch((error) => {
        console.error(error);
    })
}

module.exports = {getDATA, setDATA, deleteDATA}