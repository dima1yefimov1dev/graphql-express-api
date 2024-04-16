import { User } from "./user-model";

export const UsersService = new class {
  public async getAllUsers() {
    const users = await User.find();

    return users;
  }

  public async getUserById(id: string) {
    return await User.findById(id);
  }
}