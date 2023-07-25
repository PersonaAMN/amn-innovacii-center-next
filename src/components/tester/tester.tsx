'use client'
import { useState, useMemo } from "react"

function createUser(name, surname) {
    const user = {name, surname}
    console.log(user)
    return user
}

export const Tester = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [counter, setCounter] = useState(0)

    const user = useMemo(() => createUser(name, surname), [name, surname])

    return (<>
        <div className="flex flex-col max-w-md">
            <button onClick={() => setCounter(counter + 1)}>На меня нажали {counter} раз</button>
            <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            
            <input
                type="text"
                value={surname}
                onChange={e => setSurname(e.target.value)}
            />
        </div>
        <pre>{JSON.stringify(user, null, 2)}</pre>
    </>);
}