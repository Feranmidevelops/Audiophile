
// lib/validations.ts
import { z } from "zod";
   
export const checkoutSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+?[\d\s-()]+$/, "Invalid phone number"),
  address: z.string().min(5, "Address is required"),
  zipCode: z.string().min(3, "ZIP code is required"),
  city: z.string().min(2, "City is required"),
  country: z.string().min(2, "Country is required"),
  paymentMethod: z.enum(["e-money", "cash"]),
  // e-Money fields (conditional)
  eMoneyNumber: z.string().optional(),
  eMoneyPin: z.string().optional(),
}).refine(data => {
  if (data.paymentMethod === "e-money") {
    return data.eMoneyNumber && data.eMoneyPin;
  }
  return true;
}, { message: "e-Money details required" });