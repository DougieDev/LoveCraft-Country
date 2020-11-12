import React from 'react';
import './EpisodeContainer.css';
import EpisodeCard from '../EpisodeCard/EpisodeCard';

const EpisodeContainer = ({ episodes }) => {
    const episodesList = episodes.map((episode, i) => {
        return (
            <div key={i}>
                <EpisodeCard { ...episode } />
            </div>
        )
    })

    return <section className='episode-container'>{episodesList}</section>
}

export default EpisodeContainer;