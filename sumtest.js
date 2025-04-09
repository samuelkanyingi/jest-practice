/*
test('two plus two is four', ()=>{
    expect(2+2).toBe(4);
})
test('object assignment', ()=>{
    const data={one:1};
    data['two']=2;
    expect(data).toEqual({one:1, two:2})
});
test('addng positive numbers is not zero', ()=>{
    for(a=1;a<10;a++){
        for(b=1;b<10;b++){
            expect(a+b).not.toBe(0);
        }
    }
})
test('two plus two', ()=>{
    const value=2+2;
    expect(value).toBeGreaterThan(3);
})
test('add floating point numbers', ()=>{
    const value=0.1+0.2;
    expect(value).toBeCloseTo(0.3)
})
test('there is no I in team', ()=>{
    expect('team').not.toMatch(/stop/)
})
const shoppingList = [
    'diapers',
    'kleeners',
    'milk',
]
test('the shopping list has milk on it', ()=>{
    expect(shoppingList).toContain('milk');
    expect(new Set(shoppingList)).toContain('milk')
})
function compileAndroidCode(){
    throw new Error('You are using wrong jdk');
}
test('compiling  android goes as expected', ()=>{
    expect(()=>compileAndroidCode()).toThrow(Error)
}) 
*/