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


// dice side
const player = document.createElement('div');
const computer = document.createElement('div');

const diceMessage = document.createElement('div') ;

const diceBtn = document.querySelector("#dice-side button");

diceBtn.addEventListener('click' , function(){
    diceMessage.className = 'p-4 fw-bold mt-5';

    player.className = ('player-dice') ;
    computer.className = ('computer-dice') ;

    const playerNumber = getRndInteger(1 , 6);
    const computerNumber = getRndInteger(1 , 6);

    player.innerText = playerNumber;
    computer.innerText = computerNumber;

    document.getElementById('giocatore').append(player);
    document.getElementById('cpu').append(computer);

    if(playerNumber > computerNumber){
        diceMessage.innerText = 'Complimenti hai vinto!!';
        diceMessage.classList.add('bg-my-blue');
    }else if(playerNumber < computerNumber){
        diceMessage.innerText = 'Peccato Ha vinto il computer :(';
        diceMessage.classList.add('bg-my-orange');
    }else{
        diceMessage.innerText = 'Un pareggio!!';
        diceMessage.classList.add('bg-light');
    }

    document.getElementById('dice-side').append(diceMessage)
})

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }