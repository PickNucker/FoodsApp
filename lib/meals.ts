'use server'

import fs from 'node:fs'
import sql from 'better-sqlite3'
import type {Meal} from '@/types/Meal'
import slugify from 'slugify';
import xss from 'xss';

const db = sql("meals.db");

export async function getMeals() : Promise<Meal[]> {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return db.prepare('SELECT * FROM meals').all() as Meal[];
}

export async function getMeal(slug: string): Promise<Meal> {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug) as Meal;
}

export async function saveMeal(meal:Meal) {
  meal.slug = slugify(meal.title, {lower: true});
  meal.instructions = xss(meal.instructions);

  if (meal.image instanceof File) {
    const extension = meal.image.name.split(".").pop()
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferedImage), (error) => {
      if(error) throw new Error("Saving image failed");
    });

    meal.image = fileName;

    db.prepare(`
      INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
      VALUES (
        @title, 
        @summary, 
        @instructions, 
        @creator, 
        @creator_email,
        @image, 
        @slug
      )
    `).run(meal);
  }
}
