import conf from "../conf/conf";
import { Client, ID, Storage } from "appwrite";

export class UploadServie {
    client = new Client();
    storage;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.storage = new Storage(this.client);
    }

    async uploadFile(file){
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Appwrite>UploadService>UploadFile>Error",error);
            return false;
        }

    }

    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
            return true
        } catch (error) {
            console.log("Appwrite>Upload>DeleteFile>Error",error);
            return false
        }
    }

    getFilePreview(fileId){
        this.storage.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    }
}

const uploadService = new UploadServie();
export default uploadService;