export declare class FileController {
    private readonly logger;
    uploadFile(file: Express.Multer.File): {
        message: string;
        filePath: string;
    };
}
