import { useState } from 'react';
import { useGameFunctions } from "../hooks/useGameFunctions"
import { Cards } from "./index"

export const Game = () => {

    const [activeModal, setactiveModal] = useState(true);

    const {
        dataState,
        points,
        onHandleClick,
        onStartGame,
        animationCard,
    } = useGameFunctions();

    const customModalStyles = {
        content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    return (
        <>
            <div className="title_container">
                <h1>Memory Game</h1>
                <div className="info_container">
                    <button onClick={onStartGame}>Start Game</button>
                    <h1>Puntos: {points}</h1>
                </div>
            </div>
            <div className="main_container">
                <div className="container">
                    {
                        dataState.map((f, i) => (
                            <Cards
                                key={f.id}
                                fruits={f}
                                onClickHandle={onHandleClick}
                                index={i}
                                animationCard={animationCard}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
