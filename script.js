/* =============== SHOW/HIDE MENU =============== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/* Show Menu */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

/* Hide Menu */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

/* Remove Menu on Link Click (Mobile) */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/* =============== ACTIVE LINK ON SCROLL =============== */
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () => {
  	const scrollY = window.pageYOffset

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			sectionsClass.classList.add('active-link')
		} else {
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/* =============== ADD BLUR TO HEADER ON SCROLL =============== */
const blurHeader = () => {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


/* =============== SHOW SCROLL UP =============== */ 
const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/* =============== MIXITUP FILTER PORTFOLIO =============== */
if (typeof mixitup !== 'undefined') {
    let mixerPortfolio = mixitup('.portfolio__container', {
        selectors: {
            target: '.portfolio__card'
        },
        animation: {
            duration: 300
        }
    });

    /* Active Link Portfolio */ 
    const linkPortfolio = document.querySelectorAll('.portfolio__item')

    function activePortfolio() {
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
        this.classList.add('active-portfolio')
    }

    linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))
}

/* =============== CONTACT FORM FAKE SUBMISSION =============== */
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show fake success message
        contactMessage.textContent = 'تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.';
        contactMessage.style.color = 'var(--primary-color)';
        
        // Remove message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);
        
        // Clear inputs
        contactForm.reset();
    });
}
