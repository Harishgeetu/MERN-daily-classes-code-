const express=require("express");
const{
    register,login,getUserBasedOnID,getAllUsers,updateProfile, forgetPassword
}=require("../controller/UserControler");
 const router=express.Router();

 router.post("/register",register);
 router.post("/login",login);
 router.post("/get-user",getUserBasedOnID);
 router.post("/get-users",getAllUsers);
 router.post("/update-profile",updateProfile);
 router.post("/forget-password",forgetPassword)
 

 module.exports=router;