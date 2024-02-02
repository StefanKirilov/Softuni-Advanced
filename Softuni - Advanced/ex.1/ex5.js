function timeToWalk(steps, foot, speed){
    let translateSpeed = speed/3.6;
    let meters = steps * foot;
    let rest = (Math.floor(meters/500)) * 60;
    let time = (meters/translateSpeed) + rest;
    let minutes = Math.floor(time/60)
    let second = Math.round(time - minutes * 60);
    let hours = Math.floor(time/3600);

    let hh = hours < 10 ? "0" : "" ;
    let mm = minutes < 10 ? "0" : "" ;
    let ss = second < 10 ? "0" : "" ;


    console.log(`${hh + hours}:${mm + minutes}:${ss + second}`);
}
timeToWalk(4000, 0.60, 5);