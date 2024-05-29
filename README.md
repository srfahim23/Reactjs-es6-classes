React ES6 Classes : 

Classes : 

ES6 introduce classes..... 

A class is a type of funciton, but instead of using the keyword function to initialte it, we use the keyword class, and the properties are assigned inside a 
constructor() method.

Example :

A simple class constructor :

car component  jsx file noted 

class Car {
    constructor(name) {
        this.brand = name;
    }
}

Notice the case of the class name. We have begun the name, "Car" , with an uppercase charecter. This is a standard naming convention for classes.


Now you can create object using the Car class : 

Example : 

Create an object called "mycar" based on the Car class : 

class Car {
    constructor(name) {
        this.brand = name;
    }
}

const mycar = new Car("Ford");


Note : The constructor funciton is called automatically when the object is initalized.


Method in Classes : 

You can add your own methods in a class : 

Example : 

Create a method named "present"

this is gonna be written in car.jsx file noted :

As you can see in the example above , you call the mthod by referring to the object's method name followed by parentheses (parameters would go inside the parentheses).

Class Inheritance :

To create class Inheritance, use the extends keyword.

A class created with a class Inheritance inherits all the methods from another class : 

Example : 

Create a class named "Model" which will inherit the methods from the "Car" class:

this is gonna be written in the car.jsx part : 


The super() method refers to the parent class.

By calling the super() method in the constructor method, we call the parent's 
constructor method and get access to the parent's properites and methods. 
