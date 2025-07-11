document.addEventListener('DOMContentLoaded', () => {
    const textoOriginal = document.getElementById('textoOriginal');
    const textoConvertido = document.getElementById('textoConvertido');

    textoOriginal.addEventListener('input', () => {
        textoConvertido.value = textoOriginal.value;
    });
});
