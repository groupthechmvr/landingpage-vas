

        document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("https://formsubmit.co/groupthechmvr@gmail.com", {
      method: "POST",
      body: formData
    })
      .then(response => {
        if (response.ok) {
          form.reset();
          const successMsg = document.getElementById("successMsg");
          if (successMsg) {
            successMsg.style.display = "block";
          }
        } else {
          alert("Erro ao enviar. Tente novamente.");
        }
      })
      .catch(error => {
        alert("Erro: " + error.message);
      });
  });
});
