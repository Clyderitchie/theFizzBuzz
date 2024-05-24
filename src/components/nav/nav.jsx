import React from "react";
import { Link } from "react-router-dom";

import './nav.css'

function Nav() {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div id='navLayout' className="col-12">
                        <Link id='nav' to='/'>
                            <h1 id='navMe'>
                                The Fizz Buzz
                            </h1>
                        </Link>
                        <div id='navLinks'>
                            <Link id='nav2' to='/about'>
                                <h3>
                                    About
                                </h3>
                            </Link>
                            <Link id='nav3' to='/contact'>
                                <h3>
                                    Contact
                                </h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Nav;