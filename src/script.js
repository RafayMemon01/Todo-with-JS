let allTodos = []


document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    let userInput = document.getElementById("userInput").value;
    allTodos.push(userInput);
    console.log(allTodos);  
    document.getElementById("allTodos").innerHTML = ""
    cardAdd()
})

const cardAdd = () =>{
    allTodos.forEach((todo)=>{
        
        document.getElementById("allTodos").innerHTML += `<p class="bg-white py-2 px-10">${todo}</p>`
    })
}