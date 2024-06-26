document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("crud-form");
  // const printBtn = document.getElementById("print-btn");
  const modalBtn = document.getElementById("modal-btn");
  const modal = document.getElementById("myModal");
  const modalContent = document.querySelector(".modal-content");
  const modalData = document.getElementById("modal-data");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const seal = document.getElementById("seal").value;

    const data = {
      name,
      email,
      address,
      phone,
      date,
      time,
      seal
    };

    // Save data to local storage
    localStorage.setItem("crudData", JSON.stringify(data));

    // Render data in modal
    modalData.innerHTML = `
      <p><strong>Nome:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Endereço:</strong> ${data.address}</p>
      <p><strong>Celular/Tel:</strong> ${data.phone}</p>
      <p><strong>Data:</strong> ${data.date}</p>
      <p><strong>Horário de Entrega:</strong> ${data.time}</p>
      <p><strong>Número do Lacre:</strong> ${data.seal}</p>
    `;

    modal.style.display = "block";
  });

  // printBtn.addEventListener("click", function () {
  //   window.print();
  // });

  modalBtn.addEventListener("click", function () {
    const storedData = JSON.parse(localStorage.getItem("crudData"));

    if (storedData) {
      modalData.innerHTML = `
        <p><strong>Nome:</strong> ${storedData.name}</p>
        <p><strong>Email:</strong> ${storedData.email}</p>
        <p><strong>Endereço:</strong> ${storedData.address}</p>
        <p><strong>Celular/Tel:</strong> ${storedData.phone}</p>
        <p><strong>Data:</strong> ${storedData.date}</p>
        <p><strong>Horário de Entrega:</strong> ${storedData.time}</p>
        <p><strong>Número do Lacre:</strong> ${storedData.seal}</p>
      `;
      modal.style.display = "block";
    } else {
      alert("Nenhum dado cadastrado.");
    }
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal || event.target.classList.contains("close")) {
      modal.style.display = "none";
    }
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
