// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({ onSubmitUsername }) {
    // 🐨 add a submit event handler here (`handleSubmit`).
    // 💰 Make sure to accept the `event` as an argument and call
    // `event.preventDefault()` to prevent the default behavior of form submit
    // events (which refreshes the page).

    // um ref em react é uma dorma dee fazer referencia a um elemento de formulario
    let usernameref = React.useRef()

    //criar um estado
    /* 
    react.setstate() retorna um vetor na qual
    * o 1 elemento é variavel que vai armazenar o estado
    * o 2 elemento é o nome de uma funcao que sera utilizadapara
     atualizar o estado, seu nome por convencao é sempre set + 
     o nome de variavel de estado com inicial maiscula
     
    * Opcionalmente, pode ser passado ao usestate() um valor inicial para o estado
    */
    let [error, setEror] = React.useState('')

    function handleChange(event) {
        // validacao: sera que o usuario escreveu o username totalmente em minuscalas ?
        const username = event.target.value
        if (username.tolowercase() !== username) {
            setEror('O username deve ser informado totalmente minusculas')
        }
        else setEror('')
    }

    function handlesubmit(event) {
        event.preventDefault() //evita que a pagina recarregue
        // CAPTURAr o valor do imput (caixa de texto)
        //const username= document.getElementById('username').Value
        //const username= document.querySelector('username').Value // outra forma

        /*
        event = o enveto de envio (submit)
        target = o destino do evento, o formulario (form)
        elements[0]- o primeiro elemento dentro do form
        */
        //const username = event.target.elements[0].value
        const username = usernameref.current.value // outra forma de fazer
        onSubmitUsername(username)


    }


    // 🐨 get the value from the username input (using whichever method
    // you prefer from the options mentioned in the instructions)
    // 💰 For example: event.target.elements[0].value
    // 🐨 Call `onSubmitUsername` with the value of the input

    // 🐨 add the onSubmit handler to the <form> below

    // 🐨 make sure to associate the label to the input.
    // to do so, set the value of 'htmlFor' prop of the label to the id of input


    return (
        <form onSubmit={handlesubmit}>
            <div>
                {/* Em jsx <label htmlfor="username"> equivale em html puro a <label for="username">*/}
                <label htmlfor="username">Username:</label>
                <input ref={usernameref} id="username" type="text" onChange={handleChange} />
                <div style={{ color: 'red' }} role="alert">{error}</div>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

function App() {
    const onSubmitUsername = username => alert(`You entered: ${username}`)
    return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
