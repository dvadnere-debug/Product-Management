"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../../ui/card";
import { Button } from "../../ui/button";

import FormController from "../../../common/FormController";
import { LOGIN_FORM_CONTROLLER } from "../constants";
import useLogin from "../hooks/useLogin";

export function LoginForm() {
  const { control, handleSubmit, errors, onSubmit } = useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="mx-auto w-125">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Login to your account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <FormController
                config={LOGIN_FORM_CONTROLLER}
                control={control}
                errors={errors}
              />
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            className="w-full"
            onClick={handleSubmit(onSubmit)}
          >
            Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}