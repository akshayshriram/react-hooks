import React, { useCallback, useState } from "react";
import Search from "./ui/Search";

const allUser = ["Alex", "John", "Akshay", "Robin", "Biden"];

const UseCallback = () => {
  const [users, setUsers] = useState<Array<string>>(allUser);

  const handleShuffle = () => {
    setUsers([...allUser].sort(() => 0.5 - Math.random()));
  };

  const handleSearch = useCallback(
    (text: string) => {
      console.log(users[0]);
      const filteredUsers = allUser.filter((user) =>
        user.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filteredUsers);
    },
    [users]
  );

  return (
    <>
      <div className="flex gap-4">
        <button onClick={handleShuffle}>Shuffle</button>
        <Search searchFunction={handleSearch} />
      </div>
      <div className="flex">
        <ol className="list-decimal">
          {users && users.map((user) => <li key={user}>{user}</li>)}
        </ol>
      </div>
    </>
  );
};

export default UseCallback;
