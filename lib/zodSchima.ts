import { z } from "zod";

export const schema = z.object({
    street: z.string(),
})