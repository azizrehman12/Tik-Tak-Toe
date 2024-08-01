let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true; // player O

let winPatterns = [
    ["0", "1", "2"],
    ["3", "4", "5"],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"]
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    msg.innerText = "";
};

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        console.log("box was clicked ");
        if (turn0) { // player O
            box.innerText = "O";
            turn0 = false;
        } else { // player X
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, the winner is ${winner}`;
    msgContainer.classList.remove("hide");
};

const enableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = false;
        box.innerText = "";
    });
};

const disableBoxes = () => {
    boxes.forEach(box => {
        box.disabled = true;
    });
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
                disableBoxes();
                break;
            }
        }
    }
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
