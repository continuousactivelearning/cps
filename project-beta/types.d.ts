declare module '../models/User' {
  interface IUser {
    _id: any;
    name: string;
    email: string;
    password: string;
    matchPassword(password: string): Promise<boolean>;
  }
  
  interface UserModel {
    findOne(query: any): Promise<IUser | null>;
  }
  
  const User: UserModel;
  export = User;
}