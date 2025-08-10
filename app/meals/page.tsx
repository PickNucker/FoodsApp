import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "../../lib/meals";
import classes from "./page.module.css";
 
export default async function Meals() {
  const mealsData = await getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals <span className={classes.highlight}>for U</span>
        </h1>
        <h2>
          <Link href="/">Home</Link>
        </h2>
        <p className={classes.cta}>
          <Link href="/community">Community</Link> <br />
          <Link href="/meals/share">Share Your Favourite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={mealsData} />
      </main>
    </>
  );
}