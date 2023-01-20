import useLocalStorage from "./hooks/useLocalStorage"

function CustonHookLocalStorage() {
    // key & initial value 
    const [task, setTask] = useLocalStorage('task', '')
    const [tasks, setTasks] = useLocalStorage('tasks', [])

    const onSubmit = e => {
        e.preventDefault()
        const taskObj = {
            task,
            completed: false,
            date: new Date().toLocaleDateString()
        }
        setTasks([...tasks, taskObj])
    }
    
    return (
      <>
      <form onSubmit={onSubmit} className="w-25">
        
          <div className="mb-5">
          <label htmlFor="" className="form-label">Task</label>
              <input type="text" className='form-control' value={task} onChange={(e) => setTask(e.target.value)} />
              </div>
          <button className="btn btn-primary">Submit</button>
            </form>
            <hr />
            {tasks.map((task) => (<h3 key={task.date}> { task.task }</h3>) )}
            </>
  )
}

export default CustonHookLocalStorage