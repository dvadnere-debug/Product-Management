// import {Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "../../../components/ui/card"
// import {Label} from "../../../components/ui/label"
// import {Input} from "../../../components/ui/input"
// import {Button} from "../../../components/ui/button"

// export default async function LoginPage(){
//     await new Promise(r=> setTimeout(r,3000));
//     return (
//         <div className="m-7 flex items-center justify-center">
//         <Card className="mx-auto  w-125">
//             <CardHeader>
//                 <CardTitle>
//                     Login</CardTitle>
//                     <CardDescription>
//                         Login in your account
//                     </CardDescription>
//             </CardHeader>
//             <CardContent>
//                 <form>
//                     <div className="flex flex-col gap-6">
//                         <div className="grid gap-2">
//                             <Label htmlFor="email">Email</Label>
//                             <Input id="email" type="email" placeholder="abc@example.com" required/>
//                         </div>
//                         <div className="grid gap-2">
//                             <div className="flex items-center">
//                                 <Label htmlFor="password">Password</Label>
//                             </div>
//                             <Input id="password" type="password" required />

//                         </div>
//                     </div>
//                 </form>
//             </CardContent>
//             <CardFooter className="flex-col gap-2">
//                 <Button type="submit" className="w-full">Login</Button>
//             </CardFooter>
//         </Card></div>
//     )
// }

import { LoginForm } from "../../../components/Login/component";
export default async function LoginPage() {
  await new Promise((r) => setTimeout(r, 3000));
  return (
    <>
      <h1>hii from LoginPage</h1>
      <LoginForm />
    </>
  );
}
