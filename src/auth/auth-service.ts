import { ICreateUser, ILogin } from "../lib/types";
import * as bcrypt from  'bcrypt';
import { User } from "../users/user-model";
import { JwtService } from "../jwt/jwt-service";
import { error } from "console";

export const AuthService = new class {
  public async registration(input: ICreateUser) {
    const { password } = input;
    const hashedPassword = await this.hashPassword(password);
    const newUser = await User.create({...input, password: hashedPassword});
    const {_id, username} = newUser;
    const payload = {id: _id, username};

    const token = JwtService.generateToken(payload);

    return token;
  } 

  public async hashPassword(password: string) {
    return await bcrypt.hash(password, +process.env.SALT);
  }

  public async login(input: ILogin) {
    const {username, password} = input;
    
    const user = await User.findOne({ username });
    const checkPassword = await bcrypt.compare(password, user.password);

    if (!user || !checkPassword) {
      throw new error(`something wrong`);
    }

    const payload = {id: user._id, username};

    return JwtService.generateToken(payload);
  }
}