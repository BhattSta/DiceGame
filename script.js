// First Way
const arr = [
    {
        number: 1,
        dotsToDisplay: [5]
    },
    {
        number: 2,
        dotsToDisplay: [1,9]
    },
    {
        number: 3,
        dotsToDisplay: [1,5,9]
    },
    {
        number: 4,
        dotsToDisplay: [1,3,7,9]
    },
    {
        number: 5,
        dotsToDisplay: [1,3,5,7,9]
    },
    {
        number: 6,
        dotsToDisplay: [1,3,4,6,7,9]
    }
]
const box = document.querySelector(".box")
const rollDice = () => {
    box.innerHTML = ""
    const randomNum = Math.floor(Math.random() * arr.length)
    arr[randomNum].dotsToDisplay.forEach(item => {
        box.innerHTML+=`<span class="dot" data-number="${item}"></span>`
    })
    document.querySelector("#valueOfDice").innerHTML = randomNum + 1 
}