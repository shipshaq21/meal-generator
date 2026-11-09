# Meal Generator

A simple web app for people who don't really cook. Pick a protein, get easy meal ideas, and follow a short recipe.

**Live demo:** https://your-vercel-link-here.vercel.app

## Features

- Pick a protein (chicken, beef mince, salmon, eggs, tofu, beans & lentils, skyr & yoghurt)
- Get 3 meal ideas, and shuffle for different ones
- Filter by cooking time
- Simple recipes with ingredients, steps and tips

## Built with

React, Vite, Tailwind CSS, and a local JSON file for the meals (no backend). Hosted on Vercel.

## Run it locally

```bash
git clone https://github.com/shipshaq21/meal-generator.git
cd meal-generator
npm install
npm run dev
```

## Adding meals

Add a new object to the `meals` array in `src/data/meals.json`, following the format of the existing meals.