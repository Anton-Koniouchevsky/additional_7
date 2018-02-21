module.exports = function solveSudoku(matrix) {
    backtrack(0, 0);

    return matrix;

    function check(row, col) {
        return rowCheck(row, col) && colCheck(row, col) && boxCheck(row, col);
    }

    function rowCheck(row, col) {
        for (let _col = 0; _col < 9; _col++) {
            if (_col != col && matrix[row][_col] == matrix[row][col]) {
                return false;
            }
        }
        return true;
    };

    function colCheck(row, col) {
        for (let _row = 0; _row < 9; _row++) {
            if (_row != row && matrix[_row][col] == matrix[row][col]) {
                return false;
            }
        }
        return true;
    };

    function boxCheck(row, col) {
        var box_row = Math.floor(row / 3);
        var box_col = Math.floor(col / 3);

        for (var _row = box_row * 3; _row < box_row * 3 + 3; _row++) {
            for (var _col = box_col * 3; _col < box_col * 3 + 3; _col++) {
                if (_row != row && _col != col && matrix[_row][_col] == matrix[row][col]) {
                    return false;
                }
            }
        }
        return true;
    };


    function backtrack(row, col) {
        if (matrix[row][col] === 0) {
            for (let value = 1; value < 10; value++) {
                matrix[row][col] = value;
                if (check(row, col) && backtrack(row, col)) return true;
            }
            matrix[row][col] = 0;
            return false;
        } else {
            col++;
            if (col > 8) {
                col = 0;
                row++;
                if (row > 8) return true;
            }
            return backtrack(row, col);
        }
    };
}