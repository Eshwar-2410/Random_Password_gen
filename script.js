document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".btn");
    const input = document.querySelector(".password-output");
    const clear=document.querySelector(".clear");
    const length=document.querySelector(".length");

    const generatePassword = (iteration) => {
        const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()?{}[]+-_=";
        let password = "";
        for (let i = 0; i < iteration; i++) {
            const index = Math.floor(Math.random() * chars.length);
            password += chars[index];
        }
        return password;
    };

    
    btn.addEventListener("click", () => {
        
        const len=Number(length.value);
        if(isNaN(len) || len<=0){
            alert("please enter valid length.");
            return;
        }
        const password = generatePassword(len); 
        input.value = password; 
    });

    clear.addEventListener("click",()=>{

        length.value="";
        input.value="";
    })
});
