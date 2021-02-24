function search() {
    const q = document.querySelector('input').value;

    window.location.href = window.location.href.split('?').shift() + '?q=' + q;
}