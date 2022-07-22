import { useState,useEffect } from "react"
import axios from "axios"
import List from "./List"

export default function TourList() {
    const [isLoading, setIsLoading] = useState(false)
    const [list, setList] = useState([])
    const tourList = async () => {
        try {
            const res = await fetch('https://course-api.com/react-tours-project')
            setIsLoading(false)
            console.log(res)
            const resData = await res.json()
            setList(resData)
        } catch(error) {
            setIsLoading(false)
            return error
        }
    }
    useEffect(() => {
        tourList()
    }, [])
    const removeTourHandler = (id) => {
        const listOfTour = [...list]
        const filterList = listOfTour.filter((list) => list.id !== id)
        setList(filterList)
    }
    if (isLoading) {
        return(
            <div>Loading...</div>
        )
    }
    if (list.length === 0) {
        return(
            <div className="container d-flex justify-content-center">
                <div>
                    <h1>No tour list available now</h1>
                    <button className="btn btn-success" onClick={() => tourList()}>Refresh</button>
                </div>
            </div>
        )
    }
    return(
        <div className="container d-flex justify-content-center mt-4">
            <div>
                {!isLoading && <List tours={list} removeTour={removeTourHandler} />}
                <button onClick={() => setList([])} className="btn btn-danger mt-4">Not Interested at all</button>
            </div>
        </div>
    )
}