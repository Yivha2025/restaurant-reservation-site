document.addEventListener('DOMContentLoaded', function () {
  const openBtn = document.getElementById('openReservation');
  const closeBtn = document.getElementById('closeReservation');
  const modal = document.getElementById('reservationModal');

  openBtn.addEventListener('click', function () {
    modal.style.display = 'flex';
    this.classList.add('clicked');
  });

  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
    openBtn.classList.remove('clicked');
  });

  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
      openBtn.classList.remove('clicked');
    }
  });
});