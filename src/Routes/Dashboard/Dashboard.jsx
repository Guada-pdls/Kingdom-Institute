import { useEffect } from "react"

const Dashboard = () => {
    useEffect(() => {
        fetch('/api/auth/auth', {
            method: 'GET',
            credentials: 'include',
        }).then(res => {
            res.json()
        }).then(data => {
            console.log(data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return (
        <div>Dashboard</div>
    )
}

export default Dashboard