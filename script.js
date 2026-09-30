// ვირჩევთ საკონტაქტო ფორმას ID-ის მიხედვით
const form = document.querySelector('#contact-form');

// ვუსმენთ ფორმის გაგზავნის (submit) ივენთს
form.addEventListener('submit', function(e) {
    // ვაჩერებთ გვერდის ავტომატურ გადატვირთვას
    e.preventDefault();

    // გამოგვაქვს მადლობის შეტყობინება
    alert('გმადლობთ შეტყობინებისთვის! მალე დაგიკავშირდებით.');

    // ვასუფთავებთ ფორმის ველებს
    form.reset();
});
