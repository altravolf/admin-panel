const { z } = require("zod");

const registerSchema = z.object({
    username: z.string({ required_error: "Username is required" }).trim().min(3, { message: "Username must be at least 3 characters long" }).max(255),
    email: z.string({ required_error: "Email is required" }).email({ message: "Invalid email" }).trim().min(3, { message: "Email must be at least 3 characters long" }).max(255),
    password: z.string({ required_error: "Password is required" }).trim().min(8, { message: "Password must be at least 8 characters long" }).max(255).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, { message: "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character" })

})

module.exports = registerSchema;