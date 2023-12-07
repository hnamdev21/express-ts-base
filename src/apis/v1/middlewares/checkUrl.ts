import { statusCodes } from "@/constants";
import allowUrls from "@/constants/allowUrls";
import { Request, Response, NextFunction } from "express";

const checkUrlMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const origin = req.headers.origin;

  if (origin) {
    if (allowUrls[origin]) return next();

    return res.status(statusCodes.FORBIDDEN).json({ message: "Origin not allowed" });
  }

  return res.status(statusCodes.BAD_REQUEST).json({ message: "Origin header missing" });
};

export default checkUrlMiddleware;
