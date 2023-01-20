import {React, useState, useEffect} from 'react'

function UseFetch(url, options) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])

    useEffect(() => { 
        const fetchData = async () => { 
            try { 
                console.log('GETTING REQUEST')
                
                const response = await fetch(url, options)
                const resData = await response.json()
                console.log(resData)

                console.log('FINISHED REQUEST')
                

                setData(resData)
                setLoading(false)
            }
            catch (error) { 
                setError(error)
                setLoading(false)
            }
        }
        fetchData()

    }, [])
    return {data, loading, error}
}

export default UseFetch