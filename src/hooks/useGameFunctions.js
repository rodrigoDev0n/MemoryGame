import { useState } from "react";
import JSConfetti from "js-confetti";
import { getData } from "../helpers/getData";

export const useGameFunctions = () => {
    const [startedGame, setstartedGame] = useState(false);
    const [points, setpoints] = useState(0);
    const [dataState, setdataState] = useState(getData);
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
        if (dataState[index].name == dataState[currentPosition].name) {
            dataState[index].cssClass = 'matched_active_card_container';
            dataState[currentPosition].cssClass = 'matched_active_card_container'; 

            setcurrentPosition(-1);
            setdataState([...dataState]);
            setpoints(points + 100);
        } else {
            notEqual(index);
            setstartedGame(false);
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
        }, 1050);

        setTimeout(() => {
            setstartedGame(true);
        }, 1065);
    }

    const notSelectedImage = (index) => {
        dataState.find(e => {
            if (e.active && dataState[currentPosition].active) {
                
            }
        });
    }

    const addAndQuitAnimation = (index) => {
/*         setTimeout(() => {
            dataState[index].cssClass = 'card_container';
            dataState[currentPosition].cssClass = 'card_container';
            setdataState([...dataState]);
        }, 400);

        setTimeout(() => {
            dataState[index].cssClass = 'active_card_container';
            dataState[currentPosition].cssClass = 'active_card_container';
            setdataState([...dataState]);
        }, 500); */

        notMatchedAnimation(index);
    }

    const notMatchedAnimation = (index) => {
        setTimeout(() => {
            dataState[index].cssClass = 'not_matched_active_card_container';
            dataState[currentPosition].cssClass = 'not_matched_active_card_container';
            setdataState([...dataState]);
        }, 750);

        setTimeout(() => {
            dataState[index].cssClass = 'card_container';
            dataState[currentPosition].cssClass = 'card_container';
            setdataState([...dataState]);
        }, 1000);
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
        dataState.sort((a, b) => Math.random() - 0.5);
        dataState.map(e => e.active = true);
        setdataState([...dataState]);
    }

    const addWinConfetti = () => {
        if(points < 400) return;
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti({
            emojis: ['🥦', '🍎', '🍉', '🍓', '🍒', '🥒'],
        });
        resetGame();
    }

    const resetGame = () => {
        setpoints(0);
        setstartedGame(false);
        dataState.map(e => e.active = false);
        setTimeout(() => {
            dataState.map(e => e.cssClass = 'active_card_container');
        }, 1000);

        setTimeout(() => {
            dataState.map(e => e.cssClass = 'card_container');
        }, 1100);
    }

    return {
        addWinConfetti,
        dataState,
        points,
        onHandleClick,
        isEqual,
        onStartGame,
    }
}
