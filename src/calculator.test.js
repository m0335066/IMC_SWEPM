import {Calculator} from "./calculator";

test("adding 2 integers", () => {
    const calc = new Calculator();
    expect(calc.add(1,1)).tobe(2);
});