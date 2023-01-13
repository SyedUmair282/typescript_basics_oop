//********************explicit types
// let firstName: number = 20;
// console.log("hello",firstName);

//************************implicit/infer types
// let sec_name = "umair"
// console.log("hello",sec_name);

//**************Any type and unknown
// let a:any;
// a="umair";
// console.log("Any type==>",a)
// let b:unknown;
// b=3
// let c=b as Number
// console.log("Unknown type==>",c)

//*******************Array type, Array infer type and readOnly array
//string type
// let arr:string[]=[];
// arr.push("a");
// console.log(arr)
// //number type
// let arr2:number[]=[];
// arr2.push(4)
// console.log(arr2)
// //readonly array
// let arr3: readonly string[]=["umair"]
// console.log(arr3)
// //infer type
// let arr4=["umair","Ali"];
// arr4.push("khan");
// console.log(arr4);

//*********************************Tuples
// let tuple:[string,boolean,number];
// tuple=["umair",true,0];
// tuple.push("umair")
// console.log(tuple)

//***************************Object types
//? with key refer that it is optional k user ki taraf se aa bhi sakhta hai or nhi bhi
// let obj:{name:string,age:number,gender?:string}={
//     name:"umair",
//     age:19,
//     gender:"male"
// }
// console.log("obj==>",obj)

//************************ENUMS
// enum StatusCode {
//   NotFound = 404,
//   Success = 200,
//   Accepted = 202,
//   BadRequest = 400,
// }
// console.log("Status Code==>",StatusCode.Accepted);

//*************************Type and interface--------difference is that type can't extend but interface 
//and also we can only declare method in interface but not initilize on interface and initiallize on where we use this method but in class
//we can declare also initialize in class
// type Car = {
//   year: number;
//   type: string;
//   model: string;
// };
// const car: Car = {
//   year: 2001,
//   type: "Toyota",
//   model: "Corolla",
// };
// console.log(car);
// interface Rectangle {
//   height: number;
//   width: number;
// }
// interface ColoredRectangle extends Rectangle {
//   color: string;
// }
// const coloredRectangle: ColoredRectangle = {
//   height: 20,
//   width: 10,
//   color: "red",
// };
// console.log("Interface data==>", coloredRectangle);

//*************************Union Types
// let data: string|number;
// data=12;
// data="umair"
// console.log("data==>",data);

//****************************Function and its parameter types
// const pow=(base:number,exponent:number):number=>{
//     return base**exponent
// }
// console.log("value is==>",pow(2,3));

//*****************************Casting
// let a:unknown;
// a="umair"
// console.log("Casting is==>",(a as string).length)
// let num:unknown
// num=5;
// console.log("Casting is==>",(num as number).toString())

//***************************************Basic generics
//The main reason to use generics in TypeScript (and any other programming language) is to enable types
//(classes, types, or interfaces) to act as parameters. 
//It helps us reuse the same code for different types of input
// since the type itself is available as a parameter.
//generics with function. It is used in function because if we doesnt know the return type;
// const check=<T>(a:T):T=>{
//     return a
// }
// console.log(check("umair"));
//generics with class
// class Person<T>{
//     private name:T;
//     constructor(name:T){
//         this.name=name
//     }
//     public getname=():T=>{
//         return this.name
//     }
// }
// const person=new Person("Umair");
// const person2=new Person(3);
// let a=person2.getname()
// console.log(typeof a)


//**********************************UTITLIIES TYPES

//1# OMIT---yeh isliye use krte hain taake hm bata saken k hmen kisi bhi object, type or interface
//ma kn sa data nhi chaiye bs or yeh data k liye hota hai
// interface data{
//     name:string,
//     age:number,
//     password:string,
//     phone?:number
// }
//using object
// let obj:Omit<data,"password">
// obj={
//     name:"umair",
//     age:13
// }
// console.log(obj)
//using interface
// interface User extends Omit<data,"password">{}
// let obj1:User={
//     name:"khan",
//     age:12,
// }
// console.log(obj1)
//using type
// type user=Omit<data,"password">
// let obj2:user={
//     name:"ali",
//     age:11,
// }
// console.log(obj2)

//2# PICK---yeh isliye use krte hain taake hm bata saken k hmen kisi bhi object, type or interface
//ma kn sa data chaiye bs or yeh data k liye hota hai
// let obj:Pick<data,"name"|"age">={
//     name:"suleman",
//     age:12
// }
// console.log(obj)

//3# PARTIAL--yeh isliye use krte hain taake hm bata saken k data jo pass krna hai wo optional hai
//or jo data ka interface banate hain ya type usme required properties bhi optional hojati hain
// let d={
//     name:"khan ali"
// }
// let obj:Partial<data>;
// obj=d;
// console.log(obj)

//4# REQUIRED--yeh isliye use krte hain taake hm bata saken k data jo pass krna hai wo required hai
//or jo data ka interface banate hain ya type usme opional properties bhi required hojati hain
// let obj:Required<data>={
//     name:"Umair",
//     age:12,
//     password:"wwww",
//     phone:3162969453
// }
// console.log(obj)

//5# RECORD--yeh isliye use krte hain taake hm bata saken k data ko ek record m bana saken like jis tara
//mongo db m hota hai that takes key and value
// let obj:Record<number,Object>={
//     1:{
//         name:"umair",
//         age:15
//     },
//     2:{
//         name:"Khan",
//         age:19
//     }
// }
// console.log(obj);

//6# EXCLUDE--yeh isliye use krte hain taake hm bata saken k
//union type wale fields se knsi type ka data lana hai or knsi nhi
// type Primitive = string | number | boolean
// const value: Exclude<Primitive, string> = 3242;
// console.log(value)

//****************************KEYOF keyword
// interface Person{
//     name:string,
//     age:number
// }
// const getDataKey=(data:Person,key:keyof Person):void=>{
//     console.log(`The value of ${key} is ${data[key]}`)
// }
// const obj:Person={
//     name:"Khan",
//     age:22
// }
// getDataKey(obj,"name")


//****************************NULL/UNDEFINED in typescript

//1#Nullish Coalescence ??
// function printMileage(mileage: number | null | undefined) {
//     console.log(`Mileage: ${mileage ?? 'Not Available'}`);
// }
  
// printMileage(null); // Prints 'Mileage: Not Available'
// printMileage(0); // Prints 'Mileage: 0'


//classes..Access modifier is used in it but not in interface because interface is used because of multiple 
//inheritance and by default its modifier is public.
//function without class bante hain or methods class k under bnte hain
//constructor isliye banate hain taake properties ko initialize kr saken isme setter ki zaroorat nhi hoti.
/*Access modifiers */
//It is only used in class and not in interface because interface is used for multiple inheritance.
//public - (default) allows access to the class member from anywhere
//private - only allows access to the class member from within the class
//protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
//Encapsulation means data hiding making instance variable private
// class Person {
//     private name:string;
//     constructor(name:string) {
//         this.name=name
//     }
//     public getName=():string=>{
//         return this.name
//     }
// }
// const person1=new Person("khan");
// console.log("Name is==>",person1.getName())



//******************Inheritance***************/

/*Single inheritance*/
// class Person2 {
//     name:string;
//     constructor(name:string){
//         this.name=name
//     }
// }
// class Employee extends Person2{
//     emp_no:number;
//     constructor(name:string,emp_no:number){
//         super(name);
//         this.emp_no=emp_no;
//     }
//     display_data=():void=>{
//         console.log("Name is==>",this.name);
//         console.log("Number is==>",this.emp_no);
//     }
// }
// const emp_data=new Employee("Umair",282);
// emp_data.display_data();

/* Hierarchical inheritance and method-overriding */
// class Bank{
//     roi():number{
//         return 0;
//     }
// };
// class BankX extends Bank{
//     roi():number{   //Method overiding of super class
//         return 10.5;
//     }
// };
// class BankY extends Bank{
//     roi():number{  //Method overiding of super class
//         return 12;
//     }
// };
// const bank_y=new BankY();
// console.log(bank_y.roi());

/***********MultiLevel inheritance***************/
// class Animal{
//     eat():void{
//         console.log("Can eat..!!")
//     }
// }
// class Dog extends Animal{
//     bark():void{
//         console.log("Can bark..!!")
//     }
// }
// class Puppy extends Dog{
//     weep():void{
//         console.log("Can weep weep..!!")
//     }
// }
// const puppy=new Puppy();
// puppy.eat();
// puppy.bark();
// puppy.weep();

/***********Multiple inheritance***************/
//Multiple interfaces inherited in class not in interface because interface
//is used only declare properties and methods
// interface I1{
//     sum(a:number,b:number):number
// }
// interface I2{
//     sub(a:number,b:number):number
// }
// class Cal implements I1,I2{
//     a:number;
//     b:number;
//     sum(a: number, b: number): number {
//         this.a=a;
//         this.b=b
//         return (this.a+this.b)
//     }
//     sub(a: number, b: number): number {
//         this.a=a;
//         this.b=b
//         return (this.a+this.b)
//     }
// }
// const cal=new Cal();
// console.log(cal.sub(10,5));
// console.log(cal.sum(10,10));

/***********Inheritance using interface************/
// interface I1{
//     name:string
// }
// interface I2 extends I1{
//     age:number;
// }
// class Dis{
//     eg:number
// }
// class Check extends Dis implements I2{
//     name: string;
//     age: number;
//     display=(a:string,b:number):void=>{
//         this.name=a;
//         this.age=b;
//         console.log("name is==>",this.name + " and age is==>",this.age)
//     }
// }
// const check=new Check();
// check.display("umair",22);

/***********Static class and method************/
//It means class that is static cannot be instantiated or inherited and
//every member of static class must be static and can accessed directly from class name and dot notation.
//But The class or constructor cannot be static in TypeScript lekin members hosakhte hain.
//java m class or constructor dono static ho sakhte hain
//Normal class k static members dusri class ma inherit hojate hain but access nhi krsakhte.
//Not in typescript but Java ma sTatic class inherit nhi hoti.
// class Static_class{
//     static pi = 3.14;//static variable
//     pi= 3;//non-static variable
//     static calculateArea(radius:number):number { //static method
//         return this.pi * radius * radius;
//     }
// }
// console.log(Static_class.pi);//return static variable value
// const circleObj =new Static_class();
// console.log(circleObj.pi);//return non-static variable value
// console.log(Static_class.calculateArea(5));//return static method value

// class Second extends Static_class{
//     display():void{
//         console.log(this.pi)
//     }
// }

/******************Abstract Class*******************/
//1# It is the process of hiding implementation details only functionality will be provided.
//eg: function k under ka code jo hai wo implementation detail hoti hai or us k func k name bhi hide karo
//Then us func ko dusre function m dal ke call karwao
//2# Abstract class ka object nhi banta or wo sirf inherit hoti hai dusri classes ma
//eg: Mobile is abstract class and nokia,samsung and huawei are the sub-class of Mobile.
//3# Abstract class m abstract function ho bhi sakhta hai or nhi bhi agr hota hai tou usko just declare krte
//hain like interface m krte hain but normal function ko initiallize kr sakhte hain jese normal class m hota hai
//4# Agr kisi class m abstract method banao gay tou us class ko lazmi abstract class hona hai warna error dega.
//5# Abstract method class m jitne bhi hain unko lazmi body deni us class ma
//jis class m apne abstract class ko inherit kiya hai.
//6# But normal function jo k implement huwa hai abstract class ma usko just used krsakhte hain directly
//bs implementation detail nhi dekhao.
//7# The difference b/w interface and abstract class is interface can inherit multiple times
//like multiple inheritance but abstract class only inherit single time also both are same
//but we declare also initialize normal method in abstarct class but not in interface. 
// abstract class Mobile{
//     model:string;
//     company:string;
//     color:string;
//     camera:string;
//     private setter(model:string,company:string,color:string,camera:string):void{
//         this.model=model;
//         this.company=company;
//         this.color=color;
//         this.camera=camera;
//     }
//     getter(model:string,company:string,color:string,camera:string):void{
//         this.setter(model,company,color,camera)
//         console.log("Model=>",this.model)
//         console.log("Company=>",this.company)
//         console.log("Color=>",this.color)
//         console.log("Camera=>",this.camera)
//     }
//     abstract processing():void
// }
// class Samsung extends Mobile{
//     processing(): void {
//         console.log("Process is on fire")
//     }
//     static os:string='android'
// }
// class Nokia extends Mobile{
//     processing(): void {
//         console.log("Process is on fire")
//     }
//     static os:string='windows'
// }
// const j7=new Samsung();
// //j7.setter("j7 emerge","samsung","black","16px");
// j7.getter("j7 emerge","samsung","black","16px");
// j7.processing();
// console.log("operating system=>",Samsung.os);


//PARTIAL CLASSES NOT SUPPORTED IN TYPESCRIPT....
//BUT IN C# IT IS A CONCEPT OF MAKING MULTIPLE CLASSES OF SAME NAME AND MAKING DIFFERENT METHODS IN IT.
//EG: MULTIPLE CLASSES OF NAME MATH AND METHODS IN IT LIKE POWER, ROUND ETC.

//SEALED CLASS NOT SUPPORTED IN TYPESCRIPT....
//IT IS A CONCEPT TO PREVENTS INHERITANCE...MAKE BY SEALED KEYWORD,
//It can be instantiated
//USED TO STORE CONFIDENTIAL DATA IN SEALED CLASS THAT DOESNT INHERIT
//IF INHERIT THEN IT WILL OVERRIDE DATA THAT WE MIGHT NOT WANT TO CHANGE.

//SEALED METHOD NOT SUPPORTED IN TYPESCRIPT....
//IT IS USED IN NORMAL CLASS BUT USED FOR NOT MORE OVERRIDING IN CHILDS CLASS
//EG: PARENT CLASS HAVE METHOD AND ITS CHILD CLASS OVERRIDES THE METHOD OF ITS PARENT CLASS
//IF YOU MAKE IT SEALED BY USING SEALED KEYWORD THEN IT WILL NOT OVERRIDE MORE IN CHILD OF CHILD CLASS.

//POLYMORPHISM MEANS MANY FORMS....IT MEANS MULTIPLE METHODS OF SAME NAME BUT DIFFERENT SIGNATURE OR PARAMETERS IN DIFFERENT CHILD CLASSES.
//METHOD OVERLOADING DONE IN COMPILE TIME (INCREASE THE READIBILITY OF THE PROGRAM)
//METHOD OVERRIDING DONE IN RUNTIME















