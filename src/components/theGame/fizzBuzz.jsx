import React, { useState, useEffect, useRef } from 'react';

import './game.css';

function FizzBuzz() {
    const [score, setScore] = useState(parseInt(localStorage.getItem('score')) || 0);
    const [scores, setScores] = useState(JSON.parse(localStorage.getItem('scores')) || []);
    const [timer, setTimer] = useState(60);
    const [randomNumber, setRandomNumber] = useState(null);
    const [selectedBtn, setSelectedBtn] = useState('');
    const [gameStarted, setGameStarted] = useState(false);
    const scoreListRef = useRef(null);
    const fizzRef = useRef(null);
    const buzzRef = useRef(null);
    const fizzBuzzRef = useRef(null);
    const nothingRef = useRef(null);
    const startBtnRef = useRef(null);
    const newGameBtnRef = useRef(null);

    useEffect(() => {
        generateRandomNumber();
    }, []);

    useEffect(() => {
        if (timer <= 0) {
            saveScore();
        }
    }, [timer]);

    const startTimer = () => {
        setGameStarted(true);
        const countdown = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer <= 0) {
                    clearInterval(countdown);
                    return prevTimer;
                }
                return prevTimer - 1;
            });
        }, 1000);
    };

    const generateRandomNumber = () => {
        const newRandomNumber = Math.floor(Math.random() * 1000);
        setRandomNumber(newRandomNumber);
    };

    const handleButtonClick = (btnType) => {
        setSelectedBtn(btnType);
        console.log(`${btnType} button clicked`);
        compareAnswers(btnType);
        generateRandomNumber();
    };

    const compareAnswers = (btnType) => {
        const isFizz = randomNumber % 3 === 0;
        const isBuzz = randomNumber % 5 === 0;
        const isFizzBuzz = isFizz && isBuzz;
        const isNothing = !isFizz && !isBuzz;

        if ((btnType === 'fizzBuzz' && isFizzBuzz) ||
            (btnType === 'fizz' && isFizz) ||
            (btnType === 'buzz' && isBuzz) ||
            (btnType === 'nothing' && isNothing)) {
            setScore(prevScore => prevScore + 1);
        }
    };

    const saveScore = () => {
        const newScore = { id: "CR", score };
        const updatedScores = [...scores, newScore].sort((a, b) => b.score - a.score).slice(0, 5);
        setScores(updatedScores);
        localStorage.setItem('scores', JSON.stringify(updatedScores));
        setScore(0);
    };

    const handleNewGameClick = () => {
        setScore(0);
        setTimer(60);
        generateRandomNumber();
        setSelectedBtn('');
        setGameStarted(false);
    };

    return (
        <>
            <div id='gaOSC'>
                <div id='gaHead'>
                    <div id='gaStISC'>
                        <button id='gaStBtn' ref={startBtnRef} onClick={startTimer}>
                            Start
                        </button>
                        <button id='gaNewBtn' ref={newGameBtnRef} onClick={handleNewGameClick}>
                            New Game
                        </button>
                    </div>
                </div>
                {gameStarted && (
                    <div id='conOSC'>
                        <div id='gaISC'>
                            <div id='anOSC'>
                                <button id='btnAn' ref={fizzRef} onClick={() => handleButtonClick('fizz')}>
                                    Fizz
                                </button>
                                <button id='btnAn1' ref={buzzRef} onClick={() => handleButtonClick('buzz')}>
                                    Buzz
                                </button>
                                <button id='btnAn2' ref={fizzBuzzRef} onClick={() => handleButtonClick('fizzBuzz')}>
                                    FizzBuzz
                                </button>
                                <button id='btnAn3' ref={nothingRef} onClick={() => handleButtonClick('nothing')}>
                                    Nothing
                                </button>
                            </div>
                        </div>
                        <div id='gaISC2'>
                            <div id='timer'>
                                <h4>Time left: {timer} seconds</h4>
                            </div>

                            <div id='numOSC'>
                                <h4>{randomNumber}</h4>
                            </div>

                            <div id='score'>
                                <h4>Score: {score}</h4>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default FizzBuzz;












