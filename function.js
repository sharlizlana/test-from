document
.getElementById("biodataForm")
.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const alamat = document.getElementById("alamat").value;
    const keterangan = document.getElementById("Description").value;
    const country = document.getElementById("country").value;
    const gender = document.getElementById("gender").value;
    const hobbies = document.getElementById("hobbies").value;
    
    const nameOutput = document.getElementById("username-output");
    const alamatOutput = document.getElementById("alamat-output");
    const keteranganOutput = document.getElementById("keterangan-output");
    const countryOutput = document.getElementById("country-output");
    const genderOutput = document.getElementById("gender-output");
    const hobbiesOutput = document.getElementById("hobbies-output");

    nameOutput.innerHTML = name;  
    alamatOutput.innerHTML = alamat;
    keteranganOutput.innerHTML = keterangan;
    countryOutput.innerHTML = country;
    genderOutput.innerHTML = gender;
    hobbiesOutput.innerHTML = hobbies;




    const hasil = {
        nama_lengkap: name,
        Alamat: alamat,
        Keterangan: keterangan,
        Negara: country,
        gender: gender,
        hobbies: hobbies,
    };

    console.log(hasil);
    alert("Berhasil kirim data!");
});

