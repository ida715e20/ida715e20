function getlogin(){
    
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    
    console.log(username)
    console.log(password)
    
    if (username == "admin" && password == "admin")
        window.location.href = "/admin/home";
    
    if (username == "guide" && password == "guide")
        window.location.href = "/guide/home";     

}