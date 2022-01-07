function fact() {
    let val = document.getElementById('input').value
    let st = getFact(val)
    let rslt=document.createElement('p')
    rslt.innerText=st
    document.body.appendChild(rslt)
}

function getFact(num) {
    if (num == 0) {
        return 1;
    }
    else
    return num * getFact (num - 1);
}