```javascript
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


/* THEME */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.documentElement.setAttribute(
        "data-theme",
        "dark"
    );

    themeIcon.textContent = "☀";
} else {
    document.documentElement.removeAttribute(
        "data-theme"
    );

    themeIcon.textContent = "☾";
}


themeToggle.addEventListener("click", () => {

    const isDark =
        document.documentElement.getAttribute(
            "data-theme"
        ) === "dark";


    if (isDark) {

        document.documentElement.removeAttribute(
            "data-theme"
        );

        localStorage.setItem(
            "theme",
            "light"
        );

        themeIcon.textContent = "☾";

    } else {

        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );

        localStorage.setItem(
            "theme",
            "dark"
        );

        themeIcon.textContent = "☀";
    }

});


/* MOBILE MENU */

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove(
                "active"
            );

        });

    });


/* SMOOTH SCROLL */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    targetId === "#" ||
                    !targetId
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    });


/* ACTIVE NAVIGATION */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }


                navigationLinks.forEach(
                    link => {

                        link.classList.remove(
                            "active"
                        );


                        if (
                            link.getAttribute(
                                "href"
                            ) ===
                            `#${entry.target.id}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    }
                );

            });

        },

        {
            rootMargin:
                "-35% 0px -55% 0px"
        }

    );


sections.forEach(
    section =>
        observer.observe(section)
);


/* PROJECT CARD EFFECT */

document
    .querySelectorAll(".project-card")
    .forEach(card => {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const rotateX =
                    ((y / rect.height) - 0.5) *
                    -2;


                const rotateY =
                    ((x / rect.width) - 0.5) *
                    2;


                card.style.transform =
                    `translateY(-6px)
                     perspective(800px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    });
```
