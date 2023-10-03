document.addEventListener('DOMContentLoaded', function() {
    const toggleDarkMode = document.createElement('button');
    toggleDarkMode.innerText = 'Toggle Dark Mode';
    toggleDarkMode.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
    document.body.insertBefore(toggleDarkMode, document.body.firstChild);
});

function openModal(videoUrl) {
    const modal = document.getElementById('videoModal');
    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = videoUrl;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('videoModal');
    modal.style.display = 'none';
    const videoFrame = document.getElementById('videoFrame');
    videoFrame.src = ''; // Stop the video playback when closing the modal
}




function addVideo() {
    const videoGrid = document.getElementById('videoGrid');
    const videoUrl = document.getElementById('videoUrl').value;
    const videoDescription = document.getElementById('videoDescription').value;

    // Extract YouTube video ID from the URL
    const videoId = videoUrl.split('v=')[1];

    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';

    videoCard.innerHTML = `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
        <p>${videoDescription}</p>
        <button onclick="removeVideo(this)">Remove</button>
    `;

    videoGrid.appendChild(videoCard);
}

function removeVideo(buttonElement) {
    const videoCard = buttonElement.parentElement;
    videoCard.remove();
}
