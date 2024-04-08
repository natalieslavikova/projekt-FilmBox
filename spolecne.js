// 3. menu
const tlacitkoEl = document.querySelector("#menu-tlacitko");
const polozkyEl = document.querySelector("#menu-polozky");

tlacitkoEl.addEventListener("click", () => {
    polozkyEl.classList.toggle("show"); // Přidá nebo odebere třídu "show" 
});
