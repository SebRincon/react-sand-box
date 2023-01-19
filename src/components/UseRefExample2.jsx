import {useState, useEffect, useRef, React} from 'react'

function UseRefExample2() {
    const [name, setName] = useState('')

    // 1. Set refs with initial state
    const renders = useRef(1)
    const prevName = useRef('')

    // 2. Setup useEffect update on render 
    useEffect(() => { 
        renders.current = renders.current + 1
        prevName.current = name
    }, [name])
    return (
        
        <div>
            <h1>Renders: {renders.current}</h1>
            <h2>Prev Name State: { prevName.current }</h2>
            <h3>
                {/* Callback function that will refresh state */}
                <input value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="form-control mb-3" />
            </h3>
        </div>
    )
}

export default UseRefExample2