// import { loginUser, signupUser } from "@/services/authservice/useAuthForm";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";

// const useSignupForm = () => {
// 	const router = useRouter();
// 	const handleSignup = (data) => {
// 		if (data.password !== data.confirmPassword) {
// 			toast.error("Passwords do not match");
// 			return;
// 		}

// 		try {
// 			signupUser(data);
// 			loginUser({
// 				username: data.username,
// 				password: data.password,
// 			});
// 			toast.success("Account created successfully 🎉");
// 			router.push("/dashboard");
// 		} catch (error) {
// 			console.log(error);
// 			toast.error(error.message);
// 		}
// 	};

// 	return { handleSignup };
// };

// export default useSignupForm;

"use client";
import toast from "react-hot-toast";
import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import {signupUser, loginUser} from "../../../services/authService"
export default function useSignup(){
	const router=useRouter();
	const{
		control, handleSubmit, formState:{errors },
	}=useForm({
		defaultValues:{
			email:"",
			password:"",
			username:"",
			phone:""
			
		},
	});
	 const onSubmit = (data) => {
    try {
      signupUser(data);
      loginUser(data);
	  toast.success("signup successful");
      router.push("/products");
    } catch (e) {
    
	  toast.error("signup failed"|| e.message)
    }
  };
	return{
		control,
		handleSubmit,
		errors,
		onSubmit,
	};
}