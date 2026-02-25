

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }

    form.classList.add('was-validated')
    }, false)
})

const navbar = document.getElementById("navbar");
const navbar_brand = document.getElementById("navbar-brand");
const offcanvas_menu = document.getElementById("offcanvas-menu");
const listener = document.addEventListener('scroll', e =>{
    if (Number(window.pageYOffset) != 0) {
        navbar.classList.add("is-sticky");
        navbar.classList.add("bg-body-tertiary")

        offcanvas_menu.classList.remove("text-white");
        offcanvas_menu.classList.add('text-black');

        navbar_brand.src = "./IMG/owp-mentor-logo-b.png";
    }else if(Number(window.pageYOffset) == 0){
        navbar.classList.remove("is-sticky");
        navbar.classList.remove("bg-body-tertiary")

        offcanvas_menu.classList.remove("text-black");
        offcanvas_menu.classList.add('text-white');
        
        navbar_brand.src = "./IMG/owp-mentor-logo-w.png";
    }
})