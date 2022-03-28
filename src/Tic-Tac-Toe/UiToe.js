import React, {useState, useEffect} from 'react'
import { Row, Button } from 'react-bootstrap'
import SquareComp from './SquareComp'
import "./TicToe.css"

const clearState = ["", "", "", "", "", "", "", "", "", ""];

export const UiToe = () => {
    
    const [gameState, updateGameState] = useState(clearState)
    const [isXChance, updateIsXChance] = useState(false)

    const onUserClicked = (index) => {
        let strings = Array.from(gameState);
        if (strings[index])
            return;
        strings[index] = isXChance ? "X" : "0";
        updateIsXChance(!isXChance)
        updateGameState(strings)
    }
    const clearGame = () => {
        updateGameState(clearState)
    }
    useEffect(() => {
        let winner = checkWinner();
        if (winner) {
            clearGame();
            alert(`Ta da ! ${winner} won the Game !`)
        }
    }, [gameState])

    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return null;
    }
  return (
    <>
      <Row className='toe-row'> 
      <SquareComp onClick={() => onUserClicked(0)} state={gameState[0]}/>
      <SquareComp onClick={() => onUserClicked(1)} state={gameState[1]}/>
      <SquareComp onClick={() => onUserClicked(2)} state={gameState[2]}/>
      </Row>  
      <Row className='toe-row'> 
      <SquareComp onClick={() => onUserClicked(3)} state={gameState[3]}/>
      <SquareComp onClick={() => onUserClicked(4)} state={gameState[4]}/>
      <SquareComp onClick={() => onUserClicked(5)} state={gameState[5]}/>
      </Row>
      <Row className='toe-row'> 
      <SquareComp onClick={() => onUserClicked(6)} state={gameState[6]}/>
      <SquareComp onClick={() => onUserClicked(7)} state={gameState[7]}/>
      <SquareComp onClick={() => onUserClicked(8)} state={gameState[8]}/>
      </Row>  
        
      <Button className="clear-Button" onClick={clearGame}>Clear Game</Button>
    </>
  )
}
