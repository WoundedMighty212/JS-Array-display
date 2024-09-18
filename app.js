let data = [
    {
        name: 'mike',
        age: '26'
    },
    {
        name: 'jack',
        age: '30'
    },
    {
        name: 'larry',
        age: '21'
    },
    {
        name: 'jerry',
        age: '24'
    },
    {
        name: 'kate',
        age: '18'
    },
    {
        name: 'jane',
        age: '60'
    },
    {
        name: 'jessica',
        age: '30'
    },
    {
        name: 'nicki',
        age: '22'
    },
];

const info = document.querySelector('#info');

let details = data.map(function(item){
    return '<div>' + item.name + ' ' + item.age 
    + ' is ' + ' Years Old' +"</div>"
})

info.innerHTML = details.join('\n');
