import conf from '../conf/conf';

import { Client, Account, ID } from 'appwrite';

export class AuthService {
    client = new Client();
    account; 

    constructor(){
        this.client.setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}) {
        try {
           const userAccount = this.account.create(ID.unique(), email, password, name)
           if(userAccount){
              //call another method
              return this.login({email, password});
           } else {
             return userAccount;
           }
        } catch(error) {
            throw error;
        }
    }

    async login({email, password}) {
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch(error) {
            throw error;
        }
    }

    async getUserStatus() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logOut(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite>Auth>logOut>Error", error)
        }
    }
}

const authService = new AuthService()

export default authService;