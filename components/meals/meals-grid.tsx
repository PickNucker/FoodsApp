import { Meal } from '@/types/Meal';
import MealItem from './meal-item';
import classes from './meals-grid.module.css';
import React from 'react';

const MealsGrid = ({ meals }: { meals: Meal[] }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.slug}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
