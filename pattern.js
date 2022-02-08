const table = document.createElement("table");
const btn = document.querySelector(".btn");
const inputDiv = document.getElementById("input");
const chessBoard = document.getElementById("chessBoard");
const rows = document.getElementById("rows");

const createChessBoard = (rows, columns) => {
  let tr;
  for (let i = 0; i < rows; i++) {
    tr = document.createElement("tr");
    for (let j = 0; j < columns; j++) {
      let td = document.createElement("td");
      if ((j + i) % 2 === 0) {
        td.setAttribute("class", "cell whitecell");
      } else {
        td.setAttribute("class", "cell blackcell");
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  let resetButton = document.createElement("button");

  resetButton.textContent = "Reset ";
  resetButton.setAttribute("class", "btn btn-danger m-3");

  resetButton.addEventListener("click", () => window.location.reload());

  chessBoard.setAttribute(
    "class",
    "d-flex flex-column  justify-content-center align-items-center"
  );
  chessBoard.appendChild(table);
  chessBoard.appendChild(resetButton);
};

btn.addEventListener("click", () => {
  if (!rows.value || rows.value <= 0) {
    document.getElementById("error").textContent = "Enter row value properly!";
    return;
  }
  inputDiv.setAttribute("class", "d-none");
  createChessBoard(rows.value, rows.value);
  document.getElementById("error").setAttribute("class", "d-none");
  btn.style.display = "none";
});
