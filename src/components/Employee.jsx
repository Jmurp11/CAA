import { useState, useEffect } from "react";

function Employee(props) {
  const [mailTo, setMailTo] = useState();
  const [tags, setTags] = useState();

  const formatMailTo = () => {
    setMailTo(`mailto:${props.employee.email}`);
  };

  const formatTags = () => {
    setTags(props.employee.tags.join());
  };

  useEffect(() => {
    formatMailTo();
    formatTags();
  }, []);

  return (
    <div className="row">
      <a href={mailTo}>{props.employee.name}</a>
      <p>({tags})</p>
    </div>
  );
}

export default Employee;
