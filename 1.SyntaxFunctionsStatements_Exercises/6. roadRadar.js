function radar(speed, area) {
    // •	On the motorway, the limit is 130 km/h
    // •	On the interstate, the limit is 90 km/h
    // •	In the city, the limit is 50 km/h 
    // •	Within a residential area, the limit is 20 km/h

    // Driving {speed} km/h in a {speed limit} zone` 
    // `The speed is {difference} km/h faster than the allowed speed of {speed limit} - {status}`
    // For speeding up to 20 km/h over the limit, the status should be speeding.
    // For speeding up to 40 km/h over the limit, the status should be excessive speeding.
    // For anything else, status should be reckless driving.
    let limit = 0;
    let status = '';
    if(area === 'motorway') {
        limit = 130;
    } else if (area === 'interstate') {
        limit = 90;
    } else if (area === 'city') {
        limit = 50;
    } else {
        limit = 20;
    }

    let d = speed - limit;
    if (d <= 20 && d > 0) status = 'speeding';
    else if (d <= 40 && d > 0) status = 'excessive speeding';
    else if (d > 40) status = 'reckless driving';

    if (d <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else console.log(`The speed is ${d} km/h faster than the allowed speed of ${limit} - ${status}`);
}
radar(40, 'city');
radar(200, 'motorway');
radar(21, 'residential');
radar(120, 'interstate');