import conf from '../conf/conf.js';
import { Client, Account, ID, Databases, Query } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor () {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
        this.databases = new Databases(this.client)
    }

    async signup ({email, password, name, brand}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                const userDetails = await this.databases.createDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteUserInfoCollectionId,
                    ID.unique(),
                    {
                        userId: userAccount.$id,
                        brand: brand
                    }
                )
                console.log(userAccount.$id);

                // Display this message on the ui on the signUp page!

                alert('Account created successfully. Now, please return to login page!');
                return { userAccount, userDetails };
            }
            else {

                // Display an error msg on the ui of the signUp page!
                
                return alert('Oops! Failed to create an account!')
            }
        } catch (error) {
            console.log('Error in appwrite/auth.js/signupFunction', error);
        }
    }

    async getCurrentUser () {
        try {
            return await this.account.get();
        } catch (error) {
            console.log('Error in appwrite/auth.js/getCurrentUserFunction', error);
        }
    }

    async getUserBrandName (userId) {
        try {
            const response = await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteUserInfoCollectionId,
                [Query.equal('userId', userId)]
            )

            if (response.documents.length > 0) {
                return response.documents[0];
            } else {
                console.log('User details not found');
            }
        } catch (error) {
            console.log('Error fetching user brand name!', error);
        }
    }

    async login ({email, password}) {
        try {
            // Display a Success message card like appwrite website on the ui
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.log('Error in appwrite/auth.js/loginFunction', error);
        }
    }

    async logout () {
        try {
            return await this.account.deleteSession('current');
        } catch (error) {
            console.log('Error in appwrite/auth.js/logoutFunction', error);
        }
    }
}

const authService = new AuthService();
export default authService;