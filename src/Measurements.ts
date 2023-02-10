export class Unit {
    /** Unit of measurement, defined rel to SI length (meter)  **/
    name: string;
    meterRatio: number;

    constructor(name: string, meterRatio: number) {
        this.name = name;
        this.meterRatio = meterRatio;
    }
}

export class Measurement {
    quantity: number;
    unit: Unit;
    isEstimate: boolean;
}