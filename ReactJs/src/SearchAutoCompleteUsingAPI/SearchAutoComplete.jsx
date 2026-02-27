import React, { useEffect, useState } from "react";
import "./style.css";
import { BeatLoader } from "react-spinners";
import Suggestions from "./Suggestions";

function SearchAutoComplete() {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [dropDown , setDropDown] = useState(false);
  const [inputVal, setInputVal] = useState("");

  async function fetchUserData() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const jsonRes = await res.json();
      setAllUsers(jsonRes.users.map((user) => user.firstName));
      console.log(jsonRes.users.map((user) => user.firstName));
      setLoading(false);
    } catch (error) {
      console.log("Error Occured During Fetching The Data" + error);
      setLoading(false);
    }
  }

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setInputVal(query);
    if(query.length > 1) {
        const filteredData = allUsers && allUsers.length? allUsers.filter((user) => user.toLowerCase().indexOf(query) > -1) : [];
        setFilteredUsers(filteredData);
        setDropDown(true);
    } else {
        setFilteredUsers([]); 
        setDropDown(false);
    }

  }

  useEffect(() => {
    (async () => {
      await fetchUserData();
    })();
  }, []);

  return (
    <div className="search-autocomplete-container">
      {loading && <BeatLoader />}
      <input
        type="text"
        placeholder="Enter Username"
        value={inputVal ?? ""}
        onChange={(e) => handleChange(e)}
      />
      
      {dropDown && <Suggestions data={filteredUsers}/>}
    </div>
  );
}

export default SearchAutoComplete;
