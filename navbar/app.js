//classList - shows/gets all classes
//contains - checls classList for specific class
//add - adds class
//remove - remove class
//toggle - toggles class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    // // console.log(links.classList.contains('links'));
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links');
    // } else {
    //     links.classList.add('show-links');
    // }
    navToggle.classList.toggle('nav-toggler')
    links.classList.toggle('show-links');
});