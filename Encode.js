function selectImage() {
    document.getElementById('image-input').click();
    document.getElementById('image-input').onchange = function() {
        const selectedImage = document.getElementById('selected-image');
        const imagePreview = document.getElementById('image-preview');
        const file = this.files[0];
        const reader = new FileReader();
        reader.onload = function(event) {
            selectedImage.src = event.target.result;
            imagePreview.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    };
}

function scanQR() {
    alert('QR scanned successfully (simulated)');
}

function startAnalysis() {
    const loadingScreen = document.getElementById('loading-screen');
    const resultSection = document.getElementById('result-section');

    loadingScreen.classList.remove('hidden');
    resultSection.classList.add('hidden');

    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        resultSection.classList.remove('hidden');
    }, 2000);
}
