fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        /*json.forEach(element => {
            /*console.log(`${element.id} - ${element.name.toUpperCase()}, ${element.username}`);
            
        });*/
        
        json.filter(element => element.id % 2 === 0)
        .forEach(element => console.log(`${element.id} - ${element.name.toUpperCase()}, ${element.username.toLowerCase()}`))
    })
