import { gameData } from "../data/gameData";
import { useState } from "react";

export const useGameFunctions = () => {

    const [startedGame, setstartedGame] = useState(false);
    const [points, setpoints] = useState(0);
    const [dataState, setdataState] = useState(gameData);
    const [currentPosition, setcurrentPosition] = useState();

    const onHandleClick = (index) => {
        if (!startedGame) return;
        setcurrentPosition(index);
        dataState[index].active = true;
        console.log(dataState[index].cssClass);
        dataState[index].cssClass = 'active_card_container';
        isEqual(index);
    }

    const isEqual = (index) => {
        if (dataState[index].image_url == dataState[currentPosition].image_url) {
            setcurrentPosition(-1);
            setdataState([...dataState]);
            setpoints(points + 100);
        } else {
            notEqual(index);
        }
    }

    const notEqual = (index) => {
        addAndQuitAnimation(index);
        setTimeout(() => {
            dataState[index].cssClass = 'card_container';
            dataState[currentPosition].cssClass = 'card_container';
            setcurrentPosition(-1);
            dataState[index].active = false;
            dataState[currentPosition].active = false;
            setdataState([...dataState]);
        }, 600);
    }

    const addAndQuitAnimation = (index) => {
        setTimeout(() => {
            dataState[index].cssClass = 'card_container';
            dataState[currentPosition].cssClass = 'card_container';
            setdataState([...dataState]);
        }, 400);

        setTimeout(() => {
            dataState[index].cssClass = 'active_card_container';
            dataState[currentPosition].cssClass = 'active_card_container';
            setdataState([...dataState]);
        }, 500);
    }

    const onStartGame = () => {
        setTimeout(() => {
            dataState.map((e) => {
                e.active = false;
            });
            setstartedGame(true);
            dataState.map(e => e.cssClass = 'active_card_container');
            setdataState([...dataState]);
        }, 900);

        setTimeout(() => {
            dataState.map(e => e.cssClass = 'card_container');
            setdataState([...dataState]);
        }, 1000);
        dataState.sort(() => Math.random() - 5);
        dataState.map(e => e.active = true);
        setdataState([...dataState]);
    }

    return {
        dataState,
        points,
        onHandleClick,
        isEqual,
        onStartGame,
    }
}
