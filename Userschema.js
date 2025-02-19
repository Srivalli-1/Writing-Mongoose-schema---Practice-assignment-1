const mongoose=require('mongoose')
const userSchema= new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    roles:{type:String,default:['user']}
    
})
const user= mongoose.model('User',userSchema)

const profileSchema = new mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    age:{type:Number}
  
  
  })
  const profile=mongoose.model('profile',profileSchema)

  const activitySchema = new mongoose.model({
    lastLogin:{type:Date }

  })
  const activity= mongoose.model('activity',activitySchema)