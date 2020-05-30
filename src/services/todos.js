import api from './apiConfig'

export const getTodos = async () => {
    try{
        const resp = await api.get('/todos')
        console.log(resp)
        return resp.data.todos
    } catch(error) {
        throw error
    }
}
export const getTodoById = async id => {
    try {
        const resp = await api.get(`/todos/${id}`)
        return resp.data.todo
    } catch(error) {
        throw error
    }
}

export const createTodo = async todo => {
    try {
        console.log(todo)
        const resp = await api.post('/todos', todo)
        return resp
    } catch(error) {
        throw error
    }
}

export const updateTodo = async(id, roster) => {
    try {
        const resp = await api.put(`/todos/${id}`)
        console.log(resp.data)
        return resp.data
    } catch(error) {
        throw error
    }
}

export const deleteTodo = async (id) => {
    try {
        const resp = await api.delete(`/todos/${id}`)
        console.log(resp.data)
        return resp.data
    } catch(error) {
        throw error
    }
}