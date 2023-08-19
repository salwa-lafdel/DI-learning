import React from 'react'
import {Link} from 'react-router-dom'
import '../Style.css'




function Navbar(){

    return(
        <div>
            <nav className="navbar navbar-dark bg-light">
                <Link className='Link_logo' to= '/'> Herolo Weather</Link>
                <div className="form-inline">
                    <ul>
                        <li>
                            <Link className='Link' to= '/'> Home </Link>
                        </li>
                        <li>
                            <Link className='Link' to='/favorites' > Favorites </Link> 
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;