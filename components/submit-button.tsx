"use client"

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { sendGTMEvent } from "@next/third-parties/google";


const SubmitButton = () => {

  const {pending} = useFormStatus();

  return <Button onClick={() => sendGTMEvent({event: "generate_lead"})} type="submit" disabled={pending} aria-disabled={pending}>
    {pending ? "Please Wait..." : "Submit"}
  </Button>;
};
export default SubmitButton;
