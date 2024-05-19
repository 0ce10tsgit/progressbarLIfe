let input = document.getElementById("BD").valueAsDate
console.log(typeof(input))
let truee = input.valueOf()
function count(){
  setInterval(function updateCount(){
    let a = Date.now()
    truee = document.getElementById("BD").valueAsDate
    document.getElementById('dsds').textContent = "presuming I live to " + document.getElementById("livetime").value
    let diff = ((((a-truee)/86400000)/365).toString()).slice(0,12)
    document.getElementById('count').textContent = diff + ' Years'
    let diff_week = (((((a-truee)/1000)/86400)/7).toString()).slice(0,12)
    document.getElementById('count_weeks').textContent = diff_week + ' Weeks'
    let diff_days = ((((a-truee)/1000)/86400).toString()).slice(0,12)
    document.getElementById('count_days').textContent = diff_days + ' Days'
    let percent = (((diff/document.getElementById("livetime").value)).toString()).slice(2,12)
    document.getElementById('count2').textContent = percent.slice(0,2) + "." + percent.slice(2) + "% elapsed"
    document.getElementById('file').value =  percent.slice(0,2) + "." + percent.slice(2)
  },100)
}
count()