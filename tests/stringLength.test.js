const  stringLength =require('../stringLength');

test("longueur",()=>{
 expect(stringLength('massa')).toBe(5) ;
})

module.exports =stringLength;