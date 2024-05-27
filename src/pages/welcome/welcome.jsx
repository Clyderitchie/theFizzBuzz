import React from "react";
import { Link } from "react-router-dom";

import './welcome.css';

function Welcome() {

    return (
        <>
            <div id='welcomeOSC'>
                <h1 id='welTi'>
                    Welcome to a new take on a classic, FizzBuzz.
                </h1>
                <div id='welISC'>
                    <p id='welIn'>
                        In this version of the classic Programmers starter project,
                        your skills will be tested against the clock.
                    </p>
                    <p id='welIn2'>
                        Can you do it?
                    </p>
                </div>
            </div>
            <div id='welcomeOSC2'>
                <div id='welISC2'>
                    <Link to='/game'>
                        <button id='btn1'>
                            Game
                        </button>
                    </Link>
                    <Link to='/'>
                        <button id='btn2'>
                            Rules
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
};

export default Welcome;