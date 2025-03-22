import { z } from "zod";

export const formSchema = z.object({
  team_name: z.string().trim().min(2).max(16),
  university_name: z.string().trim().min(2).max(24),
  leader_name: z.string().trim().min(2, "Hi").max(24),
  leader_email: z.string().trim().email().min(6),
  leader_food: z.union([z.literal("option_1"), z.literal("option_2")]),
  member1_name: z.string().trim().min(2).max(24),
  member1_email: z.string().trim().email().min(6),
  member1_food: z.union([z.literal("option_1"), z.literal("option_2")]),
  member2_name: z.string().trim().min(2).max(24),
  member2_email: z.string().trim().email().min(6),
  member2_food: z.union([z.literal("option_1"), z.literal("option_2")]),
});

export type FormFields = z.infer<typeof formSchema>;
