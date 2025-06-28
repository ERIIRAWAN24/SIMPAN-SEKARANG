


document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('transaksiForm');
  const riwayatBody = document.getElementById('riwayatBody');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const jenis = document.getElementById('jenis').value;
    const jumlah = document.getElementById('jumlah').value;
    const keterangan = document.getElementById('keterangan').value;
    const tanggal = new Date().toLocaleDateString();

    if (!jenis || !jumlah) {
      alert('Harap isi jenis dan jumlah!');
      return;
    }

    const rowCount = riwayatBody.rows.length + 1;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${rowCount}</td>
      <td>${jenis}</td>
      <td>Rp ${parseInt(jumlah).toLocaleString('id-ID')}</td>
      <td>${keterangan || '-'}</td>
      <td>${tanggal}</td>
    `;

    riwayatBody.appendChild(newRow);

    form.reset();
  });
});
