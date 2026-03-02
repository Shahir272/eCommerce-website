const login=document.getElementById("login")

login.addEventListener("click",()=>{
    const username=document.getElementById("u").value
    const password=document.getElementById("p").value
    if(username&&password)
    {
        alert("Login successful")
    }
})