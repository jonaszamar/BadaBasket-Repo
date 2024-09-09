document.addEventListener('DOMContentLoaded', () => {
    const featuredProducts = [
        { id: 1, name: 'Fresh Apples', price: 2.99, image: './media/apple.png' },
        { id: 2, name: 'Organic Bananas', price: 1.99, image: './media/bananas.jpg' },
        { id: 3, name: 'Toned Milk', price: 3.49, image: './media/milk.jpg' },
        { id: 4, name: 'Whole Wheat Bread', price: 2.49, image: './media/bread.jpg' },
        { id: 5, name: 'Fish Fillet, Preservative Free', price: 5.99, image: './media/fish.jpg' },
        { id: 6, name: 'Surf Excel Detergent - 3.7L + FREE 0.3L', price: 2.99, image: './media/SURFEXCEL.jpg' },
        { id: 7, name: 'Coca Cola - Soft Drink - Double Pack', price: 1.99, image: './media/coca.jpg' },
        { id: 8, name: 'Bingo! Original Style Potato Chips', price: 0.99, image: './media/bingochips.jpg' },
    ];

    const productGrid = document.querySelector('.product-grid');
    const categoryGrid = document.querySelector('.category-grid');

    featuredProducts.forEach(product => {
        const productElement = createProductElement(product);
        productGrid.appendChild(productElement);
    });

    categories.forEach(category => {
        const categoryElement = createCategoryElement(category);
        categoryGrid.appendChild(categoryElement);
    });
});

function createProductElement(product) {
    const element = document.createElement('div');
    element.classList.add('product-item');
    element.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button><a href="product_${product.id}.html">Learn More</a></button>
    `;
    return element;
}

function showPopup() {
    document.getElementById('popup-overlay').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function showSourcePopup() {
    document.getElementById('source-popup').style.display = 'block';
}

// Show the source code popup after 5 seconds
setTimeout(showSourcePopup, 5000);

// Show the popup when the page loads
window.onload = showPopup;