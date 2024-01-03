"use client";
import styles from "./page.module.css";
import { useState } from "react";
import Options from "@/components/sudoku/options/Options";
import Profile from "@/components/sudoku/profile/Profile";
import SudokuBoard from "@/components/sudoku/sudokuboard/SudokuBoard";

const Sudoku = () => {
  const [board, setBoard] = useState([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ]);

  const [isSolving, setisSolving] = useState(false);
  const [settings, setSettings] = useState({
    difficulty: 20,
    verification: false,
    board_highlight: true,
    zen_mode_solving: false,
    theme: false,
  });
  const [userSolving, setuserSolving] = useState(false);

  const gameState = {
    board,
    setBoard,
    isSolving,
    setisSolving,
    settings,
    setSettings,
    userSolving,
    setuserSolving,
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.thirds} ${styles.leftThird}`}>
        <Options state={gameState} />
      </div>

      <div className={`${styles.thirds} ${styles.midThird}`}>
        <SudokuBoard state={gameState} />
      </div>
      <div className={`${styles.thirds} ${styles.rightThird}`}>
        <Profile state={gameState} />
      </div>
    </div>
  );
};

export default Sudoku;
