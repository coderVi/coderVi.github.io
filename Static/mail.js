document.addEventListener('DOMContentLoaded', function () {
    (function () {
        emailjs.init("sf3PsMO6ftYV_lpqE"); // Replace with your actual public key
    })();

    document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            emailjs.sendForm("service_vqud9gj", "template_819jjoc", this).then(
                function (response) {
                    console.log("Success:", response);
                    alert("Mesajınız başarıyla gönderildi!");
                    document.getElementById("contact-form").reset();
                },
                function (error) {
                    console.error("Error:", error);
                    alert("Mesajınız gönderilirken bir hata oluştu.");
                }
            );
        });
});
