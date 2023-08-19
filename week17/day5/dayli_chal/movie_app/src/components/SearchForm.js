import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../Style.css'
import {connect} from 'react-redux'
import {moviesThunk} from '../actions/actions'
function SearchForm(props){

    function handellSearch(e){
        e.preventDefault()
        let SearchValue = e.target.parentElement.children[1].value
        props.next(SearchValue)
    }

    return(
        <div className='form'>
            <div className='container'>
                <p><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> Search for a movie , series ..</p>
                <input type='text' name='searchBar' placeholder='Search...' /> 
                <button onClick={handellSearch} className='btn btn-primary' type='submit'>Search</button>
            </div>
        </div>
    )
}

const mapStateToProps =(state)=>{
    return{
        movies : state.movies
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        next : (value)=>{
            dispatch(moviesThunk(value))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);