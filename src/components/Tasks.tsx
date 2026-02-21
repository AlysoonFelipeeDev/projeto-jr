import { useEffect, useState } from "react"
import styled from "styled-components"
import type { Task } from "./types/tasks.type"
import axios from "axios"

export default function Tasks() {
    const [tasks, setTasks] = useState<Task[]>([])

    async function getTasks(){
        try {
            const response = await axios.get("https://699670627d17864365742c8c.mockapi.io/tasks")
            setTasks(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getTasks()
    })

    return (
        <ContainerTask>
            <Header>
                <h1>Tarefas</h1>
                <button>Adicionar Tarefa</button>
            </Header>
                <DailyTasks>
                    <ul>
                        {tasks.map(task => (
                        <li>
                            - {task.title}
                            <EditDelete>
                                <Done>Ok</Done>
                                <div>Editar</div>
                                <Delete>X</Delete>
                            </EditDelete>
                        </li>
                        ))}
                    </ul>
                </DailyTasks>
        </ContainerTask>
    )
}

const ContainerTask = styled.div`
    width: 100%;
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        margin: 20px 20px;
        font-size: 3em
    } 
    button {
        margin: 20px 20px;
        font-size: 20px;
        cursor: pointer;
        border-radius: 5px;
    }
`

const DailyTasks = styled.div`
    margin: 20px;
    border-radius: 5px;
    background-color: #99b3dd;
    ul {
        border: 1px solid transparent;
    }
    li {
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        margin: 20px;
    }
`
const EditDelete = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;
`

const Delete = styled.div`
    color: red
`

const Done = styled.div`
    color: green;
`