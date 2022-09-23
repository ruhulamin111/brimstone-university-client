import { useEffect } from "react"
import { useState } from "react"

const useFaculty = () => {
    const [faculty, setFaculty] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/faculty')
            .then(res => res.json())
            .then(data => setFaculty(data))
    }, [faculty])

    return [faculty, setFaculty]
}
export { useFaculty }