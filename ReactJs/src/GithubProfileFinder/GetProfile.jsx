import React, { useEffect, useState } from "react";
import "./style.css";

function GetProfile() {
  const [userName, setUserName] = useState("Omkar-1128");
  const [userData, setUserData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    fetchGithubData(userName);
  }

  async function fetchGithubData() {
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const jsonRes = await res.json();
    console.log(jsonRes);
    setUserData(jsonRes);
  }

  useEffect(() => {
    fetchGithubData();
  }, []);

  return (
    <div className="container">
      <form className="ProfileForm" onSubmit={handleSubmit}>
        <div className="github-input">
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value.trim())}
            placeholder="Search Github Username..."
          />
        </div>
        <div className="github-search-btn">
          <button type="submit">
            Search
          </button>
        </div>
      </form>
      <div className="userContainer">
        {userData && !userData.message ? (
          <div className="userBlock">
            <div className="userPhoto">
              <img src={userData.avatar_url} alt="" />
            </div>
            <div className="userName">{userData.name}</div>
            <div className="bio">{userData.bio}</div>
            <div className="littleInfo">
              <div>followers: {userData.followers}</div>
              <div>following: {userData.following}</div>
              <div>Public Repos: {userData.public_repos}</div>
            </div>
          </div>
        ) : (
          <div className="InvalidGitUser">
            <h1>Data Not Found</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default GetProfile;
