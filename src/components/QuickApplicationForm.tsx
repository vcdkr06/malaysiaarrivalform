import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShieldCheck } from "lucide-react";

const QuickApplicationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    countryOfResidence: "",
    arrivalDate: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Navigate to apply page with form data as URL params
    const params = new URLSearchParams({
      firstName: formData.firstName,
      lastName: formData.lastName,
      countryOfResidence: formData.countryOfResidence,
      arrivalDate: formData.arrivalDate,
      email: formData.email,
      phone: formData.phone
    });
    
    navigate(`/apply?${params.toString()}`);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Submit Your Application
          </h2>
          <p className="text-lg text-muted-foreground">
            Complete this form to receive your Malaysia Digital Arrival Card in 3 minutes
          </p>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="bg-white text-foreground rounded-xl border-2 border-primary shadow-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-base font-semibold">
                First Name
              </Label>
              <Input
                id="firstName"
                placeholder="As in Passport"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
                className="h-12"
              />
            </div>

            {/* Last Name */}
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-base font-semibold">
                Last Name
              </Label>
              <Input
                id="lastName"
                placeholder="As in Passport"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
                className="h-12"
              />
            </div>

            {/* Country of Residence */}
            <div className="space-y-2">
              <Label htmlFor="country" className="text-base font-semibold">
                Country of Residence
              </Label>
              <Select
                value={formData.countryOfResidence}
                onValueChange={(value) => setFormData({ ...formData, countryOfResidence: value })}
                required
              >
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="de">Germany</SelectItem>
                  <SelectItem value="fr">France</SelectItem>
                  <SelectItem value="jp">Japan</SelectItem>
                  <SelectItem value="cn">China</SelectItem>
                  <SelectItem value="in">India</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Arrival Date */}
            <div className="space-y-2">
              <Label htmlFor="arrivalDate" className="text-base font-semibold">
                Arrival Date (DD/MM/YYYY)
              </Label>
              <Input
                id="arrivalDate"
                type="date"
                value={formData.arrivalDate}
                onChange={(e) => setFormData({ ...formData, arrivalDate: e.target.value })}
                required
                className="h-12"
              />
            </div>

            {/* Email Address */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="email" className="text-base font-semibold">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="To receive QR code"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="h-12"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="phone" className="text-base font-semibold">
                Phone number
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="h-12"
              />
            </div>
          </div>

          <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-center gap-2">
            <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
            <p className="text-sm text-green-800 text-center">
              Your data is secure and used exclusively to process your Malaysia Digital Arrival Card.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              type="submit"
              size="lg"
              className="w-full md:w-auto md:px-12 h-12 text-base font-semibold"
            >
              Continue to Application
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default QuickApplicationForm;
