function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   let input = document.querySelector('#inputs>textarea');
   let bestRestResult = document.querySelector('#bestRestaurant>p');
   let workersResult = document.querySelector('#workers>p');

   function onClick () {
     
      let arr = JSON.parse(input.value);
      
      let rest = {};
 
      arr.forEach((element) => {
        let [name , workers] = element.split(' - ');
        let workersColection = workers.split(', ');

        let workersDictColection = [];
        for (const worker of workersColection) {
          let workersToken = worker.split(" ");
          let salary = Number(workersToken[1]);
          let nameWorker = workersToken[0];
          workersResult.push({name: nameWorker, salary});
        }
        if(rest[name]){
         workersDictColection = workersDictColection.concat(rest[name].workers);
        }
        workersDictColection.sort((w1 , w2) => w2.salary - w1.salary);

        let bestSalary = workersDictColection[0].salary;
        let totalSalary = workersDictColection.reduce((sum, w) => sum + w.salary, 0);

        let avgSalary = totalSalary / workersDictColection.length;

        rest[name] = {
         workers: workersDictColection, 
         averageSalary: avgSalary,
         bestSalary,
        };
      });
      let bestRestResultSalary = 0;
      let bestRest = undefined;

      for (let name in rest){
         let currentRest = rest[name];

         if (currentRest.averageSalary > bestRestResultSalary){
            bestRest = {
               name,
               workers: currentRest.workers,
               bestSalary: currentRest.bestSalary,
               averageSalary: currentRest.averageSalary,
            }

            bestRestResultSalary = currentRest.averageSalary;

         }
      }

      bestRestResult.textContent = `Name: ${bestRest.name} Average Salary: ${bestRest.averageSalary.toFixed(2)} Best Salary:
      ${Number(bestRest.bestSalary.toFixed(2))}`;

      let result = [];

      bestRest.workers.forEach((worker) => { result.push(`Name: ${worker.name} With Salary: ${worker.salary}`)});

      workersResult.textContent = result.join(' ');
   }
}
