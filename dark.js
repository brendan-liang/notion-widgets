document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const darkMode = params.get('dark');


    if (darkMode === 'on') {
        document.documentElement.style.setProperty('--link', 'rgb(149, 156, 158)');
        document.documentElement.style.setProperty('--colour', 'rgb(240, 240, 240)');
        document.documentElement.style.setProperty('--background', 'rgb(25, 25, 25)');

        document.body.style.backgroundColor = 'var(--background)';
        document.body.style.color = 'var(--colour)';

        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.href = link.href.includes('?') ? link.href + '&dark=on' : link.href + '?dark=on';
        });

        const darklightLink = document.getElementById('darklight');
        darklightLink.href = '?dark=off';
        darklightLink.textContent = 'light mode';

    } else {
        document.body.style.backgroundColor = 'var(--background)';
        document.body.style.color = 'var(--colour)';
    }
});