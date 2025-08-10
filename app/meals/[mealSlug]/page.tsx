import classes from "./pages.module.css";
import Image from "next/image";
import { getMeal } from "@/lib/meals";

type PageProps = {
  params: { mealSlug: string };
};

export default async function Page({ params }: PageProps) {
  const meal = await getMeal(params.mealSlug);
  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

    let imageSrc: string;
  
  if (typeof meal.image === 'string') {
    imageSrc = meal.image;
  } else {
    imageSrc = URL.createObjectURL(meal.image);
  }

  if (!imageSrc.startsWith("/") && !imageSrc.startsWith("http")) {
    imageSrc = "/" + imageSrc;
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={imageSrc} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        />
      </main>
    </>
  );
}