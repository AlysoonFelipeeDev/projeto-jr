import styled from "styled-components"

export default function CreateTasks() {
    return (
        <ContainerTask>
            <Header>
                <h1>Adicionar Tarefas</h1>
                <button>+</button>
            </Header>
            <Form>
                <input
                    type="text"
                    placeholder="Adicione sua tarefa"
                />
            </Form>
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
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    input {
        margin: 0 20px 0 20px;
        padding: 6px;
        border-radius: 5px;
        border: 2px solid ;
    }
`
