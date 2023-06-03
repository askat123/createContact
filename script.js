const first = document.querySelector(".first")
const second = document.querySelector(".second")
const three = document.querySelector(".three")
const succes = document.querySelector(".btn-success")
const dark = document.querySelector(".btn-dark")
const tbody = document.querySelector(".tbody")
const data = document.querySelector(".data")
const xbtn = document.querySelector(".xbtn")
const table = document.querySelector("table")



first.addEventListener("keydown",(e)=>{
    if (e.key === "Enter"){
        view()
    }
})
second.addEventListener("keydown",(e)=>{
    if (e.key === "Enter"){
        view()
    }
})
three.addEventListener("keydown",(e)=>{
    if (e.key === "Enter"){
        view()
    }
})




function view(){
    if (first.value === "" || second.value === "" || three.value === ""){
        alert("NOT FOUND")
    }else {
        tbody.innerHTML += `
    <tr>
    <td><img src="${first.value}" alt="" width="60px"  style="border-radius: 20px"></td>
    <td>name: <b>${second.value}</b><br>email: <b>${three.value}</b></td>
    <td><button class="btn btn-danger">delete</button></td>
</tr>`
        first.value = ""
        second.value = ""
        three.value = ""

    }
}





succes.addEventListener("click",()=>{
    view()
})
dark.addEventListener("click",()=>{
    data.style.display = "block"
})
xbtn.addEventListener("click",()=>{
    data.style.display = "none"
})




table.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-danger')){
        e.target.parentNode.parentNode.remove()
    }
})