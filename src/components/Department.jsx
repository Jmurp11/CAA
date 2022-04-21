import Employee from "./Employee";

function Department(props) {
  return (
    <div>
      <h4>{props.department.title}</h4>
      {props.department.employees.map((emp) => (
        <Employee key={emp.email} employee={emp} />
      ))}
    </div>
  );
}

export default Department;
