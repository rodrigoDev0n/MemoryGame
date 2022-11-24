import { useEffect, useRef, useState } from "react"
import { gameData } from "../data/gameData"
import { Cards } from "./index"

export const Game = () => {

    //TODO: Corregir errores:

    const animateContainer = useRef()
    const [startedGame, setstartedGame] = useState(false)
    const [points, setpoints] = useState(0)
    const [dataState, setdataState] = useState(gameData)
    const [currentPosition, setcurrentPosition] = useState()

    const onHandleClick = (index) => {
        if (!startedGame) return;
        setcurrentPosition(index);
        dataState[index].active = true;
        isEqual(index);
    }

    const isEqual = (index) => {
        if (dataState[index].image_url == dataState[currentPosition].image_url) {
            setcurrentPosition(-1);
            setdataState([...dataState]);
            setpoints(points + 100);
        } else {
            setTimeout(() => {
                setcurrentPosition(-1)
                dataState[index].active = false;
                dataState[currentPosition].active = false;
                setdataState([...dataState]);
            }, 500);
        }
    }

    const onStartGame = () => {
        setTimeout(() => {
            dataState.sort(() => Math.random() * 100)
            dataState.map(e => e.active = false)
            setdataState([...dataState])
        }, 1000);
        dataState.sort(() => Math.random() - 3)
        dataState.map(e => e.active = true)
        setdataState([...dataState])
        setstartedGame(true);
    }


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
                                animateContainer={ animateContainer } 
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}
