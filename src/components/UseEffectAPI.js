import React, { useEffect, useState } from "react";
import GithubUsers from "./github/GithubUsers";
import Loading from "./github/Loading";


const UseEffectAPI = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      setLoading(false)
      setUsers(await response.json());
      // console.log(data);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loading />
  }
  return <div>
    {/* <GithubUsers users = {users} /> */}
    <GithubUsers users={users}/> 
  </div>;
};

export default UseEffectAPI;
