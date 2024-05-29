import conf from '../conf/conf.js';
import {Client, ID, Databases, Storage, Query} from 'appwrite';

export class Service{
    client = new Client();
    database;
    storage;
    id = ID.unique();

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.database = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async addProduct ({title, color, quantity, price, productImages, stock, description, brand, userID, id = this.id, status}) {
        try {
            await this.database.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, id, {
                title,
                color,
                quantity,
                price,
                productImages,
                stock,
                description,
                brand,
                userID,
                status
            });
            return 'Product Added Successfully!'
        } catch (error) {
            console.log('Error in appwrite/config.js/addProductFunction', error);
            return 'An Error Occured While Adding This Product!'
        }
    }

    async updateProduct ({title, color, quantity, price, productImages, stock, description, brand, userID, id = this.id, status}) {
        try {
            await this.database.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, id, {
                title,
                color,
                quantity,
                price,
                productImages,
                stock,
                description,
                brand,
                userID,
                status
            });
            return 'Product Updated Successfully!'
        } catch (error) {
            console.log('Error in appwrite/config.js/updateProductFunction', error);
            return 'An Error Occured While Updating This Product!'
        }
    }

    async deleteProduct ({id = this.id}) {
        try {
            await this.database.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, id);
            return 'Product Deleted Successfully!'
        } catch (error) {
            console.log('Error in appwrite/config.js/deleteProductFunction', error);
            return 'An Error Occured While Deleting This Product!'
        }
    }

    async getProduct({id = this.id}) {
        try {
            return await this.database.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, id);
        } catch (error) {
            console.log('Error in appwrite/config.js/getProductFunction', error);
            return 'An Error Occured While Getting This Product!'
        }
    }

    async getProducts (queries = [Query.equal('status', 'public')]) {
        try {
            return await this.database.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries)
        } catch (error) {
            console.log('Error in appwrite/config.js/getProductsFunction', error);
            return 'An Error Occured While Getting All The Products!'
        }
    }

    // File upload services:

    async uploadFile (file) {
        try {
            await this.storage.createFile(conf.appwriteBucketId, ID.unique(), file)
            return 'File Uploaded Successfully!'
        } catch (error) {
            console.log('Error in appwrite/config.js/uploadFileFunction', error);
            return 'An Error Occured While Uploading the Image!';
        }
    }

    async deleteFile (fileID) {
        try {
            await this.storage.deleteFile(conf.appwriteBucketId, fileID)
            return 'File Deleted Successfully!'
        } catch (error) {
            console.log('Error in appwrite/config.js/deleteFileFunction', error);
            return 'An Error Occured While Deleting the Image!';
        }
    }

    getFilePreview(fileID) {
        return this.storage.getFilePreview(conf.appwriteBucketId, fileID)
    }
}

const service = new Service();
export default service;