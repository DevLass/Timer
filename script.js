var sec=00
var min=00
var hour=00
var interval

function zerozero(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return digit
    }
}

function start(){
    count()
    interval = setInterval(count,1000)
}

function pause(){
    interval =  clearInterval(interval)
}

function count(){
    sec++
    if(sec == 60){
        min++
        sec=0
        if(min == 60){
            hour++
            min=0
        }
    }
    document.getElementById('time').innerHTML = zerozero(hour)+':'+zerozero(min)+':'+zerozero(sec)
}