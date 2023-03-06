import { Request, Response } from 'express';
declare class WalletController {
    getWallet(req: Request, res: Response): Promise<void>;
    addMoney(req: Request, res: Response): Promise<void>;
}
declare const _default: WalletController;
export default _default;
