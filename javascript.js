function toggleAnswer(id) {
    let answer = document.getElementById(id);
    if (answer.hidden) {
        answer.hidden = false;
    } else {
        answer.hidden = true;
    }
}
