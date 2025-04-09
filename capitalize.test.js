const capitalize = require('./capitalize');
const reverseString = require('./reverse');
const calculator=require('./calculator');
const caesarCipher = require('./caesarCipher');
const analyzeArray = require('./analyzeArray');
//const { default: test } = require('node:test');

test('return first character capitalized', ()=>{
	expect(capitalize('home')).toBe('Home')
	
})

test('reverse a string', ()=>{
	expect(reverseString('home')).toBe('emoh');
})
test('add 1+1', ()=> {
	expect(calculator.add(1,1)).toBe(2)
})
test('1 - 1 ', ()=> {
	expect(calculator.subtract(1, 1)).toBe(0);
})
test('2 / 2', ()=>{
	expect(calculator.divide(2,2)).toBe(1);
});

test("for a return b", ()=>{
	expect(caesarCipher('boy', 1)).toBe('cpz')
})
test("return average, min, max and length", ()=>{
	expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({"avg": 4, "min":1, "max": 8, 'length': 6})
})
/*
test ('return min', ()=>{
	expect(analyzeArray([1,8,3,4,2,6])).toBe({"average": 3.5, "min": 1});
})
	*/