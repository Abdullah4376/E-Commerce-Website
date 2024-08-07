import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";


export class AuthService {
    client = new Client();
    account;

    constructor () {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async signup ({email, password, name, brandName}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {

                // Display this message on the ui on the signUp page!

                alert('Account created successfully. Now, please return to login page!');
                return userAccount;
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