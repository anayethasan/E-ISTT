let body = document.body;

let profile = document.querySelector('.headder .flex .profile');

let search = document.querySelector('.headder .flex .search-form');

let side_bar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () => {
    side_bar.classList.toggle('active');
    body.classList.toggle('active');
}

document.querySelector('#user-btn').onclick = () => {
    profile.classList.toggle('active'); 
    search.classList.remove('active'); 
}

document.querySelector('#search-btn').onclick = () => {
    search.classList.toggle('active');  
    profile.classList.remove('active'); 
}

document.querySelector('.side-bar .close-side-bar').onclick = () => {
    side_bar.classList.remove('active'); 
    body.classList.remove('active'); 
}

window.onscroll = () => {
    profile.classList.remove('active'); 
    search.classList.remove('active'); 

    if(window.innerWidth < 1200)
    {
        side_bar.classList.remove('active');
        body.classList.remove('active');
    }
}
