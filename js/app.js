// my global variables
const sections =document.querySelectorAll("section");
const frag = document.createDocumentFragment();
const navBar = document.querySelector('#navbar-list');

// linking the navbar and the existing sections together
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

function activeSection() {
    sections.forEach(section => {
        const itemView = sectionView(section);
        function viewport() {
           return (itemView > -160 && itemView <= 400);
        }
        removeActiveClass(section);
        addActiveClass(viewport(), section);
    });
};

// add eventlistener to window
window.addEventListener("scroll", activeSection);

// scrolling to the top
// scroll button dissappearing on the top
const scrollUpBtn = document.querySelector("#arrow-up")
window.addEventListener("scroll", function() {
    if (window.scrollY == 0) {
        scrollUpBtn.style.display = "none"
    }else {
        scrollUpBtn.style.display = "block"
    }
})
function scrollToTop() {
    window.scrollTo(top);
}

// adding sections
const addSectionBtn = document.querySelector("#add-section");
function addSection() {
    const sections =document.querySelectorAll("section");
    // defining the elements 
    const newSection = document.createElement("section");
    const newH2 = document.createElement("h2");
    const newDiv = document.createElement("div");
    const newP = document.createElement("p");

    // constraucting the section
    newP.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi non arcu risus quis varius. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Hac habitasse platea dictumst vestibulum rhoncus est. Velit laoreet id donec ultrices tincidunt arcu non sodales. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Amet nisl purus in mollis nunc sed id. Nisi scelerisque eu ultrices vitae auctor. At tempor commodo ullamcorper a lacus vestibulum sed arcu.";
    newDiv.appendChild(newP);
    newDiv.classList.add("container");
    newH2.innerText = "Section "+(sections.length+1);
    newSection.appendChild(newH2);
    newSection.appendChild(newDiv);
    newSection.setAttribute("id","section"+(sections.length+1));
    newSection.setAttribute("data-nav", "Section "+(sections.length+1))
    frag.appendChild(newSection);
    const sectionsArea = document.querySelector("#sections-area");
    sectionsArea.appendChild(frag);
    
    // linking new sections to navbar
    function linkToNavBar() {
        const sections =document.querySelectorAll("section");
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

        // adding active to the navbar
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
        
        function activeSection() {
            sections.forEach(section => {
                const itemView = sectionView(section);
                function viewport() {
                   return (itemView > -160 && itemView <= 400);
                }
                removeActiveClass(section);
                addActiveClass(viewport(), section);
            });
        };
        
        // add eventlistener to window
        window.addEventListener("scroll", activeSection);
        
    }
    // deletes all navBar children
    function removeChildren(navBar) {
        while(navBar.lastChild) {
            navBar.removeChild(navBar.lastChild);
        }
    }
    // appling the changes to the navBar
    removeChildren(navBar);
    linkToNavBar();
}