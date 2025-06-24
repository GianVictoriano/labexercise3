function greet() {
    const name = document.getElementById('name').value;
    if (name) {
        alert(`Hello, ${name}!`);
    } else {
        alert('Please enter your name.');
    }
}
