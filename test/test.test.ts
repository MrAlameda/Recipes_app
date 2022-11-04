import { assert } from "chai"
import {it, describe } from "mocha"

const sumar = (a:number,b:number)=>a+b

describe("test de la funcion sumar",()=>{
    it("deberia retornar 12 cuando se sumen",(done)=>{
        const response=sumar(4,8)
        assert.equal(response,12)
        done()
    })

    it("deberia retornar 12 cuando se sumen",(done)=>{
        const response=sumar(3,10)
        assert.equal(response,12)
        done()
    })

})