import { Measurement } from "./Measurements";
import { Shape } from "./Shapes";

export class Work {
    shape: Shape;
}

export class Gauge {
    yarn: YarnType;
    stitches_length: Measurement;
    rows_length: Measurement;
    stitches_count: number;
    rows_count: number;
    needle: Needle;
    pattern: Pattern;
    stitch: Stitch;
}

export class Needle {
    needleType: NeedleType;
    size: number;
}

export enum NeedleType {
    Crochet,
    Knitting
}

export class YarnBall {
    yarnType: YarnType;
    color: Color;
}

export class YarnType {
    weight: number;
}

export class Color {
    color: string;
    constructor(color: string) {
        this.color = color;
    }
}

export class Pattern {

}

export class Stitch {

}