function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick) 
//["PizzaHut - Peter 500, George 300, Mark 800"]
   function onClick () {
       const arr = JSON.parse(document.getElementsByTagName('textarea')[0].value) 
       let data = {} 
       let best = '' 
       let avg = 0 

       for(const el of arr) {
           const current = el.split(' - ') 
           const restaurant = current[0] 
           const list = current[1].split(', ') 
           let workers = [];
           for(const x of list) {
               let [name, salary] = x.split(' ') 
               salary = Number(salary) 
               let worker = {
                   name,
                   salary
               }
               
           }

           
        }
            // if(data.hasOwnProperty(restaurant)) {
            //     const old = data[restaurant] 
            //     const update = worker 
            //     const updateData = Object.assign({}, old, update) 
            //     data[restaurant] = updateData 
            // } else {
            //     data[restaurant] = {
            //        worker
            //     }
            // }

       

    //    for(const [key, value] of Object.entries(data)) {
    //      let currentAvg = 0 
    //      const values = Object.values(data[key]).length 
    //        for(const v of Object.values(value)) {
    //            currentAvg += v.salary 
    //        }
    //        currentAvg = currentAvg / values 
    //        if(avg < currentAvg) {
    //            avg = currentAvg 
    //            best = key 
    //        }
    //    }

    //    const a = Object.entries(data[best]).sort((x, y) => y.salary - x.salary)
    //    const max = sorted[0].salary 

    //    const bestRest = document.querySelector('section div#outputs p') 
    //    bestRest.textContent = `Name: ${best} Average Salary: ${avg} Best Salary: ${max}` 

    //    const workers = document.querySelector('section div#workers p') 
    //    let output = [] 
    //    for(const value of a) {
    //        output.push(`Name: ${value.name} With Salary: ${value.salary}`) 
    //    }
    //    workers.textContent = output.join(' ') 
   }
}