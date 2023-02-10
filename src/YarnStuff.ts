import {Measurement} from "./Measurements";
import {Shape} from "./Shapes";

export class Work {
    shape: Shape;
    gauge: Gauge;
    rows: Row[];

    increaseWidth(): void {
        throw new Error("NotImplemented");
    }

    increaseHeight(): void {
        throw new Error("NotImplemented");
    }

    increaseAtRatio(): void {
        throw new Error("NotImplemented");
    }
}

export class Gauge {
    yarn: YarnType;
    stitches_length: Measurement;  // length of gauge
    rows_total_height: Measurement; // height of gauge
    rows: Row[];
    needle: Needle;
    pattern: Pattern;
}


export class Row {
    stitches: Stitch[];
    length: Measurement;
    height: Measurement;
}

export class Stitch {
    stitchType: StitchType;
    approx_height: Measurement;
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
    /** Representation of Object **/
    rows: Row[];
    constructor(rows: Row[]) {
        this.rows = Pattern.reduce(rows);
    }

    static reduce(rows: Row[]): Row[] {
        /** Create smallest representation of pattern **/
        throw Error("NotImplemented");
    }
}

export class StitchType {

}