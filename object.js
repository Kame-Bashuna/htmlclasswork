const cup={
    color:'red',
    size:'small',
    shape:'cylindrical',
    functionality:{
        drinkType:'tea',
        temperature:'hot'
    },
    design:['floral','polka','checked'],
    drink:function(){
        console.log('Use me to drink tea'),
        console.log(`My main use is to drink ${this.functionality.drinkType}`)
    }
    
};
console.log('size',cup.size);
console.log('shape',cup['shape']);
cup.drink()

const values= Object.values(cup);
console.log({values})

const keys= Object.keys(cup);
console.log({keys})

Object.keys(cup).forEach(item=>{
    console.log({key:item,value:cup[item]})
})