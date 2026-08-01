const app=require('./src/app.js')
const connDB=require('./src/db/db.js')

connDB()

app.listen(3000,()=>{
    console.log('App is Running on port 3000');
    
})