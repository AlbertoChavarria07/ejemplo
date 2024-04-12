fetch('menu.json')
.then(response => response.json)
.then(data  =>{
    const menuContainer = document.getElementById
    ('menu-container');
    let total = 0;
    data.items.forEach(categor => {
        const categoryTittle = document.createElement('h3');
        categoryTittle.textContent = category.category;
        menuContainer.appendChild(categoryTittle);

        const table = document.createElement('table');
       const tableHead = <tr><th>Foto</th><th>Descripcion</th><th>Precio</th><th>Seleccionar</th></tr>;
        let tabeBody = '';
        category.items.forEach item =>{
            tableContent +=
            <tr>    
                <td><img src="{item.image}" alt="${item.name}" style="width:100px;"></td>
                <td>${item.name} - ${item.descripcion}</td>
                <td><input type></></td>



            </tr>
        }
    });

})