export function GeraQRCode() {
    var GoogleCharts = 'https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl='; //chl eh o que vai buscar
    var imagemQRCode = GoogleCharts; //chl = conteudo
    document.getElementById('imageQRCode').src = imagemQRCode;
}