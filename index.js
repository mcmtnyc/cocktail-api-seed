import { Router } from "express";
import routes from "./cocktails/model/router.js";
// import dataTwoRoutes from "./dataTwo/dataTwoRoutes.js";


const router = Router();

router.get("/", (request, response) => response.send("This is the api root!"));

router.use("/", routes);
// router.use("/", dataTwoRoutes);


export default router;