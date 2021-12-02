import React from "react";
import YouTube from 'react-youtube';


import "../styles/whatsNew.css"

export default class WhatsNew extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }


    render() {

        const opts = {
            height: '250',
            width: '390',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
            },
        };


        return (
            <div className="whats-new-container">
                <div className="header">
                    <p>What's new</p>
                </div>
                <div className="card-section">

                    <div className="new-card">
                        <YouTube
                            videoId={"5J_FvAMZk8U"}
                            opts={opts}
                        />
                    </div>
                    <div className="new-card">
                        <YouTube
                            videoId={"mmCoPxxnnK0"}
                            opts={opts}
                        />
                    </div>
                    <div className="new-card">
                        <YouTube
                            videoId={"uQTiEh4NGWY"}
                            opts={opts}
                        />
                    </div>
                </div>

            </div>
        );

    }
}
