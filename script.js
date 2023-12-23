Shery.imageEffect("#back",{style:2,config:{"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":0},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.0266808951746484},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},gooey:true});
const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const wrapperRect = wrapper.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
    // Change the main text to "I love you too"
    question.innerHTML = 'I love you too';

    // Refresh the page after 5 seconds (5000 milliseconds)
    setTimeout(() => {
        location.reload();
    }, 5000);
});

document.addEventListener('DOMContentLoaded', () => {
    const isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;
    const noBtn = document.getElementById('no'); // Replace with the actual ID of your "No" button

    const moveAndShowNo = () => {
        moveButtonRandomly(noBtn, wrapperRect);
        showNoMessage();
    };

    if (isTouchDevice) {
        const hammerNo = new Hammer(noBtn);
        const hammerYes = new Hammer(yesBtn);

        // Touch event for the "No" button
        hammerNo.on('tap', moveAndShowNo);

        // Touch event for the "Yes" button
        hammerYes.on('tap', () => {
            // Change the main text to "I love you too"
            showLoveMessage();
            // Refresh the page after 5 seconds (5000 milliseconds)
            setTimeout(() => {
                location.reload();
            }, 5000);
        });
// document.addEventListener('DOMContentLoaded', () => {
//     const isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;
//     const noBtn = document.getElementById('no'); // Replace with the actual ID of your "No" button

//     const moveAndShowNo = () => {
//         moveButtonRandomly(noBtn, wrapperRect);
//         showNoMessage();
//     };

//     if (isTouchDevice) {
//         const hammerNo = new Hammer(noBtn);
//         const hammerYes = new Hammer(yesBtn);

//         // Touch event for the "No" button
//         hammerNo.on('tap', moveAndShowNo);

//         // Touch event for the "Yes" button
//         hammerYes.on('tap', () => {
//             // Change the main text to "I love you too"
//             showLoveMessage();
//             // Refresh the page after 5 seconds (5000 milliseconds)
//             setTimeout(() => {
//                 location.reload();
//             }, 5000);
//         });
    } else {
        // Mouseover event for the "No" button
        noBtn.addEventListener('mouseover', moveAndShowNo);

        // Click event for the "No" button
        noBtn.addEventListener('click', moveAndShowNo);

        // Click event for the "Yes" button
        yesBtn.addEventListener('click', () => {
            // Change the main text to "I love you too"
            showLoveMessage();
            // Refresh the page after 5 seconds (5000 milliseconds)
            setTimeout(() => {
                location.reload();
            }, 5000);
        });
    }
});


yesBtn.addEventListener('click', () => {
    question.innerHTML = "Don't forget to layer up; it might get a bit chilly😉";

    // Refresh the page after 5 seconds (5000 milliseconds)
    setTimeout(() => {
        location.reload();
    }, 5000);
});

document.addEventListener('DOMContentLoaded', () => {
    const isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints;
    const noBtn = document.getElementById('no'); // Replace with the actual ID of your "No" button

    const moveAndShowNo = () => {
        moveButtonRandomly(noBtn, wrapperRect);
        showNoMessage();
    };

    if (isTouchDevice) {
        const hammerNo = new Hammer(noBtn);

        // Touch event for the "No" button
        hammerNo.on('tap', moveAndShowNo);

        // Touch event for the "Yes" button
        yesBtn.addEventListener('click', () => {
            showLoveMessage();
            // Refresh the page after 5 seconds (5000 milliseconds)
            setTimeout(() => {
                location.reload();
            }, 5000);
        });
    } else {
        // Mouseover event for the "No" button
        noBtn.addEventListener('mouseover', moveAndShowNo);

        // Click event for the "No" button
        noBtn.addEventListener('click', moveAndShowNo);

        // Click event for the "Yes" button
        yesBtn.addEventListener('click', () => {
            showLoveMessage();
            // Refresh the page after 5 seconds (5000 milliseconds)
            setTimeout(() => {
                location.reload();
            }, 5000);
        });
    }
});

function moveButtonRandomly(button, containerRect) {
    const buttonRect = button.getBoundingClientRect();
    const maxWidth = containerRect.width - buttonRect.width;
    const maxHeight = containerRect.height - buttonRect.height;

    const i = Math.floor(Math.random() * maxWidth) + 1;
    const j = Math.floor(Math.random() * maxHeight) + 1;

    button.style.left = i + 'px';
    button.style.top = j + 'px';
}

function showLoveMessage() {
    question.innerHTML = "Don't forget to layer up; it might get a bit chilly😉 ";
}

function showNoMessage() {
    noBtn.innerHTML = "Impossible, right?";
    setTimeout(() => {
        // Reset the button text after a delay
        noBtn.innerHTML = 'NO';
    }, 2000); // Adjust the delay (in milliseconds) as needed
}