const mediaQuery_480px = window.matchMedia('(min-width: 480px)');
const mediaQuery_1024px = window.matchMedia('(min-width: 1024px)');

const item_one = document.querySelector('.column__text__conteiner.one');
const btn_one = document.querySelector('.column__title__conteiner.one');

const item_two = document.querySelector('.column__text__conteiner.two');
const btn_two = document.querySelector('.column__title__conteiner.two');

const item_three = document.querySelector('.column__text__conteiner.three');
const btn_three = document.querySelector('.column__title__conteiner.three');

const item_four = document.querySelector('.column__text__conteiner.four');
const btn_four = document.querySelector('.column__title__conteiner.four');

const item_five = document.querySelector('.column__text__conteiner.five');
const btn_five = document.querySelector('.column__title__conteiner.five');

const arrow_one = document.querySelector('.sign.one');
const arrow_two = document.querySelector('.sign.two');
const arrow_three = document.querySelector('.sign.three');
const arrow_four = document.querySelector('.sign.four');
const arrow_five = document.querySelector('.sign.five');

btn_one_isClicked = false;
btn_two_isClicked = false;
btn_three_isClicked = false;
btn_four_isClicked = false;
btn_five_isClicked = false;

if (mediaQuery_480px.matches) {
    item_one.style.display = "flex";
    btn_one_isClicked = false;
} else {
    btn_one.addEventListener("click", () => {
        if (btn_one_isClicked == false) {
            item_one.style.display = "flex";
            arrow_one.style.transform = "rotate(90deg)"
            btn_one_isClicked = true;
        } else {
            item_one.style.display = "none";
            arrow_one.style.transform = "rotate(0deg)"
            btn_one_isClicked = false;
        }
    });
};

if (mediaQuery_480px.matches) {
    item_two.style.display = "flex";
    btn_two_isClicked = false;
} else {
    btn_two.addEventListener("click", () => {
        if (btn_two_isClicked == false) {
            item_two.style.display = "flex";
            arrow_two.style.transform = "rotate(90deg)"
            btn_two_isClicked = true;
        } else {
            item_two.style.display = "none";
            arrow_two.style.transform = "rotate(0deg)"
            btn_two_isClicked = false;
        }
    });
};

if (mediaQuery_480px.matches) {
    item_three.style.display = "flex";
    btn_three_isClicked = false;
} else {
    btn_three.addEventListener("click", () => {
        if (btn_three_isClicked == false) {
            item_three.style.display = "flex";
            arrow_three.style.transform = "rotate(90deg)"
            btn_three_isClicked = true;
        } else {
            item_three.style.display = "none";
            arrow_three.style.transform = "rotate(0deg)"
            btn_three_isClicked = false;
        }
    });
};

if (mediaQuery_480px.matches) {
    item_four.style.display = "flex";
    btn_four_isClicked = false;
} else {
    btn_four.addEventListener("click", () => {
        if (btn_four_isClicked == false) {
            item_four.style.display = "flex";
            arrow_four.style.transform = "rotate(90deg)"
            btn_four_isClicked = true;
        } else {
            item_four.style.display = "none";
            arrow_four.style.transform = "rotate(0deg)"
            btn_four_isClicked = false;
        }
    });
};

if (mediaQuery_480px.matches) {
    item_five.style.display = "flex";
    btn_five_isClicked = false;
} else {
    btn_five.addEventListener("click", () => {
        if (btn_five_isClicked == false) {
            item_five.style.display = "flex";
            arrow_five.style.transform = "rotate(90deg)"
            btn_five_isClicked = true;
        } else {
            item_five.style.display = "none";
            arrow_five.style.transform = "rotate(0deg)"
            btn_five_isClicked = false;
        }
    });
};

const header = document.querySelector('.header.conteiner');
const header_fixed = document.querySelector('.header.conteiner.fixed');
const hero = document.querySelector('.hero');
const anchor_1 = document.getElementById('anchor1');
const anchor_2 = document.getElementById('anchor2');
const anchor_3 = document.getElementById('anchor3');
const anchor_4 = document.getElementById('anchor4');
const anchor_5 = document.getElementById('anchor5');
const anchor_6 = document.getElementById('anchor6');
const anchor_7 = document.getElementById('anchor7');
const anchor_8 = document.getElementById('anchor8');
const anchor_9 = document.getElementById('anchor9');

const btn__conteiner__1 = document.getElementById('btn__conteiner__1');
const btn__1 = document.getElementById('btn__1');
const btn__conteiner__2 = document.getElementById('btn__conteiner__2');
const btn__2 = document.getElementById('btn__2');

const header__padding = document.getElementById('header');

const logo = document.querySelector('.logo.text');

headerAppeared = false;
searchClicked = false;

window.addEventListener("scroll", () => {
    if (window.scrollY > 200 && searchClicked == false) {
        headerFixed();
        header.addEventListener("animationend", headerShow);
    } else if (window.scrollY < 200 && headerAppeared === true && searchClicked === false) {
        header.classList.remove("fixed");
        header.classList.add("unfixed");
        header.addEventListener("animationend", headerHide);
    }
});

function headerShow() {
    headerAppeared = true;
    header.removeEventListener("animationend", headerShow);
}

function headerHide() {
    headerUnfixed();
    headerAppeared = false;
    header.removeEventListener("animationend", headerHide);
};

function headerFixed() {
    header.classList.add("fixed");
    header__padding.classList.add('applied');

    hero.style.paddingTop = "var(--size-8xl)";
    anchor_1.style.color = "black";
    anchor_2.classList.add("fixed");
    anchor_3.classList.add("fixed");
    anchor_4.classList.add("fixed");
    anchor_5.classList.add("fixed");
    anchor_6.style.color = "black";
    anchor_6v2.style.color = "black";
    anchor_7.classList.add("fixed");
    anchor_8.style.color = "black";
    anchor_9.style.color = "black";

    btn__conteiner__1.classList.add("fixed");
    btn__conteiner__2.classList.add("fixed");
    btn__1.classList.add("fixed");
    btn__2.classList.add("fixed");

    logo.style.filter = "brightness(0)";
};

function headerUnfixed() {
    header.classList.remove("unfixed");
    header__padding.classList.remove('applied');

    hero.style.paddingTop = "var(--size-xl)";
    anchor_1.style.color = "var(--clr-white)";
    anchor_2.classList.remove("fixed");
    anchor_3.classList.remove("fixed");
    anchor_4.classList.remove("fixed");
    anchor_5.classList.remove("fixed");
    anchor_6.style.color = "var(--clr-white)";
    anchor_6v2.style.color = "var(--clr-white)";
    anchor_7.classList.remove("fixed");
    anchor_8.style.color = "var(--clr-white)";
    anchor_9.style.color = "var(--clr-white)";

    btn__conteiner__1.classList.remove("fixed");
    btn__conteiner__2.classList.remove("fixed");
    btn__1.classList.remove("fixed");
    btn__2.classList.remove("fixed");

    logo.style.filter = "brightness(1)";
};

const nav = document.getElementById("nav");
const nav__conteiner = document.querySelector(".nav__conteiner.conteiner");
const hamburger = document.querySelector(".header__bars");
const x_mark = document.querySelector(".x-mark");

nav.style.display = "none";
hamburger.addEventListener("click", () => {
    if (nav.style.display == "none") {
        nav__conteiner.removeEventListener("animationend", hideNav);
        nav.style.display = "block";
    }
});

x_mark.addEventListener("click", () => {
    if (nav.style.display == "block") {
        nav__conteiner.classList.add('close');
        nav__conteiner.addEventListener("animationend", hideNav);
    }
});

function hideNav() {
    nav__conteiner.classList.remove('close');
    nav.style.display = "none";
}

const nav_btn = document.querySelector(".nav__anchor__product__conteiner");
const nav_arrow = document.querySelector(".arrow__sign__product__v2");
const nav_dropdown = document.querySelector(".nav__anchor__product__dropdown");

