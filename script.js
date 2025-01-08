let allTodos = []


document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    let userInput = document.getElementById("userInput").value;
    allTodos.push(userInput);
    console.log(allTodos);  
    cardAdd()
})

const cardAdd = () =>{
    allTodos.forEach((todo)=>{
        document.getElementById("allTodos").innerHTML = `<p>${todo}</p>`
    })
}