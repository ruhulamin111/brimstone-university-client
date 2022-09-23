import { useEffect } from "react"
import { useState } from "react"

const useAchivement = () => {
    const [achivement, setAchivement] = useState([])
    useEffect(() => {
        fetch('https://nameless-ravine-95222.herokuapp.com/achivement')
            .then(res => res.json())
            .then(data => setAchivement(data))
    }, [achivement])

    return [achivement, setAchivement]
}
export { useAchivement }