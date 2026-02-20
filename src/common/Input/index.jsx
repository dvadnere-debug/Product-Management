"use client";

import { useState } from "react";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

export default function InputField({
  label,
  inputType = "text",
  placeholder,
  errors,
  field,
  showPasswordToggle,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordField = inputType === "password";
  const finalType =
    isPasswordField && showPassword ? "text" : inputType;

  return (
    <div className="space-y-2 relative">
      <Label htmlFor={field.name}>{label}</Label>

      <Input
        id={field.name}
        {...field}
        type={finalType}
        placeholder={placeholder}
        className={errors ? "border-destructive" : ""}
      />

      {isPasswordField && showPasswordToggle && (
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-9 text-xs text-muted-foreground"
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      )}

      {errors && (
        <p className="text-sm text-destructive">
          {errors.message}
        </p>
      )}
    </div>
  );
}