"use server";

import { Meal } from "@/types/Meal";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";

export async function shareMeal(formData: FormData) {

  const meal: Meal = {
    id: "",
    slug: "",
    title: formData.get("title") as string || "",
    image: formData.get("image") as string | File,
    creator: formData.get("name") as string || "",
    creator_email: formData.get("email") as string || "",
    summary: formData.get("summary") as string || "",
    instructions: formData.get("instructions") as string || "",
  };

  await saveMeal(meal);
  redirect('/meals');
}
