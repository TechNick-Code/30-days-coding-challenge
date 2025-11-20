const addNoteButton = document.getElementById('addNoteBtn');
const cancelNoteButton = document.getElementById('cancelNoteButton');
const modalOverlay = document.getElementById('modalOverlay');

addNoteButton.addEventListener('click', () => {
    modalOverlay.style.visibility = 'visible';
    modalOverlay.style.transition = 'ease-in 33.3s';
});

cancelNoteButton.addEventListener('click', () => {
    modalOverlay.style.visibility = 'hidden';
    modalOverlay.style.transition = 'ease-out 0.3s';
});