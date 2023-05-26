fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json())
    .then(json => {
        //console.log(`Quantidade de itens: ${json.length}`)


        json.forEach(element => {
            if (element.userId === 10) {
            console.log(`Title: ${element.title}`);
            }
        });
    })