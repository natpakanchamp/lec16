import express, {
  type Request,
  type Response,
} from "express";

//import middlewares
// pnpm i morgan
// pnpm i -D @types/morgan <- devDependencies
import morgan from "morgan";
import invalidJsonMiddleware from "./middlewares/invalidJsonMiddleware.js";
// เอามันมาใช้

// import router versions
import studentRouter from "./routes/studentsRoutes_v1.js"

const app = express();
const port = 3000;

// morgan middlewares
//app.use(morgan("dev"));
app.use(morgan("combind"));

// middlewares
app.use(express.json());
// Json validator Middleware
app.use(invalidJsonMiddleware);

// Endpoints route handlers
// GET /
app.get("/", (req: Request, res: Response) => {
  res.send("API services for Student Data");
});

// /api/v1/...
// /api/v1/students
app.use("/api/v1", studentRouter);

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
