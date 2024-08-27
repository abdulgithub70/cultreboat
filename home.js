document.addEventListener('DOMContentLoaded', function () {
    // Handle smooth scrolling for links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Implement the water-like cursor effect (optional bonus)
    document.body.addEventListener('mousemove', function (e) {
        const waterCursor = document.createElement('div');
        waterCursor.className = 'water-cursor';
        document.body.appendChild(waterCursor);

        waterCursor.style.left = `${e.pageX}px`;
        waterCursor.style.top = `${e.pageY}px`;

        setTimeout(() => {
            waterCursor.remove();
        }, 1000);
    });
});

// To download the resume as a button
document.getElementById('download-resume').addEventListener('click', function () {
    window.open('path/to/your-resume.pdf');
});
