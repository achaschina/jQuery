function getTimeLeft() {
    var timeLeft = getTimeTillFinish();
    var seconds = Math.floor( (timeLeft/1000) % 60 );
    var minutes = Math.floor( (timeLeft/1000/60) % 60 );
    var hours = Math.floor( (timeLeft/(1000*60*60)) % 24 );
    var days = Math.floor( timeLeft/(1000*60*60*24) );
    return timeObj =  {
        'Seconds'  : seconds,
        'Minutes'  : minutes,
        'Hours'    : hours,
        'Days'     : days
    }
}

function getTimeTillFinish() {
    var deadLine = moment('2016-12-31 23:59:59', 'YYYY-MM-DD-hh-mm-ss');
    var nowDate  = new Date();
    var timeLeft = deadLine > nowDate ? Math.ceil((deadLine - nowDate)) : null;
    return timeLeft;
}

function format(dig) {
    dig = dig.toString();
    var len = 2;
    var result = '' + dig;
    if (dig.length < len){
        result = '0' + result;
    }
    return result;
}

init();

function init() {
    var interval = setInterval(function () {
        var timeObj = getTimeLeft();
        for (var key in timeObj) {
            var span = $('.count'+ key + ' .position .digit');
            var value = format(timeObj[key]);
            span[0].innerText = value;
        }
        if (getTimeTillFinish <= 0) {
            clearInterval(interval);
        }
    }, 1000)
}
