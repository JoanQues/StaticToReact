import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
    function Menu() {
    return (
        <div className="row">
            <h1 id="title" className="col-4">NotSpoty</h1>
            <form className="col-4 mt-2">
                <input type="text" placeholder="Search here"></input>
                    <button>Search</button>
            </form>
            <h2 id="login" className="col-4 text-center over">Log In</h2>
        </div>
    );

}
export default Menu;
