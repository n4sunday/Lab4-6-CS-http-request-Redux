import React, { Component } from 'react'
import axios from 'axios'
import './index.css'
import { add, minus, set, reset,store } from '../App'
import { connect } from 'react-redux'
class Github extends React.Component {
    state = {
        user: 's5935512004',
        data:[],
        isLoading: true
    }
    componentDidMount = () => {
        this.fetchUser(this.state.user)
    }
    fetchUser = (USER) => {
        axios.get(`https://api.github.com/users/${USER}`)
            .then(response => {
                store.dispatch(reset())
                store.dispatch(set(''+response.data.id))
                store.dispatch(set(''+response.data.url))
                store.dispatch(set(''+response.data.name))
                store.dispatch(set(''+response.data.bio))
                store.dispatch(set(''+response.data.avatar_url))
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
            <div class='box'>
                {isLoading === true && (
                    <h1>Loading</h1>
                )}
                {isLoading === false && (
                    <div align='center' >
                        <input name="user" onChange={this.handleChagne} placeholder="Username"/>
                        <button onClick={() => this.fetchUser(this.state.user)} class="btn btn-success"  style={{ margin:'15px'}} >Search</button><br />
                        <h1>{this.props.user}</h1>
                        <p class='page'>ID : {this.props.githubs[0]} <br></br></p>
                        <p class='page'>URL : {this.props.githubs[1]} <br></br></p>
                        <p class='page'>User Name : {this.props.githubs[2]} <br></br></p>
                        <p class='page'>Bio : {this.props.githubs[3]} <br></br></p>
                        <img src={this.props.githubs[4]} alt="avatar" width="200px" />
                        <h2>Redux</h2>
                        Counter: {this.props.number} <br />
                        <button onClick={() => store.dispatch(add())} class="btn btn-danger">+</button>
                        <button onClick={() => store.dispatch(minus())} class="btn btn-danger" style={{ margin: '5px' }}>-</button>

                    </div>
                )}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        number: state.number, 
        githubs: state.githubs
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        
        add : ()=>dispatch(add()),
        minus: ()=> dispatch(minus()),
        set: ()=> dispatch(set()),
        reset: ()=> dispatch(reset())
    }
 }
 

export default connect(mapStateToProps,mapDispatchToProps)(Github)