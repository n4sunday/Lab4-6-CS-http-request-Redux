import React, { Component } from 'react'
import './index.css'
import { store } from '../App'
import { connect } from 'react-redux'
import { getGit } from '../actions'
class Github extends React.Component {

    componentDidMount = () => {
        this.props.getGit()
    }

    state = { bearState: '' }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    renderGit = () => {
        if (this.props.github)
            return (
                <div>
                    <img src={this.props.github.avatar_url} alt="avatar" width="200px"/>
                    <li >{this.props.github.name}</li>
                    <li >{this.props.github.bio}</li>
                    
                </div>
            )
    }

    render() {
        return (
            <div className='box'>
                {this.renderGit()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        github: state.github
    }
}
//const mapStateToProps = ({github}) => {return {github}}

const mapDispatchToProps = (dispatch) => {
    return {
       
        getGit: () => store.dispatch(getGit()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Github)