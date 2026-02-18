import styled from "styled-components"

export default function Login(){
    return (
        <>
            <header>
                <Title>Lista de Tarefas</Title>
            </header>
            <Form>
                <input 
                type="email"
                placeholder="email" 
                />
                <input 
                type="password"
                placeholder="senha" 
                />
                <ContainerButton>
                    <Enter type="submit">Entrar</Enter>
                </ContainerButton>
            </Form>
        </>
    )
}

const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    input {
        margin: 0 20px 10px 20px;
        padding: 8px;
        border-radius: 5px;
        border: 2px solid #cacaca;
    }
`

const Enter = styled.button`
    border-radius: 5px ;
    border: none;
    width: 50%;
    padding: 7px;
    background-color: #5e5efc;
    color: #ffff;
    font-size: 15px;
    cursor: pointer;
`

const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`