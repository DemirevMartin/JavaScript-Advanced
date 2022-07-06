function walk(steps, space, speed) {
    speed = speed / 3.6;
    let dist = steps * space;
    let rest = Math.floor(dist / 500);
    let time = dist / speed;

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.round(time - minutes * 60);
    minutes = minutes + rest;

    if(hours < 10) hours = `0${hours}`;
    if(minutes < 10) minutes = `0${minutes}`;
    if(seconds < 10) seconds = `0${seconds}`;
    
    console.log(`${hours}:${minutes}:${seconds}`);
}
walk(4000, 0.60, 5);
walk(2564, 0.70, 5.5);