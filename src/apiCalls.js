export const getEpisodes = () => {
    return fetch('http://localhost:3001/episodes')
        .then(response => response.json())
}

// export const postEpisode = (title, episode, description) => {
//     return fetch('http://localhost:3001/episodes', {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             title: title,
//             episode: episode,
//             description: description
//         })
//     })
    // .then(response => response.json())
    // .catch(err => console.log('error:', err))
// }
