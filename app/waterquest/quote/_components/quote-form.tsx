

import Image from 'next/image';

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { quoteFormAction } from '@/actions/quote-request-form-action';

export default function QuoteForm() {
  return (
    <div className="w-full container mx-auto grid grid-cols-2 gap-8">
      <div className="space-y-8 my-auto">
        <div className="space-y-2">
          <h1 className="text-3xl text-blue-500 font-bold">Request a Quote</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Fill out the form below and we&apos;ll get back to you with a quote as
            soon as possible.
          </p>
        </div>
        <Card className="shadow-lg">
          <form action={quoteFormAction}>
            <CardContent className="space-y-6 py-3">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" required type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" required type="tel" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="property-type">Property Type</Label>
                <Select name="property">
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="residential">Residential</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                      <SelectItem value="agricultural">Agricultural</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="details">Details</Label>
                <Textarea
                  className="min-h-[100px]"
                  name="details"
                  id="details"
                  required
                />
              </div>
              <Button

                className="w-full bg-blue-600"
                type="submit"
              >
                Submit Request
              </Button>
            </CardContent>
          </form>
        </Card>
      </div>
      <div>
        <Image
          alt="Placeholder image"
          height="1920"
          src="/images/tap.jpg"
          width="1280"
          className="w-full object-cover max-h-[700px]"
        />
      </div>
    </div>
  );
}
