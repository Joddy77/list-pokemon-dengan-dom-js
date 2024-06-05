// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10086.png

// variable container dimana nilai dari variabel adalah letak section pada html.
const container = document.querySelector('#container');

// variable baseImgUrl adalah string yang bernilai link.
const baseImgUrl = 
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


for(let i = 1; i <= 500; i++) {

    const pokeBall = document.createElement('div'); // variabel pokeBall adalah untuk membuat div baru pada html
    pokeBall.classList.add('pokemon'); // dan ini adalah untuk menambahkan class pada div yang pokeBall buat

    const imgPokemon = document.createElement('img'); // variable imgPokemon adalah untuk membuat element img pada html
    imgPokemon.src = `${baseImgUrl}${i}.png`; // dan ini adalah untuk menambahkan atribute src pada img supaya menampilkan gambar sesuai link pada variabel baseImgUrl

    const label = document.createElement('span'); // variable label untuk membuat element span pada html
    label.innerText = `#${i}`; // dan ini adalah untuk menampilkan isi dari span dengan innerText supaya bernilai text

    
    
    container.appendChild(pokeBall);
    pokeBall.appendChild(imgPokemon);
    pokeBall.appendChild(label);
}