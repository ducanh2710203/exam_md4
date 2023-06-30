declare class HomeController {
    static getHomePage(req: any, res: any): Promise<void>;
    static getCreatePage(req: any, res: any): Promise<void>;
    static deleteProduct(req: any, res: any): Promise<void>;
    static getEditPage(req: any, res: any): Promise<void>;
    static EditProduct(req: any, res: any): Promise<void>;
    static createProduct(req: any, res: any): Promise<void>;
    static searchProduct(req: any, res: any): Promise<void>;
}
export default HomeController;
