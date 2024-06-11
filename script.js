
function sumarPoderes() {
    const poder1 = parseInt(document.getElementById('poder1').value);
    const poder2 = parseInt(document.getElementById('poder2').value);
    const resultado = poder1 + poder2;
    document.getElementById('resultado').textContent = `Poder total de batalla: ${resultado}`;
}