import { useState } from "react"
import { ToDo } from "../components/ToDo"
import { ToDoType } from "../types"

export const ToDoList = () => {

    const [todos, setToDos] = useState<ToDoType[]>([
        { id: 1, title: '筋トレ', done: false, limit: new Date(2023, 8) },
        { id: 2, title: '勉強', done: false, limit: new Date(2023, 8) },
        { id: 3, title: '犬の散歩' , done: false, limit: new Date(2023, 7) },
        { id: 4, title: '洗濯' , done: false, limit: new Date(2023, 7) },
        { id: 5, title: '料理' , done: false, limit: new Date(2023, 7) },
    ])

    const setToDosTitle = (id: number, title: string) => {


        setToDos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        title
                    }
                }
                return todo
            })
        )
    }

    return (
    <>
    <h2>ToDoList</h2>
    {
        todos.map(todo => (
            <ToDo key={todo.id} todo={todo} setToDosTitle={setToDosTitle} />
        ))
        // todos.map(todo => (
        //     <ToDo key={todo.id} todo={todo} />
        // ))
    }
    </>
    )
}
