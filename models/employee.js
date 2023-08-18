const mongoose=require('mongoose');
const employees=mongoose.Schema({
    
    email:{type:String,required:true},
    secret:{type:String,required:true},
    position:{type:String,required:true},
    description:{type:String,required:true},

},{timestamps: { employeeId:'_id' ,createdAt: 'created_at',updatedAt:'updated_at' } 
})

module.exports=mongoose.model("EmployeeDetails",employees)