import React from "react";
import { useForm } from "../../shared/hooks/form-hook";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
// import "./Auth.css";

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false,
  );

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form onSubmit={authSubmitHandler}>
      <div>
        <label htmlFor="email">Email</label>
        <Input
          element="email"
          type="email"
          id="email"
          placeholder="Email"
          onChange={inputHandler}
          value={formState.inputs.email.value}
          validators={[VALIDATOR_EMAIL()]}
          onInput={inputHandler}
          errorText="Please enter a valid email address."
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          onChange={inputHandler}
          value={formState.inputs.password.value}
          validators={[VALIDATOR_MINLENGTH(6)]}
          onInput={inputHandler}
          errorText="Please enter a password with at least 6 characters."
        />
      </div>
      <Button type="submit" disabled={!formState.isValid}>
        Authenticate
      </Button>
    </form>
  );
};

export default Auth;
