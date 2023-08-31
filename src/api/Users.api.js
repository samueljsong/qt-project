async function createUser(username, email, password){
    let result = await fetch(
        'http://localhost:5000/users/add', {
            method: "post",
            body: JSON.stringify({username, email, password}),
            headers: {
                'Content-Type' : 'application/json'
            }
        }
    )
    result = await result.json();
    console.warn(result);
    if(result){
        alert("User created")
    }
}

async function loginUser(email, password){
    let result = await fetch(
        'http://localhost:5000/users/login',{
            method: "post",
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type' : 'application/json'
            }
        }
    )
    result = await result.json();
    console.warn(result);
}

async function getFriends(email, password){
    
}

export {createUser, loginUser};