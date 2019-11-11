function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle('active');
}
// Sidebar & toggle button functionality

const search = document.getElementById("search");

searchbutton.onclick = function () {
    const key = "search";
    const value = search.value;

    console.log(key);
    console.log(value);

    if (key && value) {
        localStorage.setItem(key, value)
        location.reload
    }
// localStorage for search inputs
};