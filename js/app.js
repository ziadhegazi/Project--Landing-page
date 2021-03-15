// my global variables
const sections =document.querySelectorAll("section");
const frag = document.createDocumentFragment();
const navBar = document.querySelector('#navbar-list');

// linking the navbar and the sections together
for (let section of sections) {
    const sectionId = section.getAttribute("id");
    const sectionTitle = section.getAttribute("data-nav");
    const list = document.createElement("li");
    const Anchors = document.createElement("a");

    // define the lists
    Anchors.setAttribute("href", `#${sectionId}`);
    Anchors.innerText = sectionTitle;
    list.appendChild(Anchors);
    Anchors.classList = "menu-link";
    frag.appendChild(list);

    // add event smooth scroll
    Anchors.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({ top: section.offsetTop - 100, behavior: "smooth"});
    });
};
navBar.appendChild(frag);

// select the a tags inside navbar
const allAnchors = navBar.querySelectorAll('a');


/* // Add class 'active' to section when near top of viewport */
// Get the Top of the section
function sectionView(section) {
    return section.getBoundingClientRect().top;
}

// Remove Active Class of all sections
function removeActiveClass(section) {
    navBar.querySelector('li a[href*="#'+section.getAttribute("id")+'"]').classList.remove("active-link");
    return section.classList.remove("active-section");
}

// Add Active Class to the required section
function addActiveClass(is_inview, section) {
if (is_inview) {
    section.classList.add("active-section");
    navBar.querySelector('li a[href*="#'+section.getAttribute("id")+'"]').classList.add("active-link");
};
}

// combine functions //
const activeSection = () => {
sections.forEach(section => {
    const itemView = sectionView(section);
    viewport = () => itemView > -200 && itemView <= 400;
    removeActiveClass(section);
    addActiveClass(viewport(), section);
});
};

// add eventlistener to window
window.addEventListener('scroll', activeSection);