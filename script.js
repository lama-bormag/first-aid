const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

if (menu) {

    menu.addEventListener('click', () => {

        nav.classList.toggle('open');

    });

}


const search = document.querySelector('#search');

if (search) {

    search.addEventListener('input', function () {

        const q = this.value.trim().toLowerCase();

        document.querySelectorAll('.aid').forEach(card => {

            const name = card.dataset.name.toLowerCase();

            if (name.includes(q)) {

                card.style.display = 'block';

            } else {

                card.style.display = 'none';

            }

        });

    });

}


const reveal = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                reveal.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.08
    }

);


document
    .querySelectorAll(
        '.case-card, .aid, .number-card, .values > div, .feature-list > div'
    )
    .forEach(element => {

        element.style.opacity = '0';
        element.style.transform = 'translateY(12px)';
        element.style.transition =
            'opacity .5s ease, transform .5s ease';

        reveal.observe(element);

    });
