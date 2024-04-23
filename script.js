// turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((el, index) => {
    el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if (pageTurn.classList.contains('turn')) {
            pageTurn.classList.remove('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)

        }
        else {
            pageTurn.classList.add('turn');
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - index;
            }, 500)
        }
    }
})

// contact me botton when click
const pages = document.querySelectorAll('.book-page.page-right');
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page, index) => {
        setTimeout(() => {
            page.classList.add('turn');
 
            setTimeout(() => {
                page.style.zIndex = 20 + index; 
            }, 500)

        }, (index + 1) * 200 + 100)
    })
}

// created reverse index function
let totalpages = pages.length;
let pageNumber = totalpages = 1;

function reverseIndex() {
    pagenumber--;
    if (pageNumber < 0) {
        pageNumber = totalpages - 1;
    }
}

// back profile button when click
const backProfileBtn = docuent.querySelector('.back-profile');

backProfileBtn.onclick = () => {}