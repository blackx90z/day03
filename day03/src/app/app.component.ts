import { Component, OnInit } from '@angular/core';


interface Person{
  firstName: string;
  lastName: string;

  sayHi(): string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(){
// let p1 = new Point(5,10);
// let p2 = new Point(10,15);
// let p3 = p1.add(p2);

// console.log(p3);

// let p3D1 = new Point3D (5,10,15);
// let p3D2 = new Point3D (10,15,20);
// let p3D3 = p3D1.add(p3D2);
// console.log(p3D2);
//   }
const customer: Person = {
  firstName:"Ian",
  lastName:"Morin",
  sayHi: () => {
    // console.log(5 + 5);
    return "Hi";
  }
}
console.log(customer.sayHi);
const employee: Person = {
  firstName:"test",
  lastName:"employee",
  sayHi: () => {
    return "Hello!!";
  }
}
console.log(employee.sayHi());
}

 class Point{
   x: number;
   y:number;
   constructor(x: number,y: number){
     this.x = xNew;
     this.y = yNew;
       
}
add( newPoint: Point){
  return new Point(this.x + newPoint.x, this.y + newPoint.y);

}
 }
 class Point3D extends Point{
   z: number;
   constructor (xVal: number, yVal: number, zVal: number){
     super(xVal, yVal);
     this.z = zVal;
   }
   add(new3DPoint){
    //  return new Point3D(
    //    new3DPoint.x + this.x,
    //    new3DPoint.y + this.y,
    //    new3Dpoint.z + this.z

    let point2D = super.add(new3DPoint);
    return new Point3D(point2D.x, point2D.y, new3DPoint.z + this.z);
     )
   }
   }

