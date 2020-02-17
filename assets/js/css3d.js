
let parent = document.querySelector(".css3d")

console.log(parent);

let childOne = document.querySelector(".child1")
console.log(childOne);

let childTwo = document.querySelector(".child2")
console.log(childTwo);

let childThree = document.querySelector(".child3")
console.log(childThree);

let childFour = document.querySelector(".child4")
console.log(childFour);


// const childOnePos = childOne.addEventListener("mouseover", (e) => {
//     let childOneX = e.clientX;
//     let childOneY = e.clientY;
//     console.log(`Enfant 1 AxeX = ${childOneX}, AxeY = ${childOneY}`);
//     parent.classList.add("animOne")
// })


const childTwoAdd = childTwo.addEventListener("mouseover", (e) => {
    parent.classList.add("animTwo")
})

const childTwoDelete = childTwo.addEventListener("mouseleave", () => {
    parent.classList.remove("animTwo")
    parent.classList.add("base")
})

// const childThreePos = childThree.addEventListener("mouseover", (e) => {
//     let childThreeX = e.clientX;
//     let childThreeY = e.clientY;
//     console.log(`Enfant 3 AxeX = ${childThreeX}, AxeY = ${childThreeY}`);
// })

// const childFourPos = childFour.addEventListener("mouseover", (e) => {
//     let childFourX = e.clientX;
//     let childFourY = e.clientY;
//     console.log(`Enfant 4 AxeX = ${childFourX}, AxeY = ${childFourY}`);

// })