nav_dropdown.style.display = "none";
nav_btn.addEventListener("click", () => {
    if (nav_dropdown.style.display == "none") {
        nav_dropdown.style.display = "flex";
        nav_arrow.style.transform = "rotate(0deg)";
    } else {
        nav_dropdown.style.display = "none";
        nav_arrow.style.transform = "rotate(-90deg)";
    }
});

const anchor_6v2 = document.getElementById("anchor6v2");
const x_mark_search = document.querySelector(".x-mark__search");
const search__bar = document.querySelector(".header__search__bar__wrapper");
const header__left__menu = document.querySelector(".header__left__menu");
const header__right__menu = document.querySelector(".header__right__menu");
const btn__conteiner__3 = document.getElementById("btn__conteiner__3");
const header__logo = document.querySelector(".header__logo");

search__bar.style.display = "none";

if (mediaQuery_1024px.matches) {
    anchor_6.addEventListener("click", () => {
        if (search__bar.style.display == "none") {
            searchClicked = true;
            header__left__menu.style.display = "none";
            header__right__menu.style.display = "none";
            search__bar.style.display = "block";
            anchor_6v2.style.display = "block";
            anchor_6.style.display = "none";
            btn__conteiner__3.style.display = "flex";
            headerFixed();
            header.addEventListener("animationend", headerShow);
        } else {
            search__bar.style.display = "none";
            anchor_6v2.style.display = "none";
            btn__conteiner__3.style.display = "none";
            anchor_6.style.display = "block";
            header__left__menu.style.display = "flex";
            header__right__menu.style.display = "flex";
            header.classList.remove("fixed");
            header.classList.add("unfixed");
            header.addEventListener("animationend", headerHide);
            searchClicked = false;
        }
    });

    x_mark_search.addEventListener("click", () => {
        if (search__bar.style.display == "none") {
            searchClicked = true;
            header__left__menu.style.display = "none";
            header__right__menu.style.display = "none";
            search__bar.style.display = "block";
            anchor_6v2.style.display = "block";
            anchor_6.style.display = "none";
            btn__conteiner__3.style.display = "flex";
            headerFixed();
            header.addEventListener("animationend", headerShow);
        } else {
            search__bar.style.display = "none";
            anchor_6v2.style.display = "none";
            btn__conteiner__3.style.display = "none";
            anchor_6.style.display = "block";
            header__left__menu.style.display = "flex";
            header__right__menu.style.display = "flex";
            header.classList.remove("fixed");
            header.classList.add("unfixed");
            header.addEventListener("animationend", headerHide);
            searchClicked = false;
        }
    });
} else {
    anchor_6.addEventListener("click", () => {
        if (search__bar.style.display == "none") {
            searchClicked = true;
            hamburger.style.display = "none";
            header__logo.style.display = "none";
            search__bar.style.display = "block";
            anchor_6v2.style.display = "block";
            anchor_6.style.display = "none";
            headerFixed();
            header.addEventListener("animationend", headerShow);
        } else {
            search__bar.style.display = "none";
            anchor_6v2.style.display = "none";
            anchor_6.style.display = "block";
            hamburger.style.display = "block";
            header__logo.style.display = "flex";
            header.classList.remove("fixed");
            header.classList.add("unfixed");
            header.addEventListener("animationend", headerHide);
            searchClicked = false;
        }
    });

    x_mark_search.addEventListener("click", () => {
        if (search__bar.style.display == "none") {
            searchClicked = true;
            hamburger.style.display = "none";
            header__logo.style.display = "none";
            search__bar.style.display = "block";
            anchor_6v2.style.display = "block";
            anchor_6.style.display = "none";
            headerFixed();
            header.addEventListener("animationend", headerShow);
        } else {
            search__bar.style.display = "none";
            anchor_6v2.style.display = "none";
            anchor_6.style.display = "block";
            hamburger.style.display = "block";
            header__logo.style.display = "flex";
            header.classList.remove("fixed");
            header.classList.add("unfixed");
            header.addEventListener("animationend", headerHide);
            searchClicked = false;
        }
    });
};