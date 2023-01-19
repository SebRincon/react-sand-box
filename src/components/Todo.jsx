
import {React,useEffect, useRef, useState} from 'react'

function Todo() {
    // state 
    const [loading, setLoading] = useState(true)
    const [todo, setTodo] = useState({})

    const isMounted = useRef(true)

    // On boot run the fetch with a 3 sec timout 
    // Toggling the display to off will cause the leak
    useEffect(() => { 
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((res) => res.json())
            .then((data) => { 
                setTimeout(() => { 

                    // Checking if the component is mounted
                    if (isMounted) { 
                        setTodo(data)
                        setLoading(false)
                    }
                }, 3000)
            })
        // Function runs when the component is unmounted
        return () => { isMounted.current = false }
    }, [isMounted])


    return (loading ? <h3>Loading...</h3> : <h1>{ todo.title }</h1>)
}

export default Todo 