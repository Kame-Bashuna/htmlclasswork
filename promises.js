const interniship=true
const ourPromises=new Promise((resolve,reject)=>{
    if(internship){
        resolve('I made it')
    }
    else{
        reject('Pray for me')
    }
})
ourPromises
.then(()=>{
    console.log("I will be confirmed")
})
.catch(()=>{
    console.log("I will continue applying for job")
})
.finally(()=>{
    console.log(`I will still be successful wish `)
})

// console.log({ourPromises})

const successWish=async()=>{
try{
    await ourPromises;
    console.log('My success wish')
}catch{
    console.log('My wish is not successful but i will keep on applying for job')
}
}
successWish()
