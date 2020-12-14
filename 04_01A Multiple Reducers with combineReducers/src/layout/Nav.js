import { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../state/context/auth-context";
import AuthEnable, { AuthDisable } from "../state/context/AuthEnable";

import { useSelector } from 'react-redux';

// Selectors
const selectListToBorrow = state => state.listToBorrow

const Nav = (props) => {

    const history = useHistory();
    const { setAuth } = useContext(AuthContext);
    
    const listToBorrow = useSelector(selectListToBorrow);

    const logoutHandler = ev => {
        setAuth({});
        history.push("/");
    }

    // useEffect(()=>{
    //     console.log('listToBorrow: ', listToBorrow);
    // }, [listToBorrow])

    // test store connected
    useEffect(() => {
        console.log('Nav connected to store', listToBorrow);
    });

    return (
        <nav>
            <Link to="/" className="brand"><i className="fas fa-book"></i> <span>LIBB</span>  </Link>
            <div className="menu">

                <AuthDisable>
                    <Link to="/login"
                        className="button icon-file-code">Login</Link>
                </AuthDisable>

                <AuthEnable>
                    <button className="pseudo button icon-help-circled"><i className="fas fa-book-reader" /> { listToBorrow.length } </button>
                    <button onClick={logoutHandler}
                        className="button icon-file-code">Logout</button>
                </AuthEnable>
                
            </div>
        </nav>
    )
}

export default Nav;