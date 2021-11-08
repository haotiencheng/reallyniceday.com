import React from "react";
import PropTypes from "prop-types";
import "./Dance.css";

const YoutubeEmbed = ({ embedId, start }) => (
    <div className="video-responsive h-full">
        <iframe
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; start"
            title="Embedded youtube"
            allowFullScreen
            start={start}
        />
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
