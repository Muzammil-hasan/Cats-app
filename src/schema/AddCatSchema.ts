import { z } from 'zod';

export default z.object({
  name: z.string().min(1, { message: "Please enter your cat's name" }),
  age: z.preprocess(
    (value) => Number(value),
    z
      .number()
      .min(1, { message: "Please enter your cat's age" })
      .max(20, { message: 'Age should be lower than 20' })
  ),
  color: z.string().min(3, { message: 'Please enter correct color name' }),
  nature: z.enum(['depends', 'aggressive', 'calm'] as const),
});
