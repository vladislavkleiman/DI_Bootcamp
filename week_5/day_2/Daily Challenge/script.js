const submit_btn = document.querySelector("#lib-button");
const form = document.forms[0];
const story_container = document.querySelector("#story");

let noun_input = form.noun;
let adjective_input = form.adjective;
let name_input = form.person;
let verb_input = form.verb;
let place_input = form.place;
let arr = [noun_input, adjective_input, name_input, verb_input, place_input];

let stories = [story1, story2, story3, story4, story5];
let random_store = 0;

const shuffle_btn = document.createElement("button");
shuffle_btn.innerText = "shuffle";
document.body.insertBefore(shuffle_btn, story_container.parentNode);

submit_btn.addEventListener("click", e => {
    e.preventDefault();
    generateStory();
});

shuffle_btn.addEventListener("click", e => {
    e.preventDefault();
    if (checkValues(arr)) {
        
        getRandomStory()(noun_input.value,
            adjective_input.value,
            name_input.value,
            verb_input.value,
            place_input.value);
    }
});



function generateStory() {

    if (checkValues(arr)) {

        story1(noun_input.value,
            adjective_input.value,
            name_input.value,
            verb_input.value,
            place_input.value);
    };
};

function checkValues(inputs) {
    for (item of inputs) {
        if (!item.value.match(/^[a-zA-Z]+$/)) {
            return false;
        }
    }
    return true;
}

function getRandomStory() {
    let random = Math.round(Math.random() * 4);
    while (random == random_store) {
        random = Math.round(Math.random() * 4);
    }
    return stories[random];
}

function story1(noun, adjective, name, verb, place) {

    story_container.textContent = `In a land of vibrant nouns, lived ${name}, a ${adjective} fanny. One day, they ${verb}ed to ${place}, carrying a ${noun}. Along the way, they met talking and danced with ${adjective} glee.
    A hidden ${noun} of ${adjective} crystals appeared. ${name} ${verb}ed, lighting up the crystals and granting a wish. They returned, sharing their ${adjective} adventure. Now, everyone ${verb}s like ${name}, spreading joy.
    Thus, ${name}'s ${adjective} journey reminds us: with a little ${noun} and a lot of ${verb}ing, magic happens.`;
};

function story2(noun, adjective, name, verb, place) {
    story_container.textContent = `Once upon a time, a ${adjective} ${name} decided to ${verb} in the ${place}. They brought a ${noun} to share, and soon, everyone joined in the ${verb}ing fun. Laughter echoed throughout the ${place} as they celebrated with ${adjective} joy, savoring the sweetness of life and ${verb}ing like nobody was watching.`;
}

function story3(noun, adjective, name, verb, place) {
    story_container.textContent = `Once upon a time in the land of ${adjective} wonders, there lived a ${adjective} character named ${name}. They loved to ${verb} around the enchanting ${place}, spreading ${adjective} laughter everywhere they went. One day, they found a magical ${noun} that granted them the power to ${verb} in the most ${adjective} way imaginable. From that moment on, the whole ${place} resonated with their ${adjective} energy, creating a world of pure ${noun} and endless ${verb}. And so, the legend of ${name}'s ${adjective} adventures echoed through the hills and valleys of ${place}, reminding all who heard it that a touch of ${noun} can turn life into a whimsical ${adjective} tale.`;
}

function story4(noun, adjective, name, verb, place) {
    story_container.textContent = `In a land where everything was ${adjective}, ${name} was known as the most ${adjective} adventurer. Their favorite thing to do was ${verb} through the magical ${place}, discovering hidden ${noun} and spreading ${adjective} vibes. One day, while ${verb}ing near a sparkling ${noun}, they stumbled upon a talking ${noun}. The talking ${noun} challenged them to a ${adjective} dance-off, and of course, ${name} accepted! They ${verb}ed like never before, their moves echoing across the ${place}. The talking ${noun} finally admitted defeat, and as a reward, they granted ${name} the ability to ${verb} as many times as they wanted. From then on, the land was filled with ${adjective} laughter and non-stop ${verb}ing, all thanks to the incredible adventures of ${name}.`;
}

function story5(noun, adjective, name, verb, place) {
    story_container.textContent = `In the world of ${adjective} dreams, ${name} was a ${adjective} soul. They loved to ${verb} through the charming ${place}, finding hidden ${noun} that brought them ${adjective} joy. One day, they stumbled upon a talking ${noun} that challenged them to a ${adjective} contest. With laughter and determination, they ${verb}ed their way to victory, leaving the talking ${noun} in awe. From then on, the entire ${place} echoed with ${adjective} laughter and endless ${verb}ing, all thanks to the spirited adventures of ${name}.`;
}