function scrollPage() {
    // Sayfanın şu anki scroll pozisyonunu al
    var currentScrollPosition = window.pageYOffset;

    // Belirli bir miktar scroll yap
    var scrollAmount = 850; // İstediğiniz miktarı ayarlayın
    window.scrollTo(0, currentScrollPosition + scrollAmount);
}