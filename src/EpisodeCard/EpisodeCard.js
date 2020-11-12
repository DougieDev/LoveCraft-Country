import React from 'react';
import './EpisodeCard.css';

const EpisodeCard = ({id, title, description}) => {
    return(
        <section className='episode-card'>
            <h1><b><span>Title: </span>{title}</b></h1>
            <p><span><b>Episode #: </b></span>{id}</p>
            <p><span><b>Description: </b></span>{description}</p>
        </section>
    )
}

export default EpisodeCard;