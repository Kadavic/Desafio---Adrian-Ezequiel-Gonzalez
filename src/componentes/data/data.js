const data=[{
    id:1,
    nombre:"Outlast",
    img:"https://cl.buscafs.com/www.levelup.com/public/uploads/images/58501/58501_256x256.jpg",
    categoria:"terror",
    stock:20,
},
{
    id:2,
    nombre:"Residen Evil 2",
    img:"https://cl.buscafs.com/www.levelup.com/public/uploads/images/58501/58501_256x256.jpg",
    categoria:"terror",
    stock:20,
},
{
    id:3,
    nombre:"Forager",
    img:"https://cl.buscafs.com/www.levelup.com/public/uploads/images/58501/58501_256x256.jpg",
    categoria:"terror",
    stock:20,
},
{
    id:4,
    nombre:"Minecraft",
    img:"https://cl.buscafs.com/www.levelup.com/public/uploads/images/58501/58501_256x256.jpg",
    categoria:"terror",
    stock:20,
},
{
    id:5,
    nombre:"Age of empires 4",
    img:"https://cl.buscafs.com/www.levelup.com/public/uploads/images/58501/58501_256x256.jpg",
    categoria:"terror",
    stock:20,
},
{
    id:6,
    nombre:"Alien Isolation",
    img:"https://cl.buscafs.com/www.levelup.com/public/uploads/images/58501/58501_256x256.jpg",
    categoria:"terror",
    stock:20,
},
{
    id:7,
    nombre:"Silent Hill 2",
    img:"https://cl.buscafs.com/www.levelup.com/public/uploads/images/58501/58501_256x256.jpg",
    categoria:"terror",
    stock:20,
},
{
    id:8,
    nombre:"Rayman 2",
    img:"https://cl.buscafs.com/www.levelup.com/public/uploads/images/58501/58501_256x256.jpg",
    categoria:"terror",
    stock:20,
},
{
    id:9,
    nombre:"Spyro 2",
    img:"https://cl.buscafs.com/www.levelup.com/public/uploads/images/58501/58501_256x256.jpg",
    categoria:"terror",
    stock:20,
},
{
    id:10,
    nombre:"Soul reaver 2",
    img:"https://cl.buscafs.com/www.levelup.com/public/uploads/images/58501/58501_256x256.jpg",
    categoria:"terror",
    stock:20,
},]

const GetFetch= new Promise((res,rej)=>{
    let condition= true
    if(condition){
        setTimeout(()=>{
            res(data)
        },2000);
    }
    else{
        rej(console.log("No hay datos"))
    }
})
export default GetFetch