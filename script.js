const h1 = document.getElementById('contador')
const tempo = 1000;

var hh = 0, mm = 0, ss = 0, cron, Status;

function play()
{
    if(Status === 'start')
    {
        return;
    }
    cron = setInterval(() => { increment(); }, tempo);
    Status = 'start';
    h1.style.color ='#000000';
}

function pause()
{
    Status = 'pause';
    h1.style.color ='#FF0000';
    clearInterval(cron);
}

function reset()
{
    h1.style.color ='#000000';
    ss = 0;
    mm = 0; 
    hh = 0;
    h1.innerText = '00:00:00';
    clearInterval(cron);
    Status = 'reseted';
}

function increment(){
    ss++;

    if(ss == 60)
    {
        ss = 0;
        mm++;
    }

    if(mm == 60)
    {
        hh++;
        mm = 0;
    }

    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)
    h1.innerText = format;
    return format;
}