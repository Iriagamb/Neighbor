import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Search from "../../component/search/Search.jsx";
import AllUsersInfo from "../../component/directory/AllUsersInfo.jsx";

const Directory = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getAllDirectory();
  }, []);

  if (!store.users) return <div>Loading...</div>;

  console.log("Daaataaaaaa", store.users);

  return (
    <div className="container d-flex flex-column min-vh-100">
      <div
        className="d-flex justify-content-between align-items-center"
        style={{ minHeight: "20vh" }}
      >
        <h1>Directorio</h1>
        <div className="input-group mb-3 inputSearch w-25">
          <Search />
        </div>
      </div>

      {store.users.selers}
      {store.users.neighbors}
      {store.users.administrator.map((user) => {
        console.log("USERRRRR", user);
        return (
          <div
            className="col-md-7 d-flex flex-column justify-content-center position-relative w-auto mb-5"
            key={user.id}
          >
            <AllUsersInfo
              role={user.role}
              nameProfile={user.name}
              lastName={user.lastname}
              floor={user.floor}
              bouldingname={user.bouldingname}
            />
          </div>
        );
      })}
      {store.users.neighbor.map((user) => {
        console.log("USERRRRR", user);
        return (
          <div
            className="col-md-7 d-flex flex-column justify-content-center position-relative w-auto mb-5"
            key={user.id}
          >
            <AllUsersInfo
              role={user.role}
              nameProfile={user.name}
              lastName={user.lastname}
              floor={user.floor}
              shopname={user.shopname}
            />
          </div>
        );
      })}
      {store.users.seller.map((user) => {
        console.log("USERRRRR", user);
        return (
          <div
            className="col-md-7 d-flex flex-column justify-content-center position-relative w-auto mb-5"
            key={user.id}
          >
            <AllUsersInfo
              role={user.role}
              nameProfile={user.name}
              lastName={user.lastname}
              floor={user.floor}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Directory;
