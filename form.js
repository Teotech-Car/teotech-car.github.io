function aboneOl() {
    var ad = document.getElementById('ad').value;
    var soyad = document.getElementById('soyad').value;
    var email = document.getElementById('email').value;

    if (ad === '' || soyad === '' || email === '') {
        alert('Lütfen tüm alanları doldurun.');
        return false;
    }

    alert('Kaydınız başarıyla oluşturuldu. Teşekkür ederiz!');
    document.getElementById('aboneForm').reset();
    return false;
}