let express = require('express')

let app=express()
app.use(express.json())               //Imp for form data in json format

app.get('/',(req,res)=>{
    res.send({status:1,msg:"home page"})
})

app.get('/news',(req,res)=>{
    res.send({status:1,msg:"news page"})
})

app.get('/news/:id',(req,res)=>{
    let CurrentId=req.params.id
    res.send({status:1,msg:"news details APi"+CurrentId})
})


app.get("/products",(req,res)=>{
    res.send({status:1,msg:"products page"})
})

app.post("/login",(req,res)=>{
    console.log(req.body)
    // res.send({status:1,msg:"login page" ,data:req.body ,data2:req.query})
    res.status(200).json({status:1,msg:"login page" ,data:req.body ,data2:req.query})
})

app.listen(8000)