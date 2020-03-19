import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Section() {
    return (
        <div className="col-10">
            <section>
                <h2 className="col-12">Hot this Week</h2>
                <section className="row">

                    <div className="col-4">
                        <p>Coronao remix</p>
                        <iframe src="https://www.youtube.com/embed/rZeJGPJV3fA" frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                    <div className="col-4">
                        <p>Mina ElHammeni</p>
                        <iframe src="https://www.youtube.com/embed/-vI_nFXLY_Y" frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                    <div className="col-4">
                        <p>Diosa</p>
                        <iframe src="https://www.youtube.com/embed/2_f5Os7mKqM" frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                </section>
                <h2>Your playlists</h2>
                <section className="row">
                    <div className="col-4">
                        <p>Trap</p>
                        <iframe src="https://www.youtube.com/embed/videoseries?list=PLAwhEEKBIS-7T_ZyF8Y7QiWs1sZkpN-B7"
                                frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                    <div className="col-4">
                        <p>Rock</p>
                        <iframe src="https://www.youtube.com/embed/videoseries?list=PL3485902CC4FB6C67"
                                frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                    <div className="col-4">
                        <p>Pop</p>
                        <iframe src="https://www.youtube.com/embed/videoseries?list=PL4o29bINVT4EG_y-k5jGoOu3-Am8Nvi10"
                                frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                    </div>
                </section>
            </section>
            <section className="col-10">

            </section>
        </div>
    );

}
export default Section;
