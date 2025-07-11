function getAr() {
    return true;
}

function handleCheckAr(){
    const arOutput = document.getElementById('aroutput')

    if (getAr()){
        arOutput.innerHTML = 'Usuário já existe no banco';
        arOutput.style.color = "red";   
    }
    else arOutput.innerHTML = 'nao tem';
}