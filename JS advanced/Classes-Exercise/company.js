class Company{
    constructor() {
        this.departments = {}
    }
    addEmployee(name,salary,position,department){
        if (name && (salary && salary > 0) && position) {
            this.departments[department] = {
                name,
                salary: Number(salary),
                position
            }
            return `New employee is hired. Name: ${name}. Position: ${position}`;
        }
        else{
            throw new Error('Invalid Input')
        }
    }
    bestDepartment(){
        let result = ''
        let bestAverageSalary = 0
        let bestDepartment = ''
        for (const department  in this.departments) {
            let salarySum = 0
          for (const employee in department) {
             salarySum += employee.salary
          }
          
          
          let averageSalary = salarySum/ Object.keys(this.departments).length
          if (averageSalary > bestAverageSalary) {
              bestAverageSalary = averageSalary
              bestDepartment = department;
          }
        }
       result = `Best Department is: ${bestDepartment}
       Average salary: ${bestAverageSalary}`
       for (const employee in this.departments[bestDepartment]) {
            result += `\n ${employee} ${employee.salary} ${employee.position}`
       }
    }
}