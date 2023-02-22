const button = document.getElementById('button');
const audioElement = document.getElementById('audio'); 

//Disable/Enable Button
function toggleButton() {
    button.disabled = !button.disabled;
}

function jokeTeller(joke) {
VoiceRSS.speech({
    key: '2c2153ec34b240f9ad5ee244c5ffc24c',
    src: joke,
    hl: 'en-gb',
    v: 'Alice',
    r: 0, 
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
});
};

// Get Jokes From Joke-API
async function getJokes() {
    let joke = '';
    const apiURL = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    try {
        const response =  await fetch(apiURL);
        const data = await response.json();
       
        if(data.setup) {
            joke = `${data.setup} ... ${data.delivery}`; 
        } else {
            joke = data.joke;
        }
        //Text-to-Speech
        jokeTeller(joke)
        //Disable Button
        toggleButton(); 

    } catch (error) {
        //Catch Errors Here
        console.log('Whoops', error)
    }
};


//Event Listeners
button.addEventListener('click', getJokes);

audioElement.addEventListener('ended', toggleButton)