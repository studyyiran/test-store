const axios = require('axios');

const button = document.querySelector('#button');
if (button) {
    button.addEventListener('click', () => {
        console.log('get it')
        axios.get('http://localhost:8080/a');
        axios.post('http://localhost:8080/post', {
            name: 'yiran',
            age: '19'
        });
    })
}