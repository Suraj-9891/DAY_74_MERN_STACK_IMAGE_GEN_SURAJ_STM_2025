// Image Generation Logic
document.getElementById('generate-image').addEventListener('click', function() {
    const imageType = document.getElementById('image-type').value;
    const imageSize = document.getElementById('image-size').value;
    const colorPalette = document.getElementById('color-palette').value;

    // Simple placeholder logic to simulate image generation
    const preview = document.getElementById('image-preview');
    preview.innerHTML = '';
    preview.style.backgroundColor = colorPalette;
    preview.innerText = `${imageType} - ${imageSize}`;
});

// Image Customization Logic
document.getElementById('image-filters').addEventListener('change', function() {
    const filter = this.value;
    const preview = document.getElementById('image-preview');
    preview.style.filter = filter === 'none' ? 'none' : `${filter}(1)`;
});

document.getElementById('text-overlay').addEventListener('input', function() {
    const text = this.value;
    const preview = document.getElementById('image-preview');
    preview.innerText = text;
});

document.getElementById('font-style').addEventListener('change', function() {
    const font = this.value;
    const preview = document.getElementById('image-preview');
    preview.style.fontFamily = font;
});

// Image Download Logic
document.getElementById('download-image').addEventListener('click', function() {
    const preview = document.getElementById('image-preview');
    const imageName = document.getElementById('image-name').value || 'downloaded_image';
    const fileFormat = document.getElementById('file-format').value;

    // Create a canvas to render the image preview
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const rect = preview.getBoundingClientRect();

    canvas.width = rect.width;
    canvas.height = rect.height;

    // Draw the preview's background color
    context.fillStyle = preview.style.backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the text overlay
    context.font = `${window.getComputedStyle(preview).fontSize} ${window.getComputedStyle(preview).fontFamily}`;
    context.fillStyle = '#000'; // Default text color
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(preview.innerText, canvas.width / 2, canvas.height / 2);

    // Create a download link
    const link = document.createElement('a');
    link.download = `${imageName}.${fileFormat}`;
    link.href = canvas.toDataURL(`image/${fileFormat}`);
    link.click();
});