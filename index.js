const { response } = require("express");

const mahasiswaNim = '20220040285'; // Ganti dengan NIM yang akan di edit
const updateData = {
    nama: 'Dhika Dwi Nugraha',
    gender: 'L',
    prodi: 'TI',
    alamat: 'Cibolang'
};

fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {  // Tambahkan tanda kutip pada URL
    method: 'PUT',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(updateData)
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
