const submit = document.querySelector(".submit-btn");
submit.addEventListener("click",function(e) {
    e.preventDefault()
    const itemField = document.getElementById("shopping");
    const item = itemField.value.trim();
    if(item=="") return alert("Please enter the product");
    const product = document.createElement("div");
    product.classList.add("shopping-list");
    product.innerHTML = `<div class="shopping-list">
        <article class="shopping-item">
            <p class="title">${item}</p>
            <div class="btn-container">
                <button type="button" class="edit-btn"></button>
                <button type="button" class="delete-btn">
                    <i class="fas fa-trash"></i>               
                </button>
            </div>
        </article>
    </div>`
    const itemList = document.querySelector(".shopping-list")
    itemList.appendChild(product)
    alert("Your product is added") 
    itemField.value = ""  

})