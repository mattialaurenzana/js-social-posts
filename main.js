// Milestone 1
// Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// id del post,
// numero progressivo da 1 a n nome autore,
// foto autore,
// data in formato americano (mm-gg-yyyy),
// testo del post,
// immagine (non tutti i post devono avere una immagine),
// numero di likes.
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>

// Milestone 2
// Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.

// Milestone 3
// Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.



//array di oggetti
//ogni oggetto rappresenta un post della pagina

const posts = [

    {
        id : 1,
        authorName : 'Jack Frost',
        profile : 'img/jack.jpg',
        date : '03-21-2003',
        text : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image : 'img/city.jpg',
        likesNumber : 340
    },

    {
        id : 2,
        authorName : 'Katia Miller',
        profile : 'img/katia.jpg',
        date : '06-11-2009',
        text : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image : 'img/shoes.jpg',
        likesNumber : 540
    },

    {
        id : 3,
        authorName : 'Sara Johnson',
        profile : 'img/sara.jpg',
        date : '01-4-2017',
        text : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image : 'img/bread.jpg',
        likesNumber : 120
    },

    {
        id : 4,
        authorName : 'Kyle Walker',
        profile : 'img/kyle.jpg',
        date : '09-27-2012',
        text : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        likesNumber : 870
    },

    {
        id : 5,
        authorName : 'Tommy Shelby',
        profile : 'img/tommy.jpg',
        date : '02-16-2015',
        text : 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        image : 'img/boats.jpg',
        likesNumber : 3300
    }


]

const container = document.getElementById('container');

for(let i=0; i < posts.length; i++){

    const post = posts[i];
    
    container.innerHTML += `<div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${post.profile}" alt="${post.authorName}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${post.authorName}</div>
                <div class="post-meta__time">${post.date}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
    <div class="post__image">
        <img src="${post.image}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="${post.id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${post.likesNumber}</b> persone
            </div>
        </div> 
    </div>            
</div>`

}