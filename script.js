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

var hour_f
var min_f
var sec_f

function collect_popup(){
    var hour_inp = document.querySelector('#hours_input')
    var min_inp  = document.querySelector('#min_input')
    var sec_inp  = document.querySelector('#sec_input')

    hour_f = hour_inp.value
    min_f = min_inp.value
    sec_f = sec_inp.value
}


function stopwatch(){
    hour = hour_f
    min = min_f
    sec = sec_f

    if( min == 0){
        hour--
        min = 60
    }

    if( sec == 0){
        min--
        sec = 60
    }


    restart_stopwatch();

}

function decrease_count(){
    document.getElementById('time').innerHTML = zerozero(hour)+':'+zerozero(min)+':'+zerozero(sec)
    sec--
    if (sec == 0){
        min--
        sec = 60
        if(min ==0){
            hour--
            min = 60
        }
    }
}

function restart_stopwatch(){
    decrease_count()
    interval = setInterval(decrease_count,1000)
}

function pomodoro(){
    hour = 00
    min = 25
    sec = 00
    if( min == 0){
        hour--
        min = 60
    }

    if( sec == 0){
        min--
        sec = 60
    }

    restart_stopwatch();

    setTimeout(function(){

        hour = 00
        min = 5
        sec = 00
        if( min == 0){
            hour--
            min = 60
        }
    
        if( sec == 0){
            min--
            sec = 60
        }
    
        restart_stopwatch();

    }, 1500000);
    
    setTimeout(function(){
        pomodoro();

    }, 1800000);
    
}

const button = document.querySelector('#stopwatch_button')
const popup = document.querySelector('.popup-wrapper')
const close_button = document.querySelector('.popup-close')

function active_popup(){
    popup.style.display = 'block'
}

function close_popup(){
    popup.style.display = 'none'
}
