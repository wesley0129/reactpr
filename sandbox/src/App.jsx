import { useState } from 'react';

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  //useState는 상태를 관리하는 Hook으로, 배열을 반환함. 첫 번째 요소는 현재 상태, 두 번째 요소는 상태를 업데이트하는 함수.
  const [squares, setSquares] = useState(Array(9).fill(null));
  //부모 컴포넌트의 상태가 handleClick에 의해 변경되면 모든 자식 컴포넌트는 자동으로 리렌더링됨.
  function handleClick(i) {
    if (squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  
  return (
  <>
  <div className="board-row">
    <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
    <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
    <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
  </div>
  <div className="board-row">
    <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
    <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
    <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
  </div>
  <div className="board-row">
    <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
    <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
    <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
  </div>
  </>
  );
}

function Square({ value, onSquareClick }) {
  return (
  <button className="square" onClick={onSquareClick}>{value}</button>
  );
}

