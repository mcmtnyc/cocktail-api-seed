import { Router } from "express";
import * as controllers from "./controller.js";

const router = Router();
//Set up routes to access Cocktail controlls
router.get("/cocktails", controllers.getCocktails);
router.get("/cocktails/:id", controllers.getCocktail);
// router.get("/automations/occupation/:id", controllers.getDataByProfession);
// router.get(
//   "/automations/occupation/all/show",
//   controllers.getDataAllProfession
// );
router.post("/cocktails", controllers.createCocktail);
router.put("/cocktails/:id", controllers.updateCocktail);
router.delete("/cocktails/:id", controllers.deleteCocktail);

export default router;