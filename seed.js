import db from "./connection.js";
import Cocktail from "./cocktails/model/cocktailmodel.js";
import cocktails from "./seedcocktails.json" assert { type: "json" };


const insertData = async () => {
  // reset database
  await db.dropDatabase();

  // insert dataOne into database
  await Cocktail.insertMany(cocktails.drinks[0]);

  // insert dataTwo into database
  // await DataTwo.insertMany(dataTwo);

  // close db connection (done)
  db.close();
};

insertData();
