import React from 'react'
import axios from 'axios'
import './index.css'
import { resetw, setw, store } from '../App'
import { connect } from 'react-redux'

class Weather extends React.Component {
    state = {
        data: '',
        zipcode: 80110,
        isLoading: true
    }
    componentDidMount = () => {
        this.getWeather(this.state.zipcode)

    }
    getWeather = (zipcode) => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${zipcode},th&units=metric&APPID=6e22eda0422b463a1a0c4e624e7af0e2`)
            .then(response => {
                store.dispatch(resetw())
                store.dispatch(setw(''+response.data.name))
                store.dispatch(setw(''+response.data.main.humidity))
                store.dispatch(setw(''+response.data.main.pressure))
                store.dispatch(setw(''+response.data.main.temp))
                store.dispatch(setw(''+response.data.main.temp_max))
                store.dispatch(setw(''+response.data.main.temp_min))
                store.dispatch(setw(''+response.data.wind.speed))
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
                    <h1>กำลังดาวน์โหลด...</h1>
                )}
                {isLoading === false && (
                    <div align='center' class='container-fluid'>
                        <h1>Input ZipCode</h1>
                        <input name="zipcode" onChange={this.handleChagne} />
                        <button color="info" onClick={() => this.getWeather(this.state.zipcode)} class="btn btn-success" style={{ margin:'15px'}} >Get</button><br />
                        <tr >City (เมือง) : {this.props.wt[0]}</tr>
                        <tr>Humidity (ความชื้น) : {this.props.wt[1]}</tr>
                        <tr>Pressure (ความดัน) : {this.props.wt[2]} ปาสคาล</tr>
                        <tr>Temperature (อุณหภูมิ) : {this.props.wt[3]} องศาเซลเซียส</tr>
                        <tr>Temperature Max (อุณหภูมิสูงสุด) : {this.props.wt[4]} องศาเซลเซียส</tr>
                        <tr>Temperature Min (อุณหภูมิต่ำสุด) : {this.props.wt[5]} องศาเซลเซียส</tr>
                        <tr>Speed Wind (ความเร็วลม) : {this.props.wt[6]}  km/h</tr>
                    </div>
                )}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        wt: state.wt
    }
}
const mapDispatchToProps = (dispatch) => {
    return { 
        resetw: ()=> dispatch(resetw()),
        setw: ()=> dispatch(setw())
    }
 }
export default connect(mapStateToProps,mapDispatchToProps)(Weather)