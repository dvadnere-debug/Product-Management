"use client";
import {
    Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter
} from "../../ui/card";
import {Button} from "../../ui/button";
import FormController from "../../../common/FormController";
import { SIGNUP_FORM_CONTROLLER } from "../constants";
import useSignup from "../hooks/useSignup";

export function SignupForm(){
    const {control, handleSubmit, errors, onSubmit} = useSignup();

    return(
       <div className="m-7 flex items-center justify-center">
             <Card className="mx-auto w-125">
               <CardHeader>
                 <CardTitle>Signup</CardTitle>
                 <CardDescription>
                  Create an account to continue
                 </CardDescription>
               </CardHeader>
       
               <CardContent>
                 <form onSubmit={handleSubmit(onSubmit)}>
                   <div className="flex flex-col gap-6">
                     <FormController
                       config={SIGNUP_FORM_CONTROLLER}
                       control={control}
                       errors={errors}
                     />
                     <Button
                   type="submit"
                   className="w-full text-white bg-blue-400"
                 >
                   Signup
                 </Button>
                   </div>
                 </form>
               </CardContent>
       
               <CardFooter className="flex-col gap-2">
                 
               </CardFooter>
             </Card>
           </div>
    )
}