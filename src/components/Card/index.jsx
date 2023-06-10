import React from "react";
import { Link } from "react-router-dom";

// import { Container } from './styles';

function Card({ user }) {
  return (
    <div>
      {user ? (
        <>
          <img width="32" src={user.gravatarUrl} alt="" />
          <Link to={`/users/${user.id}`}>
            <h1>{user.name}</h1>
          </Link>
        </>
      ) : (
        <>sem usuario</>
      )}
      <hr />
    </div>
  );
}

export default Card;
