function scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}



function payWithGooglePay() {
    // Simulate payment process
    alert('Redirecting to Google Pay...');
    // Add your Google Pay integration here
}

function payWithPhonePe() {
    // Simulate payment process
    alert('Redirecting to PhonePe...\nPhonePe Number: 7823802792');
    // Add your PhonePe integration here
}

function payWithPaytm() {
    // Simulate payment process
    alert('Redirecting to Paytm...');
    // Add your Paytm integration here
}

function trackOrder(orderId) {
    // Simulate order tracking
    alert('Tracking order: ' + orderId);
    // Add your order tracking logic here
}

function showOrderNow() {
    // Simulate showing order now
    alert('Order placed successfully!');
    // Add your order placement logic here
}

function addAllItemsToCart(items) {
    // Simulate adding all items to cart
    alert('All items added to cart!');
    // Add your add-to-cart logic here
}

function viewDetails(itemId) {
    // Simulate showing item details
    alert('Showing details for item: ' + itemId);
    // Add your view details logic here
}







function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}