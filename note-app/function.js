const cancelNoteButton = document.getElementById('cancelNoteButton');
const modalOverlay = document.getElementById('modalOverlay');

cancelNoteButton.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
});