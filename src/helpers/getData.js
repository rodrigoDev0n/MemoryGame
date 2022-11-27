import { gameData } from "../data/gameData"

export const getData = () => {
    localStorage.setItem('gameData', JSON.stringify(gameData));
    return JSON.parse(localStorage.getItem('gameData'));
}
