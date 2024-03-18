import React from "react";
import prisma from "../../../lib/prisma";

export default function Seed() {
  // async function createProduct() {
  //   "use server";
  //   await prisma.product.create({
  //     data: {
  //       name: "Frisbee",
  //       price: 9,
  //       currency: "USD",
  //       stock: 30,
  //       description: "Airborne fetch fun, perfect for a bouncy pup!",
  //       specs: [
  //         "Brightly colored and easy to track as it flies",
  //         "Disc shape allows for easy biting",
  //         "Either bring it back, or rip it to pieces",
  //       ],
  //       category: {
  //         connect: {
  //           id: "1",
  //         },
  //       },
  //     },
  //   });
  // }

  // createProduct();
  return <div>Seed Page</div>;
}
