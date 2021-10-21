import React from "react";

import "../styles/projects.css";

export default class ProjectCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: props.header,
            image: props.image,
            link: props.link,

        };
    }

    render() {
        return (
            <div className="project-card-page">
                <div className="card">
                    <img src={this.state.image} alt="image" />
                    <a href={this.state.link}>{this.state.header}</a>
                </div>
            </div>
        );
    }
}
