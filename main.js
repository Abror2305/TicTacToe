const buttons = document.querySelectorAll('.cell'),
    restart = document.querySelector('.restart'),
    status = document.querySelector('.game--status');
let res = [],win = false;
for (let el of buttons) {
    el.onclick = function () {
        if(win) return;
        if (el.textContent === '') {
            el.textContent = 'X';
            let index = +el.getAttribute("data-cell-index")
            if(!res[index]){
                res[index] = 'X';
            }
            if(check('X')){
                status.innerText = "X win";
            }
        }
        else{
            return
        }

        let O = Math.round(Math.random()*9);
        let joy = document.querySelector(`.cell[data-cell-index="${O}"]`);
        for (;joy.innerHTML !="";) {
            O = Math.round(Math.random()*9);
            joy = document.querySelector(`.cell[data-cell-index="${O}"]`);
        }
    // if(joy.textContent === ''){
        joy.innerText = 'O';
        let index = +joy.getAttribute("data-cell-index")
        if(!res[index]){
            res[index] = 'O';
        }
        if(check('O')){
            status.innerText = "O win";
        }
    // }
    }
}
restart.addEventListener('click', () => {
    for (let el of buttons) {
        el.textContent = '';
    }
    res = [];
    win = false;
    status.innerText = "";
})
function check(value){
    if(res[0] === value && res[1] === value && res[2] === value){
        win = true;
        return true;
    }
    if(res[3] === value && res[4] === value && res[5] === value){
        win = true;
        return true;
    }
    if(res[6] === value && res[7] === value && res[8] === value){
        win = true;
        return true;
    }
    if(res[0] === value && res[3] === value && res[6] === value){
        win = true;
        return true;
    }
    if(res[1] === value && res[4] === value && res[7] === value){
        win = true;
        return true;
    }
    if(res[2] === value && res[5] === value && res[8] === value){
        win = true;
        return true;
    }
    if(res[0] === value && res[4] === value && res[8] === value){
        win = true;
        return true;
    }
    if(res[2] === value && res[4] === value && res[6] === value){
        win = true;
        return true;
    }
    if(res.filter((el)=>el).length == 9){
        status.innerText = "Draw";
        win = true
        return false
    }
    return false
}