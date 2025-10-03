document.addEventListener('DOMContentLoaded', function () {
    const linkButtons = document.querySelectorAll('.link_button, .link_button_highlight');

    let maxWidth = 0;
    linkButtons.forEach(button => {
        const buttonWidth = button.offsetWidth;
        if (buttonWidth > maxWidth) {
            maxWidth = buttonWidth;
        }
    });

    linkButtons.forEach(button => {
        button.style.display = 'block';
        button.style.width = `${maxWidth}px`;
    });
});