import {NextFunction, Request, Response} from "express";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization
    if (!token) {
        res.status(401).json({ message: 'Unauthorized' })
        return
    }
    next()
}