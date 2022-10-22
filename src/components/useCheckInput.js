import { useState } from 'react'
import { validEmail, passwordLength } from './constants'

const useCheckInput = (initialValue) => {
    const [inputValue, setInputValue] = useState(initialValue)
    const [isEmailError, setIsEmailError] = useState('')
    const [isPassError, setIsPassError] = useState('')

    const onBlur = ({ target: { name, value } }) => {
        switch (name) {
            case 'password':
                if (value.length && value.length < passwordLength)
                    setIsPassError('At least 6 characters')
                break
            case 'email':
                if (value.length && !value.match(validEmail))
                    setIsEmailError('Email is not valid')
                break
            default:
                break
        }
    }

    const onChange = ({ target: { value } }) => {
        setInputValue(value)
        setIsEmailError(!value)
        setIsPassError(!value)
    }

    return {
        inputValue,
        isEmailError,
        isPassError,
        onBlur,
        onChange,
    }
}

export default useCheckInput
