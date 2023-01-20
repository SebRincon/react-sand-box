import {React,useEffect, useRef, useState, useMemo} from 'react'

function UseMemoExample() {
    const [number, setNumber] = useState(1)
    const [inc, setInc] = useState(0)

    const renders = useRef(1)
    useEffect(() => { 
        renders.current = renders.current + 1
    })

    // Expensive function will rerun if the params are the same
    // const sqrt = getSqrt(number)
    const sqrt = useMemo(() => getSqrt(number), [number])
    
    const onClick = () => { 
        setInc((prevState) => { 
            console.log(prevState +1)
            return prevState +1 
        })
    }

    return (
        <div>
            <input type="number" value={number} onChange={(e) => setNumber( e.target.value )} 
                className="form-control w-25" />
            <h2 className='my-3'>Sqrt: {number} = { sqrt }</h2>
            <button className="btn btn-primary" onClick={onClick}> Re-Render </button>
            <h3>Renders: {renders.current}</h3>
        </div>
    )
}

function getSqrt(n) {
    for (let i = 0; i <= 10000; i++){
        console.log(i)
    }
    console.log("Expensive Function")

    return Math.sqrt(n)
}

export default UseMemoExample