async function signUp(){
    document.getElementById("spanError").style.display="none"
    var usr=document.getElementById("userName").value;
    var pass =document.getElementById("pass").value;
    var user =
        {"username":usr, "password":pass};
    var requestOptions = {
        method: 'POST',
        headers:{
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
        redirect: 'follow'
    };

    fetch("https://agile-wildwood-89087.herokuapp.com/http://anyservice.imassoft.com/41/register", requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.token){
                console.log("success login token : "+data.token)
                open("login.html","_self")
                console.log({data})
            }
            else if (data.error){
                console.log(data.error)
                document.getElementById("spanError").style.display="inline";
                document.getElementById("spanError").innerHTML=data.error;
            }
        })
        .catch(error => console.error('error', error));

}
async function signIn(){
    userName=document.getElementById("your_name").value;
    password=document.getElementById("your_pass").value;
    var user =
        {"username":userName, "password":password};
    var requestOptions = {
        method: 'POST',
        headers:{
            "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
        redirect: 'follow'
    };

    fetch("https://agile-wildwood-89087.herokuapp.com/http://anyservice.imassoft.com/41/login", requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data.token){
                console.log({data})
                localStorage.setItem("token",data.data.token)
                console.log("token",data.data.token+" "+data.data.username )
                open("main.html","_self")
            }
            else if (data.error){
                console.log(data.error)
                document.getElementById("errorMsg").style.display="block"
                document.getElementById("errorMsg").innerText=data.error;
            }
        })
        .catch(error => console.error('error', error));

}

