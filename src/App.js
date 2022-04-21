import { useState, useEffect } from "react";

import "./styles.css";
import employees from "./employeeData";
import Department from "./components/Department";

export default function App() {
  /* 
    TODO: 
    Group the active (status=active) employees tagged as "tech" by department.
    Render each resulting department name, followed by a list of the matching
    employees in that dept, showing each employee's name (wrapped in an email 
    mailto link) and list of tags (comma separated in parens).

    The purpose of the exercise is to see if you can follow 
    instructions and write a clear, well organized, and efficient 
    solution to the problem.  While this is a contrived problem, 
    we'd like to see you use React best practices for componentization, 
    passing data between components, and separation of UI and business logic.
  */
  const [departments, setDepartments] = useState([]);

  const groupEmployeesByDepartment = () => {
    const grouped = employees
      .filter(
        (emp) =>
          emp.status === "active" && emp.tags && emp.tags.includes("tech")
      )
      .reduce(
        (group, emp) => ({
          ...group,
          [emp["department"]]: (group[emp["department"]] || []).concat(emp)
        }),
        {}
      );

    const deps = Object.entries(grouped).map((element) => ({
      title: element[0],
      employees: element[1].map((el) => ({
        name: el.name,
        email: el.email,
        tags: el.tags
      }))
    }));

    setDepartments(deps);
  };

  useEffect(() => {
    groupEmployeesByDepartment();
  }, []);

  if (!departments) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {departments.map((department) => (
        <Department key={department.title} department={department} />
      ))}
    </div>
  );
}
