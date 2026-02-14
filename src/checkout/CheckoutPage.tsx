
// "use client";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import { useCartStore } from "@/store/cart";
// import { useMutation } from "convex/react";
// import { api } from "@/convex/_generated/api";
// import { useRouter } from "next/navigation";

// const checkoutSchema = z.object({
//   name: z.string().min(2, "Name must be at least 2 characters"),
//   email: z.string().email("Invalid email address"),
//   phone: z.string().min(10, "Phone number too short"),
//   address: z.string().min(5, "Address is required"),
//   city: z.string().min(2, "City is required"),
//   country: z.string().min(2, "Country is required"),
//   zipCode: z.string().min(3, "Zip code is required"),
//   // payment method fields (e.g., e-Money) can be added later
// });

// type CheckoutForm = z.infer<typeof checkoutSchema>;

// export default function CheckoutPage() {
//   const { items, subtotal, clearCart } = useCartStore();
//   const router = useRouter();
//   const createOrder = useMutation(api.orders.create);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<CheckoutForm>({
//     resolver: zodResolver(checkoutSchema),
//   });

//   const onSubmit = async (data: CheckoutForm) => {
//     try {
//       const order = await createOrder({
//         customer: {
//           name: data.name,
//           email: data.email,
//           phone: data.phone,
//         },
//         shipping: {
//           address: data.address,
//           city: data.city,
//           country: data.country,
//           zipCode: data.zipCode,
//         },
//         items: items.map((item) => ({
//           productId: item.productId,
//           name: item.name,
//           price: item.price,
//           quantity: item.quantity,
//         })),
//         subtotal: subtotal(),
//         shippingCost: 50, // example fixed rate
//         tax: Math.round(subtotal() * 0.2), // 20% VAT
//         grandTotal: subtotal() + 50 + Math.round(subtotal() * 0.2),
//       });

//       clearCart();
//       router.push(`/confirmation?orderId=${order}`);
//     } catch (error) {
//       console.error("Checkout failed", error);
//     }
//   };

//   if (items.length === 0) {
//     return <div>Your cart is empty</div>;
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-6">
//       <h1 className="h3 mb-8">CHECKOUT</h1>

//       {/* Billing Details */}
//       <section className="mb-8">
//         <h2 className="subtitle text-primary mb-4">Billing Details</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label htmlFor="name">Name</label>
//             <input id="name" {...register("name")} className="w-full border p-3" />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
//           </div>
//           <div>
//             <label htmlFor="email">Email Address</label>
//             <input id="email" type="email" {...register("email")} className="w-full border p-3" />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//           </div>
//           <div>
//             <label htmlFor="phone">Phone Number</label>
//             <input id="phone" {...register("phone")} className="w-full border p-3" />
//             {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
//           </div>
//         </div>
//       </section>

//       {/* Shipping Info */}
//       <section className="mb-8">
//         <h2 className="subtitle text-primary mb-4">Shipping Info</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <div className="col-span-2">
//             <label htmlFor="address">Address</label>
//             <input id="address" {...register("address")} className="w-full border p-3" />
//             {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
//           </div>
//           <div>
//             <label htmlFor="city">City</label>
//             <input id="city" {...register("city")} className="w-full border p-3" />
//             {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
//           </div>
//           <div>
//             <label htmlFor="country">Country</label>
//             <input id="country" {...register("country")} className="w-full border p-3" />
//             {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
//           </div>
//           <div>
//             <label htmlFor="zipCode">ZIP Code</label>
//             <input id="zipCode" {...register("zipCode")} className="w-full border p-3" />
//             {errors.zipCode && <p className="text-red-500 text-sm">{errors.zipCode.message}</p>}
//           </div>
//         </div>
//       </section>

//       {/* Order Summary */}
//       <section className="mb-8">
//         <h2 className="subtitle text-primary mb-4">Summary</h2>
//         {/* list cart items */}
//         {items.map((item) => (
//           <div key={item.productId} className="flex justify-between">
//             <span>{item.name} x{item.quantity}</span>
//             <span>${item.price * item.quantity}</span>
//           </div>
//         ))}
//         <div className="border-t mt-4 pt-4">
//           <div className="flex justify-between">
//             <span>Subtotal</span>
//             <span>${subtotal()}</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Shipping</span>
//             <span>$50</span>
//           </div>
//           <div className="flex justify-between">
//             <span>VAT (20%)</span>
//             <span>${Math.round(subtotal() * 0.2)}</span>
//           </div>
//           <div className="flex justify-between font-bold text-lg">
//             <span>Grand Total</span>
//             <span>${subtotal() + 50 + Math.round(subtotal() * 0.2)}</span>
//           </div>
//         </div>
//       </section>

//       <button
//         type="submit"
//         disabled={isSubmitting}
//         className="btn-primary w-full py-4"
//       >
//         {isSubmitting ? "Processing..." : "PLACE ORDER"}
//       </button>
//     </form>
//   );
// }