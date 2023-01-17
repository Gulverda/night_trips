// Second Slider Start
(function slider2() {
    const pictures1 = [
        "slider6",
        "slider7",
        "slider8",
    ];

    const buttons1 = document.querySelectorAll(".btn")
    const imgDiv1 = document.querySelector(".slider-img")

    let counter = 0

    buttons1.forEach(function (button) {
        button.addEventListener("click", function (e) {
            if (button.classList.contains('btn-left1')){
                counter--
                if(counter < 0){
                    counter = pictures1.length - 1
                }
                imgDiv1.style.background = `url('img/${pictures1[counter]}.jpg')`
            }

            if (button.classList.contains('btn-right1')){
                counter++
                if(counter > pictures1.length - 1){
                    counter = 0
                }
                imgDiv1.style.background = `url('img/${pictures1[counter]}.jpg')`
            }
            
        })

    })



}) ();
// Second Slider End

// SLIDER
(function slider1() {
    const pictures = [
        "1",
        "2",
        "3",
        "4",
        "5"
    ];

    const buttons = document.querySelectorAll(".btn")
    const imgDiv = document.querySelector(".img-container")

    let counter = 0

    buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            if (button.classList.contains('btn-left')){
                counter--
                if(counter < 0){
                    counter = pictures.length - 1
                }
                imgDiv.style.background = `url('img/${pictures[counter]}.jpg')`
            }

            if (button.classList.contains('btn-right')){
                counter++
                if(counter > pictures.length - 1){
                    counter = 0
                }
                imgDiv.style.background = `url('img/${pictures[counter]}.jpg')`
            }
            
        })

    })



}) ();

// SLIDER END


// SEARCH



var search_btn = document.querySelector(".search_btn");
var close_btn = document.querySelector(".close_btn")
var input_search = document.querySelector(".input_search")
var search_box_wrap = document.querySelector(".search_box_wrap")

search_btn.addEventListener("click", function(){
    search_box_wrap.classList.add("active")
})

close_btn.addEventListener("click", function(){
    search_box_wrap.classList.remove("active")
})



// SEARCH END
