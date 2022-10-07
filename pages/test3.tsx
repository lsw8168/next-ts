import { useEffect, useState } from "react";

export default function Test() {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch("/api3/users");
        if (response.status === 200) {
          let data = await response.json();
          setUsers(data);
        } else {
          throw "Error fetching users list";
        }
      } catch (error) {
        setIsError(true);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {isError ? (
        <h3> Error! Please try again later</h3>
      ) : (
        <ul>
          {users.map((user: any) => (
            <li key={user.id}> {user.name} </li>
          ))}
        </ul>
      )}
    </div>
  );
}
