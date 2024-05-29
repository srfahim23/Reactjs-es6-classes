

// const Car = () => {
//   return (
//    <>
//    <Car/>


//    </>
//   )
// }


// this is just written nothing else 
// class Car {
//     constructor(name) {
//         this.brand = name;
//     }
// }
// export default Car


// class Car {
//     constructor(name) {
//         this.brand = name;
//     }

//     present() {
//         return 'I have a ' + this.brand;
//     }
// }

// const mycar = new Car("Ford");
// mycar.present();


// Model : 

class Car { 
    constructor(name) {
        this.brand = name;
    }

    present() {
        return 'I have a' + this.brand;
    }
}

class Model extends Car{
    constructor(name, mod) {
        super(name);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model
    }
}
const mycar = new Model ("Ford", "Mustang");
mycar.show();