function getlogin(){
    //variablerne er == med det indhold, der er i felterne 'username' og 'password'
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    
    console.log(username)
    console.log(password)
    //hvis input er == 'admin' sendes brugeren til admin/home
    if (username == "admin" && password == "admin")
        window.location.href = "/admin/home";
    //hvis input er == 'guide' sendes brugeren til guide/home
    if (username == "guide" && password == "guide")
        window.location.href = "/guide/home";     

}