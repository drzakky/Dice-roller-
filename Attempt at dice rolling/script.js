let roller = function(sides) {
    document.getElementById("prompt").innerHTML = `You just rolled a d${sides}`
    document.getElementById("number").style.border = "thick solid #0000FF";
    return document.getElementById('number').innerHTML= Math.floor((Math.random() * sides) + 1)}

    let testRoll = '2d6 +1'
document.getElementById("d4").addEventListener("click", function() {roller(4)});
document.getElementById("d6").addEventListener("click", function() {roller(6)})
document.getElementById("d8").addEventListener("click", function() {roller(8)})
document.getElementById("d10").addEventListener("click", function() {roller(10)})
document.getElementById("d12").addEventListener("click", function() {roller(12)})
document.getElementById("d20").addEventListener("click", function() {roller(20)})
document.getElementById("d100").addEventListener("click", function() {roller(100)})
document.getElementById("submit").addEventListener("click", function() {testRoll = (document.getElementById("text").value)})
console.log(testRoll)


let result = 0

let breakDown = testRoll.split((/[+]+/))
let conditions = ['d','D']
console.log(breakDown)

breakDown.forEach(function(a) {
    if(conditions.some(el => a.includes(el))){
        c = []
        a.split(/[dD]+/).forEach(function(b){
            c.push(b.trim())
        })
        for (let i = 0; i < c[0]; i++) {
            result += (roller(c[1]))
            console.log(result)
        }
    }
    else{
        result += parseInt(a.trim())
        console.log(result)
    }})

    console.log(result)