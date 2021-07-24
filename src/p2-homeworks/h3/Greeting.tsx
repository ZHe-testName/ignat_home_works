import React, { ChangeEvent, KeyboardEvent } from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void // need to fix any
    addUser: () => void // need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLDivElement>) => void
    error: string | null// need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, onKeyPressHandler, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.noerror; // need to fix with (?:)

    return (
        <div>
            <div className={s.inputField}>
                <input 
                    type='text'
                    className={inputClass}
                    value={name} 
                    onChange={setNameCallback}
                    onKeyPress={onKeyPressHandler}/>
                <button 
                    onClick={addUser}
                    disabled={Boolean(error)}>add</button>
                <span>{totalUsers}</span>
            </div>

            <span className={s.errorMessage}>{error}</span>
        </div>
    )
}

export default Greeting
