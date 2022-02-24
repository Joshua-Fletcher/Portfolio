const options = {
    root: null,
    threshold: 0,
    rootMargin: "-150px"
};

const skillAmount1 = document.querySelector('.skill-amount');
const skillAmount2 = document.querySelector('.skill-amount2');
const skillAmount3 = document.querySelector('.skill-amount3');
const skillAmount4 = document.querySelector('.skill-amount4');

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log(entry.target)
            entry.target.classList.toggle('fillBar1');
            observer.unobserve(entry.target);
        }
        else {
            return;
        }
    })
}, {})

const observer2 = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log(entry.target)
            entry.target.classList.toggle('fillBar2');
            observer.unobserve(entry.target);
        }
        else {
            return;
        }
    })
}, {})

const observer3 = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log(entry.target)
            entry.target.classList.toggle('fillBar3');
            observer.unobserve(entry.target);
        }
        else {
            return;
        }
    })
}, {})

const observer4 = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            console.log(entry.target)
            entry.target.classList.toggle('fillBar4');
            observer.unobserve(entry.target);
        }
        else {
            return;
        }
    })
}, {})

observer.observe(skillAmount1);
observer2.observe(skillAmount2);
observer3.observe(skillAmount3);
observer4.observe(skillAmount4);
