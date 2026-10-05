// -----------------------------
// SUBSCRIBE BUTTON (email required)
// -----------------------------
const subscribeBtn = document.getElementById("subscribe-btn");
if (subscribeBtn) {
  subscribeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const emailInput = document.getElementById("subscribe-email");

    if (!emailInput || emailInput.value.trim() === "") {
      alert("Please enter your email address.");
      return;
    }

    alert("Thank you for subscribing.");
    emailInput.value = "";
  });
}

// -----------------------------
// ADD TO CART (sessionStorage)
// -----------------------------
const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const item = {
      id: index + 1,
      name: `Item ${index + 1}`,
      description: "Book Haven Bookstore Item",
    };

    sessionStorage.setItem(`cartItem${item.id}`, JSON.stringify(item));

    alert("Item added to the cart.");
  });
});

// -----------------------------
// VIEW CART
// -----------------------------
const viewCartBtn = document.getElementById("view-cart");

if (viewCartBtn) {
  viewCartBtn.addEventListener("click", () => {
    let cartData = "";

    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      const item = JSON.parse(sessionStorage.getItem(key));
      cartData += `${item.name}: ${item.description}\n`;
    }

    if (cartData === "") {
      cartData = "Your cart is empty.";
    }

    alert("Cart Contents:\n\n" + cartData);
  });
}

// -----------------------------
// CLEAR CART
// -----------------------------
const clearCartBtn = document.getElementById("clear-cart");

if (clearCartBtn) {
  clearCartBtn.addEventListener("click", () => {
    sessionStorage.clear();
    alert("Cart cleared.");
  });
}

// -----------------------------
// PROCESS ORDER
// -----------------------------
const processOrderBtn = document.getElementById("process-order");

if (processOrderBtn) {
  processOrderBtn.addEventListener("click", () => {
    sessionStorage.clear();
    alert("Thank you for your order.");
  });
}

// -----------------------------
// CUSTOM ORDER FORM (localStorage)
// -----------------------------
const contactSubmitBtn = document.getElementById("contact-submit");

if (contactSubmitBtn) {
  contactSubmitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields.");
      return;
    }

    const orderData = {
      customerName: name,
      customerEmail: email,
      customerMessage: message,
    };

    localStorage.setItem("customOrder", JSON.stringify(orderData));

    alert("Your message has been saved.");
  });
}
