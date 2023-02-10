import {Measurement} from "./Measurements";

export abstract class Shape {
    name: string;
    abstract scale(ratio: number): Shape;
}

export abstract class Polygon extends Shape {
    abstract get_length_at_height(measurement: Measurement): Measurement; // from top
}

export abstract class Rectangle extends Shape {
    width: Measurement;
    height: Measurement;
}

export abstract class Ellipse extends Shape {

}

export abstract class Circle extends Ellipse {
    static get_circumference_at_radius(radius: number): number {
        return 2*Math.PI * radius;
    }
}