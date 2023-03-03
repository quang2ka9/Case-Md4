import { Request, Response } from "express";
declare class UserController {
    constructor();
    showFormLogin(req: Request, res: Response): void;
    login(req: Request, res: Response): void;
    register(req: Request, res: Response): void;
}
declare const _default: UserController;
export default _default;
