document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('productName').value.trim();
    const price = parseFloat(document.getElementById('productPrice').value);
    const category = document.getElementById('productCategory').value;

    const errorMessage = document.getElementById('errorMessage');
    const productList = document.getElementById('productList');

    // Validação
    if (!name || !category || isNaN(price) || price <= 0 || !Number.isFinite(price)) {
        errorMessage.style.display = 'block';
        return;
    }

    errorMessage.style.display = 'none';

    // Criação do item de lista
    const li = document.createElement('li');
    li.textContent = `Produto: ${name} - R$ ${price.toFixed(2)} - Categoria: ${category}`;

    // Estilização por categoria
    if (category === 'Tecnologia') {
        li.classList.add('tecnologia');
    } else if (category === 'Alimentos') {
        li.classList.add('alimentos');
    }

    // Adiciona o item à lista
    productList.appendChild(li);

    // Limpa o formulário
    document.getElementById('productForm').reset();
});
