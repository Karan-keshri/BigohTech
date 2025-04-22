// read spread and rest operator
const companyData = {
    company: {
      departments: [
        {
          name: "Engineering",
          employees: [
            { id: 1, name: "Alice", role: "Engineer" },
            { id: 2, name: "Bob", role: "Senior Engineer" }
          ]
        },
        {
          name: "HR",
          employees: [
            { id: 3, name: "Carol", role: "HR Manager" }
          ]
        }
      ]
    }
  };

  function manageCompany(...Object) {
    let data= Object[0];
    let operation= Object[1];
    let deptName= Object[2];
    let info= Object[3];

  switch (operation) {
    case 'add':
      addEmployee(data,deptName, info);
      break;
    case 'remove':
      removeEmployee(data,deptName, info);
      break;
    case 'update':
      updateEmployee(data,deptName, info);
      break;
    case 'find':
      findEmployees(data,deptName);
      break;
    default:
      console.log("Invalid operation");
  }
}
  
  
  function addEmployee(companyData,deptName, newEmployee) {
    const department = companyData.company.departments.find(dep => dep.name === deptName);
    if (department) {
      department.employees.push(newEmployee);
    }
  }

  function removeEmployee(companyData,deptName, employeeId) {
    const department = companyData.company.departments.find(dep => dep.name === deptName);
    if (department) {
      delete department.employees; 
    }
  }

  function updateEmployee(companyData,deptName, updatedInfo) {
    const department = companyData.company.departments.find(dep => dep.name === deptName);
    if (department) {
      const employee = department.employees.find(emp => emp.id === updatedInfo.id);
      if (employee) {
        Object.assign(employee, updatedInfo);
      }
    }
  }

  function findEmployees(companyData,deptName) {
    const department = companyData.company.departments.find(dep => dep.name === deptName);
    return  department;
  }
  
  manageCompany(companyData, "add", "Engineering", { "id": 4, "name": "Dave", "role": "Intern" });

  console.log(companyData.company.departments[0].employees); // Alice, Bob, Dave

  manageCompany(companyData, "remove", "HR", { "id": 3 });
    console.log(companyData.company.departments[1].employees); 
    
    manageCompany(companyData, "update", "Engineering", { "id": 2, "name": "Robert", "role": "Lead Engineer" });
    console.log(companyData.company.departments[0].employees); // Alice, Robert, Dave

    const employees = manageCompany(companyData, "find", "Engineering");
    console.log(employees); // Alice, Robert, Dave