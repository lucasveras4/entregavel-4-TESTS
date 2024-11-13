
function primo(num) {
    let primo = true
    for(let i = 2; i < num; i++)
        if(num % i === 0){
            primo = false;
        }
            
    if (primo){
        primo = true;
    }
    else{
        primo = false
    }

    return primo
}

module.exports = primo;

        


