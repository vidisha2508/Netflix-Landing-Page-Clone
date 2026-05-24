* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background-color: black;
    color: white;
    font-family: Arial, sans-serif;
}
header {
    position: absolute;
    width: 100%;
    padding: 25px 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;
}
header img {
    width: 170px;
}
.header-right {
    display: flex;
    gap: 15px;
}
header select,
header button {
    padding: 10px 18px;
    border-radius: 4px;
    border: none;
    font-size: 16px;
}
header select {
    background-color: rgba(0,0,0,0.7);
    color: white;
    border: 1px solid gray;
}
header button {
    background-color: red;
    color: white;
    cursor: pointer;
}
.hero {
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
.hero img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
}
.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
}
.hero-content {
    position: relative;
    z-index: 2;
}
.hero h1 {
    font-size: 70px;
    max-width: 700px;
    margin-bottom: 20px;
}
.hero h3 {
    margin-bottom: 20px;
    font-size: 28px;
}
.hero p {
    margin-bottom: 20px;
    font-size: 20px;
}
form {
    display: flex;
    justify-content: center;
    gap: 10px;
}
form input {
    width: 400px;
    height: 60px;
    padding: 15px;
    font-size: 18px;
    background-color: rgba(0,0,0,0.7);
    border: 1px solid gray;
    color: white;
}
form button {
    height: 60px;
    padding: 0 25px;
    background-color: red;
    border: none;
    color: white;
    font-size: 22px;
    border-radius: 4px;
    cursor: pointer;
}
.trending {
    padding: 70px;
}
.trending h2 {
    margin-bottom: 25px;
    font-size: 34px;
}
.movie-row {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}
.movie-row img {
    width: 19%;
    height: 320px;
    object-fit: cover;
    border-radius: 12px;
    transition: 0.3s;
    cursor: pointer;
}
.movie-row img:hover {
    transform: scale(1.05);
}
.reasons {
    padding: 70px;
}
.reasons h2 {
    font-size: 34px;
    margin-bottom: 25px;
}
.reason-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
}
.card {
    background: linear-gradient(to bottom right, #1d2344, #210d19);
    padding: 30px;
    border-radius: 18px;
    min-height: 320px;
}
.card h3 {
    font-size: 34px;
    margin-bottom: 20px;
}
.card p {
    color: #b3b3b3;
    line-height: 1.5;
    font-size: 22px;
}
.faq {
    padding: 70px;
}
.faq h2 {
    font-size: 34px;
    margin-bottom: 25px;
}
.faq-box {
    background-color: #2d2d2d;
    padding: 30px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    cursor: pointer;
    transition: 0.3s;
}
.faq-box:hover {
    background-color: #444;
}
.answer {
    background-color: #2d2d2d;
    padding: 30px;
    margin-top: -8px;
    margin-bottom: 10px;
    font-size: 22px;
    line-height: 1.5;
}
.ready {
    text-align: center;
    padding: 70px;
}
.ready p {
    margin-bottom: 20px;
    font-size: 22px;
}
footer {
    padding: 70px;
    color: gray;
}
.footer-links {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 30px 0;
}
.footer-links div {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.footer-links a {
    color: gray;
}
footer select {
    padding: 12px 20px;
    background-color: black;
    color: white;
    border: 1px solid gray;
}
.netflix-india {
    margin-top: 25px;
}
