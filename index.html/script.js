document.addEventListener("DOMContentLoaded", function () {
    const servicesList = document.getElementById("services-list");

    const services = [
        { name: "Tiling", rate: "₹200/sq ft" },
        { name: "Roofing", rate: "₹500/sq ft" },
        { name: "False Ceiling", rate: "₹150/sq ft" },
    ];

    services.forEach(service => {
        let listItem = document.createElement("li");
        listItem.textContent = `${service.name} - ${service.rate}`;
        servicesList.appendChild(listItem);
    });
});