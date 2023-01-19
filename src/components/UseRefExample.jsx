import {useRef, React} from 'react'

function UseRefExample() {
    // 1. Create useRef() object
    const inputRef = useRef()

    // 2. useRef obj will return the dom obj of the assigned element
    // In this case we can use it in a call back function
    const onSubmit = e => { 
        e.preventDefault()
        console.log(inputRef.current.value)
    }

    return (
        <div>
            {/* Callback Function */}
            <form onSubmit={ onSubmit }>
                <label htmlFor="name">Name</label>
                {/* useRef is being assigned to input */}
                <input type="text" id='name' ref={inputRef} className="form-control" />
                <button type="submit" className='btn btn-primary'>Submit</button>
            </form>
        </div>
  )
}

export default UseRefExample