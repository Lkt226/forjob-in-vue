let user = {
    name: 'lkt226',
    modules:{
        'todolist_19885sad15': {
            id: '19885sad15',
            name: 'lista 1',
            typeId: 'Todolist',
            content: {
                '**inv**': {
                    id: '**inv**',
                    text: '**inv**',
                    checked: false,
                },
                'teste1': {
                    id: 'teste1',
                    text: 'teste1',
                    checked: false,
                }
            },
        },
        timer_18dsa61: {type: 'Timer'},
    }
}

async function getUser() {
    const api = require('./global/api_editor')  
    const data = await api.getDATA('/users/user_jojisdm3165')
    user = data
    return data
}

module.exports = {user, getUser}

// Pegar online as infos. caminho: /users/user_jojisdm3165