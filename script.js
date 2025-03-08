document.addEventListener('DOMContentLoaded', () => {
    const buttons = {
        udonBtn: '🍜 Ayo kita makan Udon favoritmu! Aku traktir...',
        movieBtn: '🎬 Kita bisa nonton film terbaru yang kamu mau!',
        shoppingBtn: '🛍️ Aku akan temani kamu belanja seharian!'
    };

    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const closeBtn = document.querySelector('.close-btn');

    // Handle button clicks
    Object.keys(buttons).forEach(btnId => {
        document.getElementById(btnId).addEventListener('click', () => {
            popupMessage.textContent = buttons[btnId];
            popup.style.display = 'flex';
        });
    });

    // Close popup
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Close when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Music control
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.volume = 0.3; // Set volume ke 30%
});

// Animasi Cincin
const ringAnimation = document.getElementById('ringAnimation');

// Fungsi untuk menampilkan animasi cincin
function showRingAnimation() {
    ringAnimation.classList.add('active');
}

// Fungsi untuk menyembunyikan animasi cincin
function hideRingAnimation() {
    ringAnimation.classList.remove('active');
}

// Contoh: Tampilkan animasi cincin setelah 5 detik
setTimeout(showRingAnimation, 5000); // Ganti 5000 dengan waktu yang diinginkan (dalam milidetik)

// Tutup animasi cincin saat diklik
ringAnimation.addEventListener('click', hideRingAnimation);

// Ambil elemen input dan button
const userMessage = document.getElementById('userMessage');
const sendMessageBtn = document.getElementById('sendMessageBtn');

// Fungsi untuk mengirim pesan
sendMessageBtn.addEventListener('click', () => {
    const message = userMessage.value.trim();

    if (message) {
        alert(`Pesan terkirim: "${message}"`);
        userMessage.value = ''; // Kosongkan input
    } else {
        alert('Tulis pesan dulu yah! 💌');
    }
});

// Fungsi untuk mengirim pesan ke WhatsApp
sendMessageBtn.addEventListener('click', () => {
    const message = userMessage.value.trim(); // Ambil pesan dari input

    if (message) {
        // Format nomor WhatsApp (gunakan format internasional)
        const phoneNumber = '6281321219618'; // Ganti dengan nomor Anda
        const encodedMessage = encodeURIComponent(message); // Encode pesan untuk URL
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        // Buka link WhatsApp di tab baru
        window.open(whatsappUrl, '_blank');
    } else {
        alert('Tulis pesan dulu yah! 💌'); // Tampilkan alert jika input kosong
    }
});

