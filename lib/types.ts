export type Response = {
  from: number
  to: number
  _links: {
    next: {
      href: string
      title: string
    }
  }
  hits: [
    {
      recipe: {
        uri: string
        label: string
        image: string
        source: string
        url: string
        shareAs: string
        yield: number
        dietLabels: string[]
        healthLabels: string[]
        cautions: string[]
        ingredientLines: string[]
        ingredients: [
          {
            text: string
            quantity: number
            measure: string
            weight: number
            foodCategory: string
            foodId: string
            image: string
          },
        ]
      }
    },
  ]
}

export const dishType = [
  'Biscuits and cookies',
  'Bread',
  'Cereals',
  'Condiments and sauces',
  'Desserts',
  'Drinks',
  'Main course',
  'Pancake',
  'Preps',
  'Preserve',
  'Salad',
  'Sandwiches',
  'Side dish',
  'Soup',
  'Starter',
  'Sweets',
]

export const imageSize = ['LARGE', 'REGULAR', 'SMALL', 'THUMBNAIL']

export const mealType = ['Breakfast', 'Dinner', 'Lunch', 'Snack', 'Teatime']

export const cuisineType = [
  'American',
  'Asian',
  'British',
  'Caribbean',
  'Central Europe',
  'Chinese',
  'Eastern Europe',
  'French',
  'Indian',
  'Italian',
  'Japanese',
  'Kosher',
  'Mediterranean',
  'Mexican',
  'Middle Eastern',
  'Nordic',
  'South American',
  'South East Asian',
]

export const health = [
  'alcohol-cocktail',
  'alcohol-free',
  'celery-free',
  'crustacean-free',
  'dairy-free',
  'DASH',
  'egg-free',
  'fish-free',
  'fodmap-free',
  'gluten-free',
  'immuno-supportive',
  'keto-friendly',
  'kidney-friendly',
  'kosher',
  'low-potassium',
  'low-sugar',
  'lupine-free',
  'Mediterranean',
  'mollusk-free',
  'mustard-free',
  'no-oil-added',
  'paleo',
  'peanut-free',
  'pescatarian',
  'pork-free',
  'red-meat-free',
  'sesame-free',
  'shellfish-free',
  'soy-free',
  'sugar-conscious',
  'sulfite-free',
  'tree-nut-free',
  'vegan',
  'vegetarian',
  'wheat-free',
]

export const diet = [
  'balanced',
  'high-fiber',
  'high-protein',
  'low-carb',
  'low-fat',
  'low-sodium',
]
