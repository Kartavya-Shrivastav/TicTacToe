import circleImg from '../assets/circle.png';
import crossImg from '../assets/cross.png';
import React, { useState } from 'react';


let data = [
    "", "", "",
    "", "", "",
    "", "", ""
];

function TicTacToe() {
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);

    const handleClick = (event, index) =>{
        if (lock) return;
        if(count % 2 === 0) {
            event.target.innerHTML = `<img src='${crossImg}' />`;
            data[index] = "X";
        }
        else {
            event.target.innerHTML = `<img src='${circleImg}' />`;
            data[index] = "O";
        }
        setCount(count++);
        checkWin();
    }

    const won = (data) => {
        setLock(true);
    }

    const checkWin = () => {
        if(data[0]===data[1] && data[1]===data[2] && data[0]!=="" ) won(data);
        else if(data[3]===data[4] && data[4]===data[5] && data[3]!=="" ) won(data);
        else if(data[6]===data[7] && data[7]===data[8] && data[6]!=="" ) won(data);
        else if(data[0]===data[3] && data[3]===data[6] && data[0]!=="" ) won(data);
        else if(data[1]===data[4] && data[4]===data[7] && data[1]!=="" ) won(data);
        else if(data[2]===data[5] && data[5]===data[8] && data[2]!=="" ) won(data);
        else if(data[0]===data[4] && data[4]===data[8] && data[0]!=="" ) won(data);
        else if(data[2]===data[4] && data[4]===data[6] && data[2]!=="" ) won(data);
    }

    return (
        <div className=" min-h-screen bg-[#0f1b21] ">
            <div className="flex flex-col justify-center items-center gap-10 p-10 ">
                <h1 id="title" className="text-5xl text-white font-bold mt-10">
                    Tic Tac Toe in <span className="text-[#26ffcb]">React</span>
                </h1>
                <div id="gameBoard" className="flex flex-col h-[540px] w-[540px] m-auto">
                    <div id="row1" className="flex flex-row ">
                        <div className="flex justify-center items-center bg-[#1f3540] border-4 border-[#0f1b21] rounded-lg cursor-pointer h-[180px] w-[180px]"
                            onClick={(event) => handleClick(event, 0)}></div>
                        <div className="flex justify-center items-center bg-[#1f3540] border-4 border-[#0f1b21] rounded-lg cursor-pointer h-[180px] w-[180px]"
                            onClick={(event) => handleClick(event, 1)}></div>
                        <div className="flex justify-center items-center bg-[#1f3540] border-4 border-[#0f1b21] rounded-lg cursor-pointer h-[180px] w-[180px]"
                            onClick={(event) => handleClick(event, 2)}></div>
                    </div>
                    
                    <div id="row2" className="flex flex-row">
                        <div className="flex justify-center items-center bg-[#1f3540] border-4 border-[#0f1b21] rounded-lg cursor-pointer h-[180px] w-[180px]"
                            onClick={(event) => handleClick(event, 3)}></div>
                        <div className="flex justify-center items-center bg-[#1f3540] border-4 border-[#0f1b21] rounded-lg cursor-pointer h-[180px] w-[180px]"
                            onClick={(event) => handleClick(event, 4)}></div>
                        <div className="flex justify-center items-center bg-[#1f3540] border-4 border-[#0f1b21] rounded-lg cursor-pointer h-[180px] w-[180px]"
                            onClick={(event) => handleClick(event, 5)}></div>
                    </div>
                    
                    <div id="row3" className="flex flex-row">
                        <div className="flex justify-center items-center bg-[#1f3540] border-4 border-[#0f1b21] rounded-lg cursor-pointer h-[180px] w-[180px]"
                            onClick={(event) => handleClick(event, 6)}></div>
                        <div className="flex justify-center items-center bg-[#1f3540] border-4 border-[#0f1b21] rounded-lg cursor-pointer h-[180px] w-[180px]"
                            onClick={(event) => handleClick(event, 7)}></div>
                        <div className="flex justify-center items-center bg-[#1f3540] border-4 border-[#0f1b21] rounded-lg cursor-pointer h-[180px] w-[180px]"
                            onClick={(event) => handleClick(event, 8)}></div>
                    </div>

                </div>
                <button id="resetButton"
                        className="px-4 py-2 bg-[#26ffcb] text-black font-semibold rounded hover:bg-[#1ed8c3] transition">
                    Reset Game
                </button>
            </div>
        </div>
    );
}

export default TicTacToe;