const mailBtn = document.querySelector("#mail-side button");
const listMail = [
    'banana1@gmail.com',
    'fragola2@hotmail.com',
    'kiwi2@libero.com',
    'mela4@aruba.com',
    'pesca5@gmail.com',
    'anguria6@hotmail.com',
    'pera7@hotmail.com',
    'albicocca8@hotmail.com',
    'melone9@hotmail.com',
    'mango10@hotmail.com',
]

mailBtn.addEventListener("click" , function(){
    const userMail = document.getElementById('mail').value;
    // console.log(userMail);

    let trovata = false;
    for(let i = 0 ; i < listMail.length ; i++){
        const currentMail = listMail[i]
        console.log(currentMail);
    }
    // console.log(trovata);
})