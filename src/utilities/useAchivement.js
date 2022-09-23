import { useEffect } from "react"
import { useState } from "react"

const useAchivement = () => {
    const [achivement, setAchivement] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/achivement')
            .then(res => res.json())
            .then(data => setAchivement(data))
    }, [achivement])

    return [achivement, setAchivement]
}
export { useAchivement }