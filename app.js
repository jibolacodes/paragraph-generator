// random texts

const text = [
    `Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
    modi minima sunt esse `,
    `Quaerat provident commodi consectetur veniam similique ad 
    earum omnis `,
    `temporibus enim commodi iusto libero magni deleniti quod quam 
    consequuntur! `,
    `minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
    quibusdam `,
    `Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
    sapiente officiis `,
    `Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
    modi minima sunt esse `,
    `Quaerat provident commodi consectetur veniam similique ad 
    earum omnis `,
    `temporibus enim commodi iusto libero magni deleniti quod quam 
    consequuntur! `,
    `minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
    quibusdam `
];

// selecting target variables
const form = document.querySelector('.generate');
const number = document.getElementById('number');
const output = document.querySelector('.output');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const value = parseInt(number.value);
    const randomNo = Math.floor(Math.random() * text.length);

    console.log(randomNo);
    if(isNaN(value) || value < 0 || value > 9 ){
        output.innerHTML = `<p class='para'>${text[randomNo]}</p>`;
    } else {
        let tempText = text.slice(0, value);
        tempText = tempText.map(function(item){
            return `<p class='para'>${item}</p>`;
        }).join('')
        output.innerHTML = tempText;
    }
})