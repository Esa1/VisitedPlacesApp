import React from "react";
import { useForm } from "../../shared/hooks/form-hook";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";
import "./Auth.css";

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
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <Input
            element="input"
            id="email"
            type="email"
            label="E-mail"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            element="input"
            id="password"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(6)]}
            errorText="Please enter a password with at least 6 characters."
            onInput={inputHandler}
          />
        </div>
        <Button type="submit" disabled={!formState.isValid}>
          LOGIN
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
