// Add your code here
// fetch('http://localhost:3000/dogs', {
//     method: "POST"
//     headers: {
//         "Content-Type": "application/json"
//         Accept: "application/json"
//     }
//     body: JSON.stringify(dog)
// })
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(object) {
//         console.log(object);
//     })
//     .catch(function(error) {
//         alert("something isn't working");
//         console.log(error.message);
//     });

    function submitData(name, email) {
        return fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
        
        .then(function(response) {
            return response.json();
        })
        .then(function(object) {
            makeParagraph(object.id);
        })
        .catch(function(error) {
            alert("Unauthorized Access");
            makeParagraph(error.message);
        })
    }

    function makeParagraph(input) {
        const body = document.body
        const paragraph = document.createElement('p')
        paragraph.textContent = input
        body.appendChild(paragraph)
    }