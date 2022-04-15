import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import "./Header.css";

const Header = () => {
    const { user, signOutFromGoogle } = useFirebase();
    return (
        <nav>
            <Link to="/">Home</Link>
            <span>{user?.displayName && user?.displayName}</span>
            {user?.uid ? (
                <button onClick={signOutFromGoogle}>Sign Out</button>
            ) : (
                <Link to="/login">Login</Link>
            )}
            <Link to="/register">Register</Link>
            <Link to="/reviews">Orders</Link>
            <Link to="/reviews">Reviews</Link>
        </nav>
    );
};

export default Header;
