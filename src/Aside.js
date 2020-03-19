import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Aside() {
    return (
        <div className="col-2">
            <aside id="aside">
                <h3 className="over 404">Profile</h3>
                <h3 className="over 404">Trending</h3>
                <h3 className="over" id="playlist">Playlists</h3>
                <div id="list"></div>
                <h3 className="over 404">Configuration</h3>
            </aside>
        </div>
    );

}
export default Aside;
