// import dbConnect from "@/lib/dbConnect";
// import bcrypt from "bcrypt"

// export const LoginUser= async(payload)=>{
//     const {email, password}=payload;

//     const userCollection = await dbConnect("userInformaion");

//     const user= await userCollection.findOne({email});

//     if(!user) return null;

//     const isPasswordMatch= await bcrypt.compare(password, user.password);
    
//     if(!isPasswordMatch) return null;

//     return {
//         _id:user._id,
//         name:user.name,
//         email:user.email,
//         role:user.role
//     }
// }

import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const LoginUser = async (payload) => {
  const { email, password } = payload;

  const userCollection = dbConnect("userInformation");

  // 1️⃣ আগে user খোঁজো
  const user = await userCollection.findOne({ email });

  // ❌ user নাই
  if (!user) return null;

  // 2️⃣ password match
  const isPasswordOk = await bcrypt.compare(password, user.password);

  if (!isPasswordOk) return null;

  // 3️⃣ password বাদ দিয়ে safe user পাঠাও
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role, // 🔥 admin / user
  };
};