import React from "react";
import PropTypes from "prop-types";

const UserListCreateStatus = ({ userData: { status, name, age, surname, info = ""} }) => (
    <li className="user" >
        <div className="userStatus">
            {status}
        </div>
        <div className="userInfo">
            <p className="userInfoName">{name}</p>
            <p className="userInfoSurname">{surname}</p>
            <p className="userInfoAge">{age}</p>
        </div>
        <div className="userInfoAdd">{info}</div>
        <button className="userButton">
            X
        </button>
    </li>
);

UserListCreateStatus.propTypes = {
    userData: PropTypes.shape({
        status: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        age: PropTypes.string.isRequired,
        info: PropTypes.string,
    }),
};

export default UserListCreateStatus;
