export const SIGNUP_FORM_CONTROLLER = [
  {
    name: "username",
    label: "User Name",
    type: "text",
    placeholder: "Enter username",
    rules: { required: "Username is required" },
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter email",
    rules: { required: "Email is required" },
  },
  {
    name: "phone",
    label: "Phone No.",
    type: "text",
    placeholder: "Enter phone number",
    rules: {
      required: "Phone is required",
      minLength: { value: 10, message: "10-digits" },
    },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    rules: {
      required: "Password is required",
      minLength: { value: 6, message: "Min 6 characters" },
    },
  },
];
