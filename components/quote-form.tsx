"use client"

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { quoteFormAction } from "@/actions/quote-request-form-action";
import SubmitButton from "./submit-button";

export default function QuoteForm() {
  return (
    <div className="w-full lg:max-w-4xl mx-auto py-12 bg-slate-300">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Request a Quote</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Fill out the form below and we will get back to you as soon as
              possible.
            </p>
          </div>
          <form action={quoteFormAction} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  name="first_name"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  name="last-name"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                placeholder="Enter your email"
                type="email"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  name="phone"
                  id="phone"
                  placeholder="Enter your phone number"
                  type="tel"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Service</Label>
                <Select name="service" defaultValue="Water Pumps">
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="Water Pumps">Water Pumps</SelectItem>
                    <SelectItem value="Solar Power">Solar Power</SelectItem>
                    <SelectItem value="Electrical Services">Electrical Services</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[100px]"
                id="message"
                name="message"
                placeholder="Enter your message"
                required
              />
            </div>
            <SubmitButton />
          </form>
        </div>
      </div>
    </div>
  );
}
