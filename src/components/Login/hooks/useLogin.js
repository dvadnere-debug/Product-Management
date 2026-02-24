// import { loginUser } from '@/services/authservice/useAuthForm';
// import { useRouter } from 'next/navigation';
// import { toast } from 'react-toastify';

// const useLoginForm = () => {
//     const router = useRouter();

// 	const handleLogin = (data) => {
// 		try {
// 			loginUser(data);

// 			toast.success("Login successful 🎉");

// 			router.push("/dashboard");
// 		} catch (error) {
// 			toast.error(error.message);
// 		}
// 	};
//   return {
//     handleLogin
//   }
// }

// export default useLoginForm

"use client";
import { showToast } from "../../../common/commonToaster";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { loginUser } from "../../../services/authService";
export default function useLogin() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    try {
      const response = loginUser(data);
      for (let i = 0; i < 9; i++) {
        showToast.success("login successfull");
      }

      router.push("/products");
    } catch (error) {
      console.error("Login failed:", error.message);
      showToast.error("Invalid credentials. Please Try Again");
    }
  };
  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
  };
}
