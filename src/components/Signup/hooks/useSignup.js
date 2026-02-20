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
import {useForm} from "react-hook-form";
export default function useSignup(){
	const{
		control, handleSubmit, formState:{errors },
	}=useForm({
		defaultValues:{
			email:"",
			password:"",
			
		},
	});
	const onSubmit = (data) => {
		console.log("login data:",data)
	};
	return{
		control,
		handleSubmit,
		errors,
		onSubmit,
	};
}