import { useState, useEffect } from "react"

interface InputFormProps {
    defaultValue?: string
}

const storageFromKey = 'inputValue'

export const InputForm = (props?: InputFormProps) => {
    const [displayError, setDisplayError] = useState<boolean>(false)
    const [inputValue, setInputValue] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')

    const formReadyToSubmit = !displayError || inputValue

    const handleInputChange= (event: any) => {
        const messageLength = event.target.value.length
        setInputValue(event.target.value)
        if (messageLength < 3 || messageLength >20) {
            if (messageLength < 3) {
                setErrorMessage('User name is too short')
            }
            if (messageLength > 20) {
                setErrorMessage('User name is too long')
            }
            setDisplayError(true)
        } else {
            setDisplayError(false)
            setErrorMessage('')
        }
    }

    const handleSubmit = () => {
        if (formReadyToSubmit) {
            localStorage.setItem(storageFromKey, inputValue)
        }
    }

    useEffect(() => {
        let valueToSet =''
        const localStorageData = localStorage.getItem(storageFromKey)
        if (!!localStorageData) {
            valueToSet = localStorageData
        } else {
            if (!!props?.defaultValue) {
                valueToSet = props?.defaultValue
            }
        }
        setInputValue(valueToSet)
    }, [props])

    return <div style={{display: 'flex', flexDirection: 'column', flexWrap: 'wrap'}}>
        {displayError && <div style={{color: 'red'}}>{errorMessage}</div>}
        <div>User name:</div>
        <input onInput={handleInputChange} value={inputValue} type='text'></input>
        <button onClick={handleSubmit} disabled={!formReadyToSubmit}>submit data</button>
        <br></br>
    </div>
}