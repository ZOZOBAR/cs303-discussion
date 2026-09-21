let booleanVar = false;

function boo() {
    if (booleanVar === false) {
        // display the sacary content
        document.getElementById("scary-content").style.display = "block";
        document.getElementById("cute-content").style.display = "none";
        document.getElementById("toggleBtn").textContent = "🐱 Make It Cute Again 🐱";
        booleanVar = true;
    } else {
        // display normal
        document.getElementById("scary-content").style.display = "none";
        document.getElementById("cute-content").style.display = "block";
        document.getElementById("toggleBtn").textContent = "😈 Press If You Dare 😈";
        booleanVar = false;
    }
}