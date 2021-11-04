import useSWR from 'swr'
import Recipe from '../components/Recipe'

let query = 'artichoke'
let reqUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`

const fetcher = async (
  input: RequestInfo,
  init: RequestInit,
  ...args: any[]
) => {
  const res = await fetch(input, init)
  return res.json()
}

const Recipes = () => {
  const { data, error } = useSWR(reqUrl, fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <div>
      {data.hits.map((recipe) => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.title}
          image={recipe.recipe.image}
        />
      ))}
    </div>
  )
}

// "recipe": {
//                 "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_5409e71ace99cc38bb8daa34e40dc972",
//                 "label": "Artichoke-Olive Crostini",
//                 "image": "https://www.edamam.com/web-img/c60/c60a206870e6b5cf39941cff8837d599.jpg",
//                 "source": "Smitten Kitchen",
//                 "url": "http://smittenkitchen.com/2009/04/artichoke-olive-crostini/",
//                 "shareAs": "http://www.edamam.com/recipe/artichoke-olive-crostini-5409e71ace99cc38bb8daa34e40dc972/artichoke",
//                 "yield": 4.0,
//                 "dietLabels": [
//                     "Balanced",
//                     "High-Fiber"
//                 ],
//                 "healthLabels": [
//                     "Vegan",
//                     "Vegetarian",
//                     "Pescatarian",
//                     "Mediterranean",
//                     "DASH",
//                     "Dairy-Free",
//                     "Egg-Free",
//                     "Peanut-Free",
//                     "Tree-Nut-Free",
//                     "Soy-Free",
//                     "Fish-Free",
//                     "Shellfish-Free",
//                     "Pork-Free",
//                     "Red-Meat-Free",
//                     "Crustacean-Free",
//                     "Celery-Free",
//                     "Mustard-Free",
//                     "Sesame-Free",
//                     "Lupine-Free",
//                     "Mollusk-Free",
//                     "Alcohol-Free",
//                     "Sulfite-Free",
//                     "Kosher"
//                 ],
//                 "cautions": [
//                     "Sulfites"
//                 ],
//                 "ingredientLines": [
//                     "1 garlic clove, peeled and smashed",
//                     "1 cup large green pitted olives",
//                     "1 tablespoon capers, rinsed and drained",
//                     "1 15-ounce can of artichoke hearts, drained",
//                     "1/4 cup extra-virgin olive oil",
//                     "8 large slices of crusty bread"
//                 ],
//                 "ingredients": [
//                     {
//                         "text": "1 garlic clove, peeled and smashed",
//                         "quantity": 1.0,
//                         "measure": "clove",
//                         "food": "garlic",
//                         "weight": 3.0,
//                         "foodCategory": "vegetables",
//                         "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
//                         "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
//                     },
//                     {
//                         "text": "1 cup large green pitted olives",
//                         "quantity": 1.0,
//                         "measure": "cup",
//                         "food": "olives",
//                         "weight": 168.00000000284,
//                         "foodCategory": "canned fruit",
//                         "foodId": "food_bt7u5w5a064gusa46msxfb38ag06",
//                         "image": "https://www.edamam.com/food-img/822/8221f2141e8dafd469414b20777735ca.jpg"
//                     },
//                     {
//                         "text": "1 tablespoon capers, rinsed and drained",
//                         "quantity": 1.0,
//                         "measure": "tablespoon",
//                         "food": "capers",
//                         "weight": 8.6,
//                         "foodCategory": "Condiments and sauces",
//                         "foodId": "food_ak4s9lna3rmnfeaz93ni0blu823w",
//                         "image": "https://www.edamam.com/food-img/627/627582f390a350d98c367f89c3a943fe.jpg"
//                     },
//                     {
//                         "text": "1 15-ounce can of artichoke hearts, drained",
//                         "quantity": 15.0,
//                         "measure": "ounce",
//                         "food": "artichoke hearts",
//                         "weight": 425.242846875,
//                         "foodCategory": "vegetables",
//                         "foodId": "food_aneqha3aarf9vmawbdwibaf8jnus",
//                         "image": "https://www.edamam.com/food-img/8f8/8f80887cee9e2455b7f8a162c2615758.jpg"
//                     },
//                     {
//                         "text": "1/4 cup extra-virgin olive oil",
//                         "quantity": 0.25,
//                         "measure": "cup",
//                         "food": "extra-virgin olive oil",
//                         "weight": 54.0,
//                         "foodCategory": "Oils",
//                         "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
//                         "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
//                     },
//                     {
//                         "text": "8 large slices of crusty bread",
//                         "quantity": 8.0,
//                         "measure": "slice",
//                         "food": "bread",
//                         "weight": 290.0,
//                         "foodCategory": "bread, rolls and tortillas",
//                         "foodId": "food_a3049hmbqj5wstaeeb3udaz6uaqv",
//                         "image": "https://www.edamam.com/food-img/886/886960f6ce6ccec5b9163bacf2996853.jpg"
//                     }
//                 ],
//                 "calories": 1651.172138034516,
//                 "totalWeight": 948.84284687784,
//                 "totalTime": 0.0,
//                 "cuisineType": [
//                     "mediterranean"
//                 ],
//                 "mealType": [
//                     "lunch/dinner"
//                 ],
//                 "dishType": [
//                     "starter"
//                 ],
//                 "totalNutrients": {
//                     "ENERC_KCAL": {
//                         "label": "Energy",
//                         "quantity": 1651.172138034516,
//                         "unit": "kcal"
//                     },
//                     "FAT": {
//                         "label": "Total lipid (fat)",
//                         "quantity": 82.06522427061581,
//                         "unit": "g"
//                     },
//                     "FASAT": {
//                         "label": "Fatty acids, total saturated",
//                         "quantity": 12.262615424915186,
//                         "unit": "g"
//                     },
//                     "FATRN": {
//                         "label": "Fatty acids, total trans",
//                         "quantity": 0.0754,
//                         "unit": "g"
//                     },
//                     "FAMS": {
//                         "label": "Fatty acids, total monounsaturated",
//                         "quantity": 54.43809014256777,
//                         "unit": "g"
//                     },
//                     "FAPU": {
//                         "label": "Fatty acids, total polyunsaturated",
//                         "quantity": 11.865769422025874,
//                         "unit": "g"
//                     },
//                     "CHOCDF": {
//                         "label": "Carbohydrate, by difference",
//                         "quantity": 197.79416320674028,
//                         "unit": "g"
//                     },
//                     "FIBTG": {
//                         "label": "Fiber, total dietary",
//                         "quantity": 40.27731373134088,
//                         "unit": "g"
//                     },
//                     "SUGAR": {
//                         "label": "Sugars, total",
//                         "quantity": 21.4141641840625,
//                         "unit": "g"
//                     },
//                     "PROCNT": {
//                         "label": "Protein",
//                         "quantity": 46.79840109283636,
//                         "unit": "g"
//                     },
//                     "CHOLE": {
//                         "label": "Cholesterol",
//                         "quantity": 0.0,
//                         "unit": "mg"
//                     },
//                     "NA": {
//                         "label": "Sodium, Na",
//                         "quantity": 3311.246276083374,
//                         "unit": "mg"
//                     },
//                     "CA": {
//                         "label": "Calcium, Ca",
//                         "quantity": 730.0568526274992,
//                         "unit": "mg"
//                     },
//                     "MG": {
//                         "label": "Magnesium, Mg",
//                         "quantity": 395.9537081251136,
//                         "unit": "mg"
//                     },
//                     "K": {
//                         "label": "Potassium, K",
//                         "quantity": 2116.148533437727,
//                         "unit": "mg"
//                     },
//                     "FE": {
//                         "label": "Iron, Fe",
//                         "quantity": 21.605128440093722,
//                         "unit": "mg"
//                     },
//                     "ZN": {
//                         "label": "Zinc, Zn",
//                         "quantity": 5.966609949693748,
//                         "unit": "mg"
//                     },
//                     "P": {
//                         "label": "Phosphorus, P",
//                         "quantity": 825.3085621875852,
//                         "unit": "mg"
//                     },
//                     "VITA_RAE": {
//                         "label": "Vitamin A, RAE",
//                         "quantity": 38.454428469317996,
//                         "unit": "µg"
//                     },
//                     "VITC": {
//                         "label": "Vitamin C, total ascorbic acid",
//                         "quantity": 53.15121308440056,
//                         "unit": "mg"
//                     },
//                     "THIA": {
//                         "label": "Thiamin",
//                         "quantity": 1.5222628497500852,
//                         "unit": "mg"
//                     },
//                     "RIBF": {
//                         "label": "Riboflavin",
//                         "quantity": 1.0296142789375,
//                         "unit": "mg"
//                     },
//                     "NIA": {
//                         "label": "Niacin",
//                         "quantity": 20.88527217831355,
//                         "unit": "mg"
//                     },
//                     "VITB6A": {
//                         "label": "Vitamin B-6",
//                         "quantity": 0.8693297023752555,
//                         "unit": "mg"
//                     },
//                     "FOLDFE": {
//                         "label": "Folate, DFE",
//                         "quantity": 578.3331358749999,
//                         "unit": "µg"
//                     },
//                     "FOLFD": {
//                         "label": "Folate, food",
//                         "quantity": 479.73313587499996,
//                         "unit": "µg"
//                     },
//                     "FOLAC": {
//                         "label": "Folic acid",
//                         "quantity": 58.0,
//                         "unit": "µg"
//                     },
//                     "VITB12": {
//                         "label": "Vitamin B-12",
//                         "quantity": 0.0,
//                         "unit": "µg"
//                     },
//                     "VITD": {
//                         "label": "Vitamin D (D2 + D3)",
//                         "quantity": 0.0,
//                         "unit": "µg"
//                     },
//                     "TOCPHA": {
//                         "label": "Vitamin E (alpha-tocopherol)",
//                         "quantity": 11.958041409109361,
//                         "unit": "mg"
//                     },
//                     "VITK1": {
//                         "label": "Vitamin K (phylloquinone)",
//                         "quantity": 114.17254133753977,
//                         "unit": "µg"
//                     },
//                     "WATER": {
//                         "label": "Water",
//                         "quantity": 606.6329741378967,
//                         "unit": "g"
//                     }
//                 },
//                 "totalDaily": {
//                     "ENERC_KCAL": {
//                         "label": "Energy",
//                         "quantity": 82.5586069017258,
//                         "unit": "%"
//                     },
//                     "FAT": {
//                         "label": "Fat",
//                         "quantity": 126.2541911855628,
//                         "unit": "%"
//                     },
//                     "FASAT": {
//                         "label": "Saturated",
//                         "quantity": 61.31307712457593,
//                         "unit": "%"
//                     },
//                     "CHOCDF": {
//                         "label": "Carbs",
//                         "quantity": 65.93138773558009,
//                         "unit": "%"
//                     },
//                     "FIBTG": {
//                         "label": "Fiber",
//                         "quantity": 161.10925492536353,
//                         "unit": "%"
//                     },
//                     "PROCNT": {
//                         "label": "Protein",
//                         "quantity": 93.59680218567271,
//                         "unit": "%"
//                     },
//                     "CHOLE": {
//                         "label": "Cholesterol",
//                         "quantity": 0.0,
//                         "unit": "%"
//                     },
//                     "NA": {
//                         "label": "Sodium",
//                         "quantity": 137.96859483680726,
//                         "unit": "%"
//                     },
//                     "CA": {
//                         "label": "Calcium",
//                         "quantity": 73.00568526274992,
//                         "unit": "%"
//                     },
//                     "MG": {
//                         "label": "Magnesium",
//                         "quantity": 94.27469241074134,
//                         "unit": "%"
//                     },
//                     "K": {
//                         "label": "Potassium",
//                         "quantity": 45.02443688165376,
//                         "unit": "%"
//                     },
//                     "FE": {
//                         "label": "Iron",
//                         "quantity": 120.028491333854,
//                         "unit": "%"
//                     },
//                     "ZN": {
//                         "label": "Zinc",
//                         "quantity": 54.24190863357953,
//                         "unit": "%"
//                     },
//                     "P": {
//                         "label": "Phosphorus",
//                         "quantity": 117.90122316965503,
//                         "unit": "%"
//                     },
//                     "VITA_RAE": {
//                         "label": "Vitamin A",
//                         "quantity": 4.272714274368666,
//                         "unit": "%"
//                     },
//                     "VITC": {
//                         "label": "Vitamin C",
//                         "quantity": 59.056903427111735,
//                         "unit": "%"
//                     },
//                     "THIA": {
//                         "label": "Thiamin (B1)",
//                         "quantity": 126.85523747917378,
//                         "unit": "%"
//                     },
//                     "RIBF": {
//                         "label": "Riboflavin (B2)",
//                         "quantity": 79.20109837980769,
//                         "unit": "%"
//                     },
//                     "NIA": {
//                         "label": "Niacin (B3)",
//                         "quantity": 130.53295111445968,
//                         "unit": "%"
//                     },
//                     "VITB6A": {
//                         "label": "Vitamin B6",
//                         "quantity": 66.87151556732735,
//                         "unit": "%"
//                     },
//                     "FOLDFE": {
//                         "label": "Folate equivalent (total)",
//                         "quantity": 144.58328396874998,
//                         "unit": "%"
//                     },
//                     "VITB12": {
//                         "label": "Vitamin B12",
//                         "quantity": 0.0,
//                         "unit": "%"
//                     },
//                     "VITD": {
//                         "label": "Vitamin D",
//                         "quantity": 0.0,
//                         "unit": "%"
//                     },
//                     "TOCPHA": {
//                         "label": "Vitamin E",
//                         "quantity": 79.72027606072908,
//                         "unit": "%"
//                     },
//                     "VITK1": {
//                         "label": "Vitamin K",
//                         "quantity": 95.14378444794981,
//                         "unit": "%"
//                     }
//                 },
//                 "digest": [
//                     {
//                         "label": "Fat",
//                         "tag": "FAT",
//                         "schemaOrgTag": "fatContent",
//                         "total": 82.06522427061581,
//                         "hasRDI": true,
//                         "daily": 126.2541911855628,
//                         "unit": "g",
//                         "sub": [
//                             {
//                                 "label": "Saturated",
//                                 "tag": "FASAT",
//                                 "schemaOrgTag": "saturatedFatContent",
//                                 "total": 12.262615424915186,
//                                 "hasRDI": true,
//                                 "daily": 61.31307712457593,
//                                 "unit": "g"
//                             },
//                             {
//                                 "label": "Trans",
//                                 "tag": "FATRN",
//                                 "schemaOrgTag": "transFatContent",
//                                 "total": 0.0754,
//                                 "hasRDI": false,
//                                 "daily": 0.0,
//                                 "unit": "g"
//                             },
//                             {
//                                 "label": "Monounsaturated",
//                                 "tag": "FAMS",
//                                 "schemaOrgTag": null,
//                                 "total": 54.43809014256777,
//                                 "hasRDI": false,
//                                 "daily": 0.0,
//                                 "unit": "g"
//                             },
//                             {
//                                 "label": "Polyunsaturated",
//                                 "tag": "FAPU",
//                                 "schemaOrgTag": null,
//                                 "total": 11.865769422025874,
//                                 "hasRDI": false,
//                                 "daily": 0.0,
//                                 "unit": "g"
//                             }
//                         ]
//                     },
//                     {
//                         "label": "Carbs",
//                         "tag": "CHOCDF",
//                         "schemaOrgTag": "carbohydrateContent",
//                         "total": 197.79416320674028,
//                         "hasRDI": true,
//                         "daily": 65.93138773558009,
//                         "unit": "g",
//                         "sub": [
//                             {
//                                 "label": "Carbs (net)",
//                                 "tag": "CHOCDF.net",
//                                 "schemaOrgTag": null,
//                                 "total": 0.0,
//                                 "hasRDI": false,
//                                 "daily": 0.0,
//                                 "unit": "g"
//                             },
//                             {
//                                 "label": "Fiber",
//                                 "tag": "FIBTG",
//                                 "schemaOrgTag": "fiberContent",
//                                 "total": 40.27731373134088,
//                                 "hasRDI": true,
//                                 "daily": 161.10925492536353,
//                                 "unit": "g"
//                             },
//                             {
//                                 "label": "Sugars",
//                                 "tag": "SUGAR",
//                                 "schemaOrgTag": "sugarContent",
//                                 "total": 21.4141641840625,
//                                 "hasRDI": false,
//                                 "daily": 0.0,
//                                 "unit": "g"
//                             },
//                             {
//                                 "label": "Sugars, added",
//                                 "tag": "SUGAR.added",
//                                 "schemaOrgTag": null,
//                                 "total": 0.0,
//                                 "hasRDI": false,
//                                 "daily": 0.0,
//                                 "unit": "g"
//                             }
//                         ]
//                     },
//                     {
//                         "label": "Protein",
//                         "tag": "PROCNT",
//                         "schemaOrgTag": "proteinContent",
//                         "total": 46.79840109283636,
//                         "hasRDI": true,
//                         "daily": 93.59680218567271,
//                         "unit": "g"
//                     },
//                     {
//                         "label": "Cholesterol",
//                         "tag": "CHOLE",
//                         "schemaOrgTag": "cholesterolContent",
//                         "total": 0.0,
//                         "hasRDI": true,
//                         "daily": 0.0,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Sodium",
//                         "tag": "NA",
//                         "schemaOrgTag": "sodiumContent",
//                         "total": 3311.246276083374,
//                         "hasRDI": true,
//                         "daily": 137.96859483680726,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Calcium",
//                         "tag": "CA",
//                         "schemaOrgTag": null,
//                         "total": 730.0568526274992,
//                         "hasRDI": true,
//                         "daily": 73.00568526274992,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Magnesium",
//                         "tag": "MG",
//                         "schemaOrgTag": null,
//                         "total": 395.9537081251136,
//                         "hasRDI": true,
//                         "daily": 94.27469241074134,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Potassium",
//                         "tag": "K",
//                         "schemaOrgTag": null,
//                         "total": 2116.148533437727,
//                         "hasRDI": true,
//                         "daily": 45.02443688165376,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Iron",
//                         "tag": "FE",
//                         "schemaOrgTag": null,
//                         "total": 21.605128440093722,
//                         "hasRDI": true,
//                         "daily": 120.028491333854,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Zinc",
//                         "tag": "ZN",
//                         "schemaOrgTag": null,
//                         "total": 5.966609949693748,
//                         "hasRDI": true,
//                         "daily": 54.24190863357953,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Phosphorus",
//                         "tag": "P",
//                         "schemaOrgTag": null,
//                         "total": 825.3085621875852,
//                         "hasRDI": true,
//                         "daily": 117.90122316965503,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Vitamin A",
//                         "tag": "VITA_RAE",
//                         "schemaOrgTag": null,
//                         "total": 38.454428469317996,
//                         "hasRDI": true,
//                         "daily": 4.272714274368666,
//                         "unit": "µg"
//                     },
//                     {
//                         "label": "Vitamin C",
//                         "tag": "VITC",
//                         "schemaOrgTag": null,
//                         "total": 53.15121308440056,
//                         "hasRDI": true,
//                         "daily": 59.056903427111735,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Thiamin (B1)",
//                         "tag": "THIA",
//                         "schemaOrgTag": null,
//                         "total": 1.5222628497500852,
//                         "hasRDI": true,
//                         "daily": 126.85523747917378,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Riboflavin (B2)",
//                         "tag": "RIBF",
//                         "schemaOrgTag": null,
//                         "total": 1.0296142789375,
//                         "hasRDI": true,
//                         "daily": 79.20109837980769,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Niacin (B3)",
//                         "tag": "NIA",
//                         "schemaOrgTag": null,
//                         "total": 20.88527217831355,
//                         "hasRDI": true,
//                         "daily": 130.53295111445968,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Vitamin B6",
//                         "tag": "VITB6A",
//                         "schemaOrgTag": null,
//                         "total": 0.8693297023752555,
//                         "hasRDI": true,
//                         "daily": 66.87151556732735,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Folate equivalent (total)",
//                         "tag": "FOLDFE",
//                         "schemaOrgTag": null,
//                         "total": 578.3331358749999,
//                         "hasRDI": true,
//                         "daily": 144.58328396874998,
//                         "unit": "µg"
//                     },
//                     {
//                         "label": "Folate (food)",
//                         "tag": "FOLFD",
//                         "schemaOrgTag": null,
//                         "total": 479.73313587499996,
//                         "hasRDI": false,
//                         "daily": 0.0,
//                         "unit": "µg"
//                     },
//                     {
//                         "label": "Folic acid",
//                         "tag": "FOLAC",
//                         "schemaOrgTag": null,
//                         "total": 58.0,
//                         "hasRDI": false,
//                         "daily": 0.0,
//                         "unit": "µg"
//                     },
//                     {
//                         "label": "Vitamin B12",
//                         "tag": "VITB12",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": true,
//                         "daily": 0.0,
//                         "unit": "µg"
//                     },
//                     {
//                         "label": "Vitamin D",
//                         "tag": "VITD",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": true,
//                         "daily": 0.0,
//                         "unit": "µg"
//                     },
//                     {
//                         "label": "Vitamin E",
//                         "tag": "TOCPHA",
//                         "schemaOrgTag": null,
//                         "total": 11.958041409109361,
//                         "hasRDI": true,
//                         "daily": 79.72027606072908,
//                         "unit": "mg"
//                     },
//                     {
//                         "label": "Vitamin K",
//                         "tag": "VITK1",
//                         "schemaOrgTag": null,
//                         "total": 114.17254133753977,
//                         "hasRDI": true,
//                         "daily": 95.14378444794981,
//                         "unit": "µg"
//                     },
//                     {
//                         "label": "Sugar alcohols",
//                         "tag": "Sugar.alcohol",
//                         "schemaOrgTag": null,
//                         "total": 0.0,
//                         "hasRDI": false,
//                         "daily": 0.0,
//                         "unit": "g"
//                     },
//                     {
//                         "label": "Water",
//                         "tag": "WATER",
//                         "schemaOrgTag": null,
//                         "total": 606.6329741378967,
//                         "hasRDI": false,
//                         "daily": 0.0,
//                         "unit": "g"
//                     }
//                 ]
//             },
//             "_links": {
//                 "self": {
//                     "href": "https://api.edamam.com/api/recipes/v2/5409e71ace99cc38bb8daa34e40dc972?type=public&app_id=24cb8861&app_key=1186411ef8da72db2e6d366de375833b",
//                     "title": "Self"
//                 }
//             }
//         },
