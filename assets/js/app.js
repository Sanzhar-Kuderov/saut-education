

const submit_help = document.querySelectorAll('#submit-help');
for (let i = 0; i < submit_help.length; i++) {
    submit_help[i].addEventListener('click', function () {

        for (let iClass = 0; iClass < submit_help.length; iClass++) {
            submit_help[iClass].classList.remove('active')
        }
        submit_help[i].setAttribute('class', 'help-main__item active')

        let content = document.querySelectorAll('.content-help-main__body');
        for (let j = 0; j < content.length; j++) {
            content[j].classList.remove('active');
        }
        document.querySelector(`#help-content-${i}`).classList.add('active');

    })
}


document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('.body').classList.add('no-scroll');
    document.querySelector('#smarphone-fullscreen').classList.add('active');
    document.querySelector('#smarphone-menu').classList.add('active');
})
document.querySelector('#smarphone-exit').addEventListener('click', function () {
    document.querySelector('#smarphone-fullscreen').classList.remove('active');
    document.querySelector('#smarphone-menu').classList.remove('active');
    document.querySelector('.body').classList.remove('no-scroll');
})


const submit_modal_consultant = document.querySelectorAll('#submit-modal-consultant');
for (let i = 0; i < submit_modal_consultant.length; i++) {
    submit_modal_consultant[i].addEventListener('click', function () {
        document.querySelector('.body').classList.add('no-scroll');
        document.querySelector('.modal').classList.add('active');
    })
}
document.querySelector('.mobal__form-exit').addEventListener('click', function () {
    document.querySelector('.modal.active').classList.remove('active');
    document.querySelector('.body').classList.remove('no-scroll');
})


$('#filterPhone, #modal-filter-hone').mask('+7 (999) 999-99-99');


$('.diploma-about__slick').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    infinite: false,
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
$('.diploma-about__arrows').slick({
    arrows: true,
    dots: false,
    slidesToShow: 3,
    infinite: false,
    asNavFor: '.diploma-about__slick',
    responsive: [
        {
            breakpoint: 1170,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
})


Fancybox.bind();