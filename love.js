const messages = document.querySelectorAll(".message");
let index = 0;

function showMessages() {
    if (index < messages.length) {
    messages[index].style.opacity = 1;
    index++;
    setTimeout(showMessages, 2000);
    } else {
    document.getElementById("question").style.display = "block";
    document.getElementById("buttons").style.display = "flex";
    }
}

showMessages();

const noBtn = document.getElementById("noBtn");
let noBtnOpacity = 1;
const yesBtn = document.getElementById("yesBtn");
let yesBtnScale = 1;

noBtn.addEventListener("click", () => {
    noBtn.style.position = 'absolute';
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 50;
    const randX = Math.random() * maxX;
    const randY = Math.random() * maxY;
    noBtn.style.left = `${randX}px`;
    noBtn.style.top = `${randY}px`;
    
    noBtnOpacity -= 0.2;
    if (noBtnOpacity < 0) noBtnOpacity = 0;
    noBtn.style.opacity = noBtnOpacity;

    yesBtnScale += 0.2;
    yesBtn.style.transform = `scale(${yesBtnScale})`;
});

function showLove() {
    const modal = document.getElementById("successModal");
    modal.classList.add("active");
} 
function createHearts() {
    const hearts = document.createElement("img");
    hearts.src = "https://pngimg.com/uploads/heart/heart_PNG51313.png";
    hearts.className = "hearts";

    const isLeft = Math.random() < 0.5;
    hearts.style.left = isLeft ? `${Math.random() * 30}px` : "";
    hearts.style.right = !isLeft ? `${Math.random() * 30}px` : "";

    document.body.appendChild(hearts);

    setTimeout(() => {
        hearts.remove();
    }, 5000);
}

setInterval(createHearts, 800);
