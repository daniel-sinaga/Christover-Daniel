// Menangani perubahan warna navbar saat discroll
window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('fixed-top');
    } else {
        navbar.classList.remove('fixed-top');
    }
});

// Menangani animasi pada elemen-elemen saat di-scroll
document.querySelectorAll('.animate-on-scroll').forEach(element => {
    element.style.opacity = '0';

    var observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1s ease-out';
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    });

    observer.observe(element);
});

// Fungsi untuk menangani pengiriman formulir
function submitForm(event) {
    event.preventDefault(); // Menghentikan perilaku default formulir

    // Dapatkan nilai dari input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Validasi sederhana
    if (name === '' || email === '' || message === '') {
        alert('Semua kolom formulir harus diisi!');
        return;
    }

    // Kirim formulir atau lakukan tindakan lainnya di sini

    // Contoh: Log pesan ke konsol
    console.log('Formulir berhasil dikirim:', { name, email, message });

    // Atur formulir kembali ke keadaan awal
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';

    // Tambahkan animasi atau tindakan lanjutan di sini
    document.getElementById('contact-form').style.animation = 'fadeOut 1s ease';
}

// Menambahkan event listener untuk formulir
document.getElementById('contact-form').addEventListener('submit', submitForm);
