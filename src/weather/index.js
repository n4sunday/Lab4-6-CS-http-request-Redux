import React from 'react'
import axios from 'axios'
import './index.css'

class Weather extends React.Component{
    state = {
        data : '',
        zipcode : 80110,
        isLoading : true
    }
    componentDidMount = () => {
        this.getWeather(this.state.zipcode)
        
    }
    getWeather =(zipcode) => {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${zipcode},th&units=metric&APPID=6e22eda0422b463a1a0c4e624e7af0e2`)
        .then(response => {
            this.setState({data: response.data})
            console.log(response.data)
        }).finally(()=>{
            this.setState({isLoading:false})
        })
    }
    handleChagne = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    } 
    render(){
        const {data,isLoading} = this.state
        return(
            <div>
                {isLoading === true && (
                    <h1>กำลังดาวน์โหลด...</h1>
                )}
                {isLoading === false && (
                    <div align='center' class='table'>
                    <h1>Input ZipCode</h1>
                    <input name="zipcode" onChange={this.handleChagne}/>
                    <button color="info" onClick={ () =>this.getWeather(this.state.zipcode)}>Get</button><br/>
                    <tr >City (เมือง) : {data.name}</tr>
                    <tr>Humidity (ความชื้น) : {data.main.humidity}</tr>
                    <tr>Pressure (ความดัน) : {data.main.pressure} ปาสคาล</tr>
                    <tr>Temperature (อุณหภูมิ) : {data.main.temp} องศาเซลเซียส</tr>
                    <tr>Temperature Max (อุณหภูมิสูงสุด) : {data.main.temp_max} องศาเซลเซียส</tr>
                    <tr>Temperature Min (อุณหภูมิต่ำสุด) : {data.main.temp_min} องศาเซลเซียส</tr>
                    <tr>Speed Wind (ความเร็วลม) : {data.wind.speed}  km/h</tr>
                    <tr>Weather (สภาพอากาศ) : {data.weather[0].main}</tr>
                    </div>
                )}
                
                
            </div>


        )
    }
}
export default Weather