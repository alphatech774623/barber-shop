    import express from "express";
    import dotenv from "dotenv";
    import cors from "cors";
    import cookieParser from 'cookie-parser'
    import {connectDB} from "./config/db.js";

    import router from "./routes/auth.js";

    dotenv.config();
    const app = express();

    // Middleware
    app.use(cookieParser());
    app.use(express.json());
    app.use(cors({
        origin : [process.env.CLIENT_URL],
        credentials : true,
    }));

    // DB Connect
    connectDB();

    // Routes
    app.use("/api/auth", router);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
