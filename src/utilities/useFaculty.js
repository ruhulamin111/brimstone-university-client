import { useEffect } from "react"
import { useState } from "react"

const useFaculty = () => {
    const [faculty, setFaculty] = useState([])
    useEffect(() => {
        fetch('https://nameless-ravine-95222.herokuapp.com/faculty')
            .then(res => res.json())
            .then(data => setFaculty(data))
    }, [faculty])

    return [faculty, setFaculty]
}
export { useFaculty }