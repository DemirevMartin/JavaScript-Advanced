function test() {
    const arr = ["Mikes - Steve 1000, Ivan 200, Paul 800", "Fleet - Maria 850, Janet 650"];
    let data = {};
    let best = ''; 
    let avg = 0;
    let workers = [];

    for(const el of arr) {
        const current = el.split(' - '); 
        let restaurant = {};
        restaurant.name = current[0]; 
        const list = current[1].split(', '); 
        
        for(const x of list) {
            let [name, salary] = x.split(' '); 
            salary = Number(salary); 
            let worker = {
                name,
                salary
            };
            workers.push(worker);
        }
        restaurant.workers = workers;
        
    }
    console.log(workers);
}
test();