import db from "./connection.js"
import Cocktail from "./cocktails/model/cocktailmodel.js"
import cocktails from "./seedcocktails.json" assert { type: "json" }


const insertData = async () => {
  // reset database
  await db.dropDatabase()

  // insert to database
  await Cocktail.insertMany(cocktails.drinks[0])

  // close db connection (done)
  db.close()
}

insertData()
