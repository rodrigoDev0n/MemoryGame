import { gameData } from "../data/gameData"
import { useRef, useState } from "react"

export const useGameFunctions = () => {

    const [animationCard, setanimationCard] = useState(false)
    const [startedGame, setstartedGame] = useState(false)
    const [points, setpoints] = useState(0)
    const [dataState, setdataState] = useState(gameData)
    const [currentPosition, setcurrentPosition] = useState()

    const onHandleClick = (index) => {
        if (!startedGame) return;
        setcurrentPosition(index);
        setanimationCard(true);
        dataState[index].active = true;
        console.log(index);
        dataState[index].cssClass = 'active_card_container';
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
                dataState[index].cssClass = 'active_card_container';
                dataState[index].active = false;
                dataState[currentPosition].active = false;
                setdataState([...dataState]);
            }, 500);
        }
    }

    const onStartGame = () => {
        setTimeout(() => {
            dataState.sort(() => Math.random() * 8);
            dataState.map((e) => {
                e.active = false;
            });
            setstartedGame(true);
            setdataState([...dataState]);
        }, 1000);
        dataState.map(e => e.cssClass = 'card_container');
        dataState.sort(() => Math.random() - 3);
        dataState.map(e => e.active = true);
        setdataState([...dataState]);
    }

    return {
        dataState,
        animationCard,
        dataState,
        points,
        onHandleClick,
        isEqual,
        onStartGame
    }
}
