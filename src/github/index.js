import React, { Component } from 'react'
import axios from 'axios'
import './index.css'

class Github extends React.Component {
    state = {
        user: 's5935512004',
        data: '',
        isLoading: true
    }
    componentDidMount = () => {
        this.fetchUser(this.state.user)

    }
    fetchUser = (USER) => {
        axios.get(`https://api.github.com/users/${USER}`)
            .then(response => {
                this.setState({ data: response.data })
                console.log(response.data)
            }).finally(() => {
                this.setState({ isLoading: false })
            })
    }
    handleChagne = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        const { data, isLoading } = this.state
        return (
            <div>
                {isLoading === true && (
                    <h1>Loading</h1>
                )}
                {isLoading === false && (
                    <div align='center' class='box'>
                        <input name="user" onChange={this.handleChagne} />
                        <button onClick={() => this.fetchUser(this.state.user)}>Search</button><br />
                        <h1>{this.props.user}</h1>
                        <p class='page'>ID : {data.id} <br></br></p>
                        <p class='page'>URL : {data.url} <br></br></p>
                        <p class='page'>User Name : {data.name} <br></br></p>
                        <p class='page'>Bio : {data.bio} <br></br></p>
                        <img src={data.avatar_url} alt="avatar" width="200px" />
                    </div>
                )}
            </div>
        )
    }
}
export default Github