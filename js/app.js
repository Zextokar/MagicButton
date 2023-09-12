const magicButton = document.getElementById('magic-button');
const magicVideo = document.getElementById('magic-video');
const magicButton2 = document.getElementById('magic-button2');
const magicVideo2 = document.getElementById('magic-video2');
const magicHeading = document.getElementById('magic-heading');
const magictitle = document.getElementById('like');
const magicGithubLink = document.getElementById('github-link');
const magicTwitterLink = document.getElementById('twitter-link');

magicButton.addEventListener('click', () => {
    magicVideo.style.display = 'block';
    magicButton.style.display = 'none';
    magicButton2.style.display = 'none';
    magicHeading.style.display = 'none';
    magicGithubLink.style.display = 'none';
    magicTwitterLink.style.display = 'none';
    magicVideo.play();
});

magicButton2.addEventListener('click', () => {
    magicVideo2.style.display = 'block';
    magicButton.style.display = 'none';
    magicButton2.style.display = 'none';
    magicHeading.style.display = 'none';
    magicGithubLink.style.display = 'none';
    magicTwitterLink.style.display = 'none';
    magicVideo2.play();
});


document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("contextmenu", function (event) {
        event.preventDefault();
    });
});