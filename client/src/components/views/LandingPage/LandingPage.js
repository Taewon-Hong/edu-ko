import React, {useEffect} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

function LandingPage(props) {
    useEffect(() => {
        axios.get('/api/hello')
        .then(response => console.log(response.data))
    }, [])

    const onClickHandler = () => {
        axios.get('api/users/logout')
        .then(response => {
            if(response.data.success === true){
                props.history.push("/login")
            } else {
                console.log(response)
            }
        })
    }

    return (
        <div>
            LandingPage
            <button onClick={onClickHandler}>
                로그아웃
            </button>
        </div>
    )
}

export default withRouter(LandingPage)