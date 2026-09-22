// ==========================================
// SITE PLAN TAMAN SUKASARI
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const units = document.querySelectorAll(".unit");

    units.forEach(unit => {

        unit.addEventListener("click", () => {

            const nomorUnit = unit.dataset.unit;

            alert("Unit " + nomorUnit);

        });

    });

});