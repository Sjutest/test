document.getElementById('showMore').addEventListener('click', function() {
    alert('Aici vor fi mai multe informații despre proiectele mele!');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mesajul tău a fost trimis!');
});
