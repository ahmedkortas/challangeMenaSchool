let {Stringify,parseMe}=require('./ex3')

let obj={
    a:150,
    b:3, 
    c:"ahmed"
}
let arr=[9,[5,[10,30]],6];
test('test stringify',() => {
    expect(Stringify(obj)).toEqual(JSON.stringify(obj))
    expect(Stringify(arr)).toEqual(JSON.stringify(arr))
    expect(Stringify("obj")).toEqual(JSON.stringify("obj"))
})


