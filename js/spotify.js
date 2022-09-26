window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQBeGaRbUp4SF9TMfsFOl0Wsw5jgMyW_6QLduGXd8vIUXuVAV51WwXPcIa72y4y8czyxr0tx6TA9To6txG5ih6psOquZrZDtgmSH9E-1oBXZz4lFqABFplne4Vn1n8kqiu585SA_5kEfh4qyNdkRBegN1AOT0FWvSVj5ewgzNVIs_scbZK1D5J18hmTyDLX3tFIy5eLe';
    const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(token); },
        volume: 0.5
    });

    // Ready
    player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
    });

    player.addListener('initialization_error', ({ message }) => {
        console.error(message);
    });

    player.addListener('authentication_error', ({ message }) => {
        console.error(message);
    });

    player.addListener('account_error', ({ message }) => {
        console.error(message);
    });

    document.getElementById('togglePlay').onclick = function () {
        player.togglePlay();
    };

    player.connect();
}
