const container = document.querySelector('#container');
const logo = document.querySelector('#logo');
const menu = document.querySelector('#menu');
const checkLayouts = document.querySelectorAll('.border');
console.log(checkLayouts);

checkLayouts.forEach( layout=> {
    layout.addEventListener('click', () => {
        const checkBox = layout.children[0];
        const name = checkBox.getAttribute('name');
        console.log(name);

        if (name == 'div1') {
            logo.classList.toggle('outline');
        } else if (name == 'div2') {
            menu.classList.toggle('outline');
        } else {
            container.classList.toggle('outline');
        }
        checkBox.toggleAttribute('checked');
    });
});
