let aboutus = document.querySelector('.about');
let health = document.querySelector('.health');
let ourClasses = document.querySelector('.our-classes');
let classout = document.querySelector('.class');
let PricingTabel = document.querySelector('.Pricing-tabel');
let Testimonial = document.querySelector('.Testimonial');
let Trainer = document.querySelector('.Trainer');
let Blog = document.querySelector('.Blog');
let footer = document.querySelector('.footer1');
window.onscroll = function() {
    //aboutoffsetTop
    let aboutoffsetTop = aboutus.offsetTop;

    //aboutoffsetheight
    let aboutoffsetheight = aboutus.offsetHeight;

    //windowHeight
    let windowHeight = this.innerHeight;

    //windowScrollTop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > aboutoffsetTop + aboutoffsetheight - windowHeight) {
        aboutus.classList.add('anmathon1');
    }

    //aboutoffsetTop
    let healthoffsetTop = health.offsetTop;

    //aboutoffsetheight
    let healthoffsetheight = health.offsetHeight;

    let windowHeight1 = this.innerHeight;

    let windowScrollTop1 = this.pageYOffset;

    if (windowScrollTop1 > healthoffsetTop + healthoffsetheight - windowHeight1) {
        health.classList.add('anmathon2');
    }

    //aboutoffsetTop
    let ourClassesffsetTop = ourClasses.offsetTop;

    //aboutoffsetheight
    let ourClassesffsetheight = ourClasses.offsetHeight;

    let windowHeight2 = this.innerHeight;

    let windowScrollTop2 = this.pageYOffset;

    if (windowScrollTop2 > ourClassesffsetTop + ourClassesffsetheight - windowHeight2) {
        ourClasses.classList.add('anmathon3');
    }

    //aboutoffsetTop
    let classoutoffsetTop = classout.offsetTop;

    //aboutoffsetheight
    let classoutoffsetheight = classout.offsetHeight;

    let windowHeight3 = this.innerHeight;

    let windowScrollTop3 = this.pageYOffset;

    if (windowScrollTop3 > classoutoffsetTop + classoutoffsetheight - windowHeight3) {
        classout.classList.add('anmathon4');
    }

    //
    //
    //aboutoffsetTop
    let PricingTabeloffsetTop = PricingTabel.offsetTop;

    //aboutoffsetheight
    let PricingTabelotffsetheight = PricingTabel.offsetHeight;

    let windowHeight4 = this.innerHeight;

    let windowScrollTop4 = this.pageYOffset;

    if (windowScrollTop4 > PricingTabeloffsetTop + PricingTabelotffsetheight - windowHeight4) {
        PricingTabel.classList.add('anmathon5');
    }

    //
    //
    //aboutoffsetTop
    let TestimonialoffsetTop = Testimonial.offsetTop;

    //aboutoffsetheight
    let Testimonialotffsetheight = Testimonial.offsetHeight;

    let windowHeight5 = this.innerHeight;

    let windowScrollTop5 = this.pageYOffset;

    if (windowScrollTop5 > TestimonialoffsetTop + Testimonialotffsetheight - windowHeight5) {
        Testimonial.classList.add('anmathon6');
    }
    //
    //
    //aboutoffsetTop
    let TraineroffsetTop = Trainer.offsetTop;

    //aboutoffsetheight
    let Trainerotffsetheight = Trainer.offsetHeight;

    let windowHeight6 = this.innerHeight;

    let windowScrollTop6 = this.pageYOffset;

    if (windowScrollTop6 > TraineroffsetTop + Trainerotffsetheight - windowHeight6) {
        Trainer.classList.add('anmathon7');
    }

    //
    //
    //aboutoffsetTop
    let BlogoffsetTop = Blog.offsetTop;

    //aboutoffsetheight
    let Blogotffsetheight = Blog.offsetHeight;

    let windowHeight7 = this.innerHeight;

    let windowScrollTop7 = this.pageYOffset;

    if (windowScrollTop7 > BlogoffsetTop + Blogotffsetheight - windowHeight7) {
        Blog.classList.add('anmathon8');
    }
};