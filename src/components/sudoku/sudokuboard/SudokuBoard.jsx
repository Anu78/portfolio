import "./sudokuboard.css";
import "@/lib/Sudoku";
import { useState } from "react";
import { validBoard } from "@/lib/Sudoku";

const SudokuBoard = ({state}) => {
  const { isSolving, board, setBoard, settings } = state;

  const [focusedCell, setFocusedCell] = useState({ row: null, col: null });

  const [errorPos, seterrorPos] = useState([]);

  const handleChange = (e, row, col) => {
    let newValue = e.target.value;
    if (newValue.length > 1) return;
    if (newValue === "") newValue = 0;
    const newBoard = [...board];
    newBoard[row][col] = parseInt(newValue, 10);
    setBoard(newBoard);

    if (settings["verification"]) {
      let boardError = validBoard(board);
      if (!boardError) {
        seterrorPos([]);
      } else {
        seterrorPos(boardError);
      }
    }
  };

  const handleFocus = (row, col) => {
    setFocusedCell({ row, col });
  };

  const shouldHighlight = (row, col, board_highlight) => {
    if (!board_highlight) return false;

    if (focusedCell.row === null || focusedCell.col === null) {
      return false;
    }

    // Check if in the same row or column
    if (focusedCell.row === row || focusedCell.col === col) {
      return true;
    }

    // Check if in the same 3x3 box
    const startRow = Math.floor(focusedCell.row / 3) * 3;
    const startCol = Math.floor(focusedCell.col / 3) * 3;

    return (
      row >= startRow &&
      row < startRow + 3 &&
      col >= startCol &&
      col < startCol + 3
    );
  };

  return (
    <form id="sudoku-board">
      <table>
        <tbody>
          {board.map((row, rowIndex) => (
            <tr id={"row" + rowIndex} className="table-row" key={rowIndex}>
              {row.map((cellValue, columnIndex) => {
                const isHighlighted = shouldHighlight(
                  rowIndex,
                  columnIndex,
                  settings.board_highlight,
                );
                const isErrorCell =
                  errorPos &&
                  settings.verification &&
                  errorPos[0] === rowIndex &&
                  errorPos[1] === columnIndex;

                const cellClasses = `table-cell col${columnIndex} ${
                  isHighlighted ? "highlight" : ""
                } ${isErrorCell ? "error-cell" : ""}`;

                return (
                  <td className={cellClasses} key={columnIndex}>
                    <input
                      type="number"
                      min={1}
                      max={9}
                      value={cellValue || ""}
                      onChange={(e) => handleChange(e, rowIndex, columnIndex)}
                      onFocus={() => handleFocus(rowIndex, columnIndex)}
                      onBlur={() => setFocusedCell({ row: null, col: null })}
                      disabled={isSolving}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
};

export default SudokuBoard;
