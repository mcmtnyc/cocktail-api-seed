import db from "../db/connection.js";
import Cocktail from "../cocktails/cocktailmodel.js";
import cocktails from "../cocktails/seedcocktails.json" assert { type: "json" };
// import DataTwo from "../dataTwo/model/dataTwoModel.js";
// import dataTwo from "../dataTwo/dataTwo.json" assert { type: "json" };

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  // insert dataOne into database
  await Cocktail.insertMany(cocktails);

  // insert dataTwo into database
  // await DataTwo.insertMany(dataTwo);

  // close db connection (done)
  db.close();
};

insertData();
