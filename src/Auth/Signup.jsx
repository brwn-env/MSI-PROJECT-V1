import React from "react";
import { useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    setCheck(!check);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="m-8 flex gap-4 h-full ">
      <div className="w-full lg:w-3/5 mt-24 flex flex-col ">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">
            Register
          </Typography>
          <Typography
            variant="paragraph"
            color="blue-gray"
            className="text-lg font-normal"
          >
            Enter your registered email
          </Typography>
        </div>
        <form
          className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2"
          onSubmit={handleSubmit}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="small"
              color="blue-gray"
              className="-mb-3 font-medium"
            >
              Your email
            </Typography>
            <Input
              type="email"
              required
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                I agree the&nbsp;
                <Link to="/termsandcondition" className="text-gray-900 ml-1">
                  Terms and Condition
                </Link>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            onChange={handleCheck}
            checked={check}
          />
          <Button className="mt-6" fullWidth disabled={!check} type="submit">
            Sign In
          </Button>

          <Typography
            variant="paragraph"
            className="text-center text-blue-gray-500 font-medium mt-4"
          >
            Already have an account?
            <Link to="/sign-in" className="text-gray-900 ml-1">
              Sign in
            </Link>
          </Typography>
        </form>
      </div>
      <div className="w-2/4 h-full hidden lg:flex pr-24 items-center justify-center">
        <img src="/img/DS.png" className=" h-4/5  rounded-3xl " />
      </div>
    </section>
  );
};

export default Signup;
