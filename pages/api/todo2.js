function todoList(req, res) {
    const list = {
        teste1: 1,
        teste2: 2,
        teste3: 3,
        teste4: 4,
        in: 'ForJOB = Todo',
    }

    res.json(list)
}

todoList()