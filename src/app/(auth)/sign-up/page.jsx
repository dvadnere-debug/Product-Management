import {Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter} from "../../../components/ui/card"
import {Label} from "../../../components/ui/label"
import {Input} from "../../../components/ui/input"
import {Button} from "../../../components/ui/button"

export default async function SignUpPage(){
    await new Promise(r => setTimeout(r, 3000));
    return (
        <div className="flex justify-center items-center">
        <Card className="m-9 mx-auto w-125">
            <CardHeader>
                <CardTitle>
                    Sign Up</CardTitle>
                    <CardDescription>
                        Create an account to get started
                    </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="abc@example.com" required/>
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                            </div>
                            <Input id="password" type="password" required />

                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">Signup</Button>
            </CardFooter>
        </Card></div>
    )
}