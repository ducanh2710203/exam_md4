declare class HomeController {
    static getHomePage(req: any, res: any): Promise<void>;
    static getCreatePage(req: any, res: any): Promise<void>;
    static deleteStudent(req: any, res: any): Promise<void>;
    static getEditPage(req: any, res: any): Promise<void>;
    static EditStudent(req: any, res: any): Promise<void>;
    static createStudent(req: any, res: any): Promise<void>;
    static getDetailPage(req: any, res: any): Promise<void>;
}
export default HomeController;
