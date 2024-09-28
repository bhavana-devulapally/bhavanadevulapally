document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  

  function openModal(projectId) {
    document.getElementById(projectId).style.display = "flex";
}

function closeModal(projectId) {
    document.getElementById(projectId).style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            closeModal(modals[i].id);
        }
    }
}
