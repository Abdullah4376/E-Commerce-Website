const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwriteUserInfoCollectionId: String(import.meta.env.VITE_APPWRITE_USER_INFO_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwriteUserProfileInfoCollectionId: String(import.meta.env.VITE_APPWRITE_USER_PROFILE_INFO_COLLECTION_ID),
    appwriteAPIKey: String(import.meta.env.VITE_APPWRITE_API_KEY)
};


export default conf;