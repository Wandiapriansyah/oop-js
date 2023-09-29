// class sayurataubuah{
//     constructor(nama, jenis,) {
//         this.nama = nama;
//         this.jenis = jenis;
//     }
// }

// class Sayurs extends sayurataubuah{
//     constructor(nama, jenis, harga){
//         super(nama, jenis);
//         this.harga = harga;
//     }
//     showSayur(){
//         return `${this.nama} ${this.jenis} ${this.harga}`;
//     }
// }

// let bean = new sayurataubuah('Tomat', 'Sayur');
// console.log(bean)

// let sayurs = new Sayurs('Kangkung', 'sayur', 5000);
// console.log(sayurs.showSayur());

// let sayurs1 = new Sayurs('Pepaya', 'Buah', 10000);
// console.log(sayurs1.showSayur());

// ABSTRACT CLASS Tubuh
class Tubuh{
    constructor(buahAtauSayur, jenis, harga){
        if (this.constructor === Tubuh) {
            throw new Error(`cannot instantiate abstract class ${this.constructor}`);
        }
        this.buahAtauSayur = buahAtauSayur;
        this.jenis = jenis;
        this.harga = harga;
    }
    // abstract method greet
    greet() {
        throw new Error('abstract method not implemented');
    }
}

// CONCRETE CLASS Organ
class Organ extends Tubuh {
    constructor(buahAtauSayur, jenis,harga, ikat) {
        super(buahAtauSayur, jenis, harga)
        this.ikat = ikat;
    }

    //Overriding greet method
    greet() {
        console.log(`Ini adalah ${this.buahAtauSayur} ${this.jenis} ${this.harga} ${this.ikat}`);
    }
}

const newOrgan = new Organ('Kangkung', 'Sayur', 5000, 'perikat');
newOrgan.greet();

//Inheritance adalah waris atau yg kita tau extends

//Prototypal inheritance
let SYR = {
    nsayur: "Bayam",
  };
  let JNS = {
    njenis: "Sayuran",
  };
  
  JNS.__proto__ = SYR;
  
  // we can find both properties in BMW now:
  console.log("Ini Adalah " + JNS.nsayur + ", dan jenisnya yaitu " + JNS.njenis);

  //polymorphism itu yg + itu bukan?     ^
  //atau yg _ 

  class Car {
    constructor(color, speed) {
      this._speed = speed;
      this._color = color;
    }
  }
  const Car1 = new Car('red', '10');
  console.log(Car1)