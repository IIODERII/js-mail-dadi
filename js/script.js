// mail side

const mailMessage = document.createElement('div');
mailMessage.className = ('p-3') ;

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
    mailMessage.classList.add('d-none');
    const userMail = document.getElementById('mail').value;
    // console.log(userMail);

    let trovata = false;
    for(let i = 0 ; i < listMail.length ; i++){
        const currentMail = listMail[i]
        mailMessage.classList.remove('d-none');
        // console.log(currentMail);
        if(currentMail === userMail){
            trovata = true ;
        }
    }
    if(trovata){
        mailMessage.classList.add('bg-success');
        mailMessage.innerHTML = '&check; La tua mail è stata trovata: ' + userMail;
    }else{
        mailMessage.classList.add('bg-danger');
        mailMessage.innerHTML = '&cross; La tua mail non è stata trovata: ' + userMail;
    }
    document.querySelector('.messages').append(mailMessage);
})