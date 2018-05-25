const functions = require('./functions');

test('returnTwo() should return the integer 2', ()=>{
    expect(functions.returnTwo()).toEqual(2);
});

test('greeting() should return Hello and passed in name',()=>{
    expect(functions.greeting('shane')).toEqual("Hello, shane.");
    expect(functions.greeting('Jill')).toEqual("Hello, Jill.");
});

describe('Math Functions', ()=>{

    test('add(num1, num2) should return sum of num1 and num 2',()=>{
        expect(functions.add(2,3)).toEqual(5);
        expect(functions.add(5,9)).toEqual(14);    
    });
    test('subtract(num1, num2) should return the difference num1 - num 2',()=>{
        expect(functions.subtract(2,3)).toEqual(-1);
        expect(functions.subtract(5,9)).toEqual(-4);    
    });
    test('multiply(num1, num2) should return product of num1 and num 2',()=>{
        expect(functions.multiply(2,3)).toEqual(6);
        expect(functions.multiply(5,9)).toEqual(45);    
    });
    test('divide(num1, num2) should return sum of num1/ num 2',()=>{
        expect(functions.divide(6,3)).toEqual(2);
        expect(functions.divide(10,2)).toEqual(5);    
    });
})