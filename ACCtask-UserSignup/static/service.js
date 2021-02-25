var form = document.getElementById('userform')
form.addEventListener('submit',(err)=>{
    err.preventDefault()
    var user_name = document.getElementById('username').value
    var password = document.getElementById('password').value
    fetch("http://localhost:8080/api/user",{
        method:'POST',
        body:JSON.stringify({
            user_name : user_name,
            password : password
        }),
        headers:{
            "Content-Type":"application/json;charset=UTF-8"
        }
    }).then(function(res){
        return res.json()
    }).then(function(data){
        if(data.success){
            alert(data.message);
        }
        else{
            alert(data.error);
        }
    })
})