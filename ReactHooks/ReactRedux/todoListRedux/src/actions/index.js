export const addTodo = (data) => {
    console.log("addtodo")
    return {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString,
            data: data
        }

    }
}
export const deleteTodo = () => {
    return {
        type: "DELETE_TODO"

    }
}
export const removeTodo = () => {
    return {
        type: "REMOVE_TODO"

    }
}
