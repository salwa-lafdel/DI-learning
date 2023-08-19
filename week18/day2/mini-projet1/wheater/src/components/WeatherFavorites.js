import React from 'react'
import {connect} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import '../Style.css'
import {weatherForecastThunk} from '../actions/action'

function WeatherFavorites(props){
    const navigate = useNavigate()
    function getDetails(name){
            props.next(name)
            navigate('/')
    }

    return(
        <div className='main'>
            <h1>favorites Weather</h1>
            <div className='display favory'>
                {props.favories.map((city)=>(
                    <div className='cards' key={city.name} onClick={() => getDetails(city.name)}>
                        <p> City : <span className='day'>{city.name}</span> </p>
                        <p> Temperature : <span className='min'>{city.temp} ℃</span> </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    console.log('favories', state.favories)
    return {
        name : state.cityName,
        temperateur : state.temperateur,
        nextFiveDays : state.nextFiveDays,
        favories : state.favories,
        error : state.error
    }
}


const mapDispatchToProps = (dispatch) =>{

    return {
        next: (value) =>{
            dispatch(weatherForecastThunk(value))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(WeatherFavorites);