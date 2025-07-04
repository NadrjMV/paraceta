document.addEventListener('DOMContentLoaded', function () {

    // 1. Lógica para o Header com efeito de scroll
    const header = document.getElementById('header');
    if (header) {
        function scrollHeader() {
            if (window.scrollY >= 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        window.addEventListener('scroll', scrollHeader);
    }

    // 2. Lógica para o Contador Regressivo
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        // Defina a data do evento aqui (Ano, Mês - 1, Dia, Hora, Minuto, Segundo)
        const eventDate = new Date(2025, 6, 5, 22, 0, 0).getTime();

        const countdownFunction = setInterval(function() {
            const now = new Date().getTime();
            const distance = eventDate - now;

            // Cálculos de tempo
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Atualiza o HTML
            document.getElementById('days').innerText = days < 10 ? '0' + days : days;
            document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
            document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
            document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;

            // Se o tempo acabar
            if (distance < 0) {
                clearInterval(countdownFunction);
                countdownElement.innerHTML = "<h3 class='evento-acontecendo'>A noite chegou!</h3>";
            }
        }, 1000);
    }


    // 3. Lógica para animar elementos ao aparecerem na tela (efeito reveal)
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }

});
