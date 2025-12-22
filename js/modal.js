const modal = document.getElementById('videoModal');
const video = document.getElementById('modalVideo');
const closeBtn = modal.querySelector('.modal-close');
const backdrop = modal.querySelector('.modal-backdrop');

/* ===== open ===== */
function openModal(src) {
  modal.classList.add('is-open');

  video.src = src;
  video.load();

  // ユーザー操作直結 → 再生ブロックされない
  video.play().catch(() => {});
}

/* ===== close ===== */
function closeModal() {
  modal.classList.remove('is-open');
  video.pause();
  video.removeAttribute('src'); // 通信解放
  video.load();
}

/* ===== hotspot ===== */
document.querySelectorAll('.hotspot').forEach(spot => {
  spot.addEventListener('click', () => {
    const src = spot.dataset.video;
    if (!src) return;
    openModal(src);
  });
});

/* ===== close actions ===== */
closeBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

// Escキー対応（PC）
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
