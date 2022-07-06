function solve(worker) {

    if(!worker.dizziness) return worker;

    const amount = worker.weight * worker.experience * 0.1;
    worker.levelOfHydrated += amount;
    worker.dizziness = false;
    //return worker;
    console.log(worker);

    // Weight is expressed in kilograms, experience in years and levelOfHydrated is in milliliters. 
    //  The required amount is 0.1ml per kilogram per year of experience. 
    //  The required amount must be added to the existing amount (to the levelOfHydrated). 
    //  Once the water is administered, change the dizziness property to false.
}
solve({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true });