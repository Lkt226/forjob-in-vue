const axios = require('axios');
const credentials = require('../../noGIT/crendential');
  
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

export function getDATA(path) {
    const data = {}
    axios.get(createURL(path))
    .then((response) => {
        Object.assign(data, response.data)
        console.log(data)
    }).catch((error) => {
        console.error(error);
    })
    return data
}

export function setDATA(path, mod) {
    const data = JSON.stringify(mod);

    axios.patch(createURL(path), data)
    .then((response) => {
        getDATA(path)
    }).catch((error) => {
        console.error(error);
    })
}


export function deleteDATA(path) {
    axios.delete(createURL(path))
    .then((response) => {
        console.log(path + " foi deletado com sucesso")
    }).catch((error) => {
        console.error(error);
    })
}
