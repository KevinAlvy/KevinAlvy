// Mendapatkan nilai parameter 'nama' dari URL
const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("nama");

// Menampilkan nama di dalam elemen dengan id 'nama'
document.getElementById("nama").textContent = nama;

/*function startSlideshow() {
  var index = 0;
  showSlides();

  function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides[i].style.transform = "scale(3.1)";
      slides[i].classList.remove("active"); // Menghapus kelas active pada semua elemen
    }

    slides[index].style.display = "block";

    // Setelah menampilkan gambar, memberikan efek zoom in dan transparansi
    slides[index].style.transition = "transform 2s ease"; // Menggunakan transisi hanya untuk efek zoom in

    setTimeout(function () {
      slides[index].style.transform = "scale(2)";
      slides[index].classList.add("active"); // Menambahkan kelas active untuk mengubah transparansi menjadi opak
    }, 100);

    // Setelah efek zoom in dan sebelum efek zoom out, atur transisi kembali untuk efek zoom out
    setTimeout(function () {
      slides[index].style.transition =
        "transform 2s ease, background-color 1s ease"; // Menyesuaikan transisi untuk efek zoom out dan transparansi
    }, 1200);

    setTimeout(function () {
      index++;
      if (index >= slides.length) {
        index = 0;
      }
      showSlides();
    }, 3200); // Ganti gambar setiap 3.2 detik (termasuk efek zoom in, zoom out, dan transparansi)
  }
}*/

// Tanggal pernikahan
var weddingDate = new Date("April 28, 2024 09:00:00").getTime();

// Memperbarui waktu mundur setiap detik
var countdownInterval = setInterval(function () {
  var now = new Date().getTime();
  var timeDifference = weddingDate - now;

  // Menghitung hari, jam, menit, dan detik
  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Menampilkan waktu mundur di elemen HTML
  document.getElementById("days").innerText = formatTime(days);
  document.getElementById("hours").innerText = formatTime(hours);
  document.getElementById("minutes").innerText = formatTime(minutes);
  document.getElementById("seconds").innerText = formatTime(seconds);

  // Memeriksa jika waktu mundur sudah habis
  if (timeDifference < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML =
      "<h2>The Wedding is Here!</h2>";
  }
}, 1000);

// Fungsi untuk memformat waktu menjadi dua digit (misal: 05)
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

// Fungsi untuk mendeteksi scroll dan menambahkan/menghapus kelas "visible"
window.addEventListener("scroll", function () {
  var welcomContainer = document.querySelector(".welcom-container");

  // Mendapatkan posisi scroll vertikal
  var scrollPosition = window.scrollY;

  // Jika posisi scroll melebihi 100 piksel, tambahkan kelas "visible", jika tidak, hapus kelas
  if (scrollPosition > 300) {
    welcomContainer.classList.add("visible");
  } else {
    welcomContainer.classList.remove("visible");
  }
});

function createReminder() {
  const eventDetails = {
    text: "The Wedding of Nofita & Suparna",
    details: "Akad & Resepsi",
    dates: "20231203T090000/20231203T230000",
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent(
    eventDetails.text
  )}&details=${encodeURIComponent(
    eventDetails.details
  )}&dates=${encodeURIComponent(eventDetails.dates)}`;

  window.open(googleCalendarUrl, "_blank");
}


// Get the buttons with unique IDs
const button1 = document.getElementById('myButton1');
const button2 = document.getElementById('myButton2');
const button3 = document.getElementById('myButton3');
const button4 = document.getElementById('myButton4');

// Add click event listener to each button
button1.addEventListener('click', function() {
  const valueToCopy = this.dataset.value; // Get the value from data-value attribute
  navigator.clipboard.writeText(valueToCopy)
    .then(() => {
      alert('Berhasil di-copy ke clipboard!');
    })
    .catch(error => {
      console.error('Gagal meng-copy nilai:', error);
    });
});

button2.addEventListener('click', function() {
  const valueToCopy = this.dataset.value;
  navigator.clipboard.writeText(valueToCopy)
    .then(() => {
      alert('Berhasil di-copy ke clipboard!');
    })
    .catch(error => {
      console.error('Gagal meng-copy nilai:', error);
    });
});

button3.addEventListener('click', function() {
  const valueToCopy = this.dataset.value;
  navigator.clipboard.writeText(valueToCopy)
    .then(() => {
      alert('Berhasil di-copy ke clipboard!');
    })
    .catch(error => {
      console.error('Gagal meng-copy nilai:', error);
    });
});

button4.addEventListener('click', function() {
  const valueToCopy = this.dataset.value; // Get the value from data-value attribute
  navigator.clipboard.writeText(valueToCopy)
    .then(() => {
      alert('Berhasil di-copy ke clipboard!');
    })
    .catch(error => {
      console.error('Gagal meng-copy nilai:', error);
    });
});

function closeOverlay() {
  var overlay = document.getElementById("overlay");
  var additionalContent = document.getElementById("additionalContent");
  var backgroundMusic = document.getElementById("backgroundMusic");
  var musicIcon = document.getElementById("musicIcon");

  overlay.style.opacity = "0";

  setTimeout(function () {
    overlay.style.display = "none";
    additionalContent.style.display = "block";
    toggleMusic();
  }, 2000);
}

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

function toggleMusic() {
  var backgroundMusic = document.getElementById("backgroundMusic");
  var musicIcon = document.getElementById("musicIcon");

  // Toggle audio (play/pause)
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicIcon.classList.add("rotate"); // Add rotate class when music is playing
  } else {
    backgroundMusic.pause();
    musicIcon.classList.remove("rotate"); // Remove rotate class when music is paused
  }
}

window.addEventListener("scroll", function () {
  var welcomContainer = document.querySelector(".savedate");

  // Mendapatkan posisi scroll vertikal
  var scrollPosition = window.scrollY;

  // Jika posisi scroll melebihi 100 piksel, tambahkan kelas "visible", jika tidak, hapus kelas
  if (scrollPosition > 2200) {
    welcomContainer.classList.add("visible");
  } else {
    welcomContainer.classList.remove("visible");
  }
});

// Array of background image URLs
const backgroundImages = [
  "url('scr/img/1712883361466_6_11zon.jpg')",
  "url('scr/img/1712883361682_1_11zon.jpg')",
  "url('scr/img/1712911550919_3_11zon.jpg')"
];

let currentBackgroundIndex = 0; // Variable to store the current background image index
const overlay = document.getElementById("overlay");

function changeBackgroundImage() {
  // Ganti gambar latar belakang overlay
  overlay.style.backgroundImage = backgroundImages[currentBackgroundIndex];

  // Tambahkan indeks untuk gambar latar belakang berikutnya
  currentBackgroundIndex++;

  // Reset indeks ke 0 jika melebihi panjang array gambar latar belakang
  if (currentBackgroundIndex >= backgroundImages.length) {
    currentBackgroundIndex = 0;
  }
}

// Panggil fungsi untuk mengganti gambar latar belakang secara awal
changeBackgroundImage();

// Atur interval untuk mengganti gambar latar belakang setiap 6 detik
setInterval(changeBackgroundImage, 4000);