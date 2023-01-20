import React, { useState, useCallback} from 'react'

function UseCallback() {
    const [tasks, setTasks] = useState([])
    const addTask = useCallback(() => { 
        setTasks((prevState) => [...prevState, "Some Task"])
    }, [setTasks])

    return (
        <div>
            <Button addTask={addTask} />
            {tasks.map((task, index) => ( <p key={index}> { task }</p> ))}
        </div>
    )
}

const Button = React.memo(({ addTask }) => { 
    console.log('Button Rendered')
    return <button onClick={addTask} className="btn btn-primary"> Add Task</button>
})

export default UseCallback