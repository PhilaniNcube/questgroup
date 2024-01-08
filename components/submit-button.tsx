"use client"

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

const SubmitButton = () => {

  const {pending} = useFormStatus();

  return <Button type="submit" disabled={pending} aria-disabled={pending}>
    {pending ? "Please Wait..." : "Submit"}
  </Button>;
};
export default SubmitButton;
