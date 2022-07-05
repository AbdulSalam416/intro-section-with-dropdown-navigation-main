let dropdowns = document.querySelectorAll(".dropdown");

let featuresdDropdown = document.querySelectorAll(".dropdown")[0];


let featuresArrow = document.querySelector("img")
let companyArrow = document.getElementById("companyArrow")


let features_ul = document.querySelectorAll('ul')[1];
let comapny_ul = document.querySelectorAll('ul')[2];



function triggerFunc(e) {


    if (this.innerText.includes("Features")) {
        this.style.color = "black"
        features_ul.classList.toggle('features')
        featuresArrow.style.transform = "rotate(180deg)";


    } else {
        this.style.color = "black"
        comapny_ul.classList.toggle('company')
        companyArrow.style.transform = "rotate(180deg)";
        companyArrow.style.fill = "black"



    }
}



// document.addEventListener("click", function(event) {

//         let dropdownItems = document.querySelectorAll(".dropdown-list");



//         if (!event.target.classList.contains("features-target")) {
//             var i;
//             for (i = 0; i < dropdownItems.length; i++) {
//                 var openDropdown = dropdownItems[i][i];
//                 console.log(openDropdown.classList)
//                 if (openDropdown.classList.contains('features')) {
//                     openDropdown.classList.remove('features');
//                 }
//             }
//         }

//     }



// )

dropdowns.forEach(dropdown => dropdown.addEventListener("click", triggerFunc));
// dropdowns.forEach(dropdown => dropdown.addEventListener("mouseover", triggerFunc));