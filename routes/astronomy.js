import { Router } from "express";
import * as controllers from "../controllers/astronomy.js";

const router = Router();

router.get("/", controllers.getAllAstronomy);
router.get("/:id", controllers.getAstronomy);
router.post("/", controllers.createAstronomy);
router.put("/:id", controllers.updateAstronomy);
router.delete("/:id", controllers.deleteAstronomy);

export default router;

