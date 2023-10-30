import { Router } from "express";
import astronomyRoutes from "./astronomy.js"

const router = Router();

router.get("/", (req, res) => res.send("This is the api root"));

router.use("/astronomy", astronomyRoutes);

export default router;