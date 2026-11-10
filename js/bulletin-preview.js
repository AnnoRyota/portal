(() => {
    const modal = document.getElementById('bulletin-preview');
    const link = document.getElementById('bulletin-link');
    const close = document.getElementById('pdf-close');
    if (!modal || !link || !close) return;
    let previousOverflow;
    link.addEventListener('click', (event) => {
        event.preventDefault();
        if (modal.open) return;
        previousOverflow = document.body.style.overflow;
        const frame = modal.querySelector('iframe');
        if (!frame.getAttribute('src')) frame.src = frame.dataset.src;
        modal.showModal();
        document.body.style.overflow = 'hidden';
    });
    close.addEventListener('click', () => modal.close());
    modal.addEventListener('click', (event) => {
        const bounds = modal.getBoundingClientRect();
        if (event.target === modal && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) modal.close();
    });
    modal.addEventListener('close', () => {
        document.body.style.overflow = previousOverflow;
        link.focus();
    });
})();
