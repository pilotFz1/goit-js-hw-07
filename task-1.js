const itemsEl = document.querySelectorAll('.item')
console.log(`В списке ${itemsEl.length} категорий`)

itemsEl.forEach(item =>{
    const categoriesName = item.querySelector('h2').textContent;
    const categoriesElement = item.querySelector('ul').children.length;
    console.log(
        `Категория: ${categoriesName} \nКолличество элементов: ${categoriesElement}`

    ) 

}

)