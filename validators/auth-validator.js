const { zod, z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is require" })
    .trim()
    .min(3, { message: "Name must be at least of 3 chracter" })
    .max(50, { message: "Name must not be more then 50 chracter" }),
  email: z
    .string({ required_error: "Email is require" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(7, { message: "Email must be at least of 7 chracter" })
    .max(100, { message: "Email must not be more then 100 chracter" }),
  phone: z
    .string({ required_error: "Phone is require" })
    .min(10, { message: "phone must be at least of 10 chracter" })
    .max(20, { message: "phone must not be more then 100 chracter" }),
  password: z
    .string({ required_error: "Name is require" })

    .min(7, { message: "Password must be at least of 7 chracter" })
    .max(1024, { message: "Password must not be more then 1024 chracter" }),
});

module.exports = signupSchema;
