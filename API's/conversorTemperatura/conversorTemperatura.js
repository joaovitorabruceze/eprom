
function converteTemperatura (temp, conv){
    switch(conv){
        case 'C':
            return converteParaCelsius(temp);
        case 'F':
            return converteParaFahrenheit(temp);
    }
}

function converteParaCelsius (fahrenheit){
    return ((fahrenheit - 32) / 1.8) + 'ºC';
}

function converteParaFahrenheit (celsius){
    return ((celsius * 1.8) + 32) + 'ºF';
}

function validaTemperatura (parametro){
    return !isNaN(parametro);    
}

function validaConversor (parametro){
    switch(parametro){
        case 'C':
        case 'F':
            return true;
        default:
            return false;
    }
}


export {converteTemperatura,validaTemperatura,validaConversor};