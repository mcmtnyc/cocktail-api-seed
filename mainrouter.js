import { Router } from "express"
import routes from "./cocktails/model/router.js"

const router = Router()

router.get("/", (request, response) => response.send("This is the api root!"))

router.use("/", routes)


export default router