//This is a simple script that gets the current date and inserts it into the copyright paragraph
const cdate = new Date()
const year = cdate.getFullYear()

document.querySelector("footer>h2>span").textContent = year