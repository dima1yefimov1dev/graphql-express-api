import { GraphQLError } from "graphql";
import { AuthService } from "../../auth/auth-service";
import { ProductService } from "../../products/products-service";
import { UsersService } from "../../users/users-service";

export const resolvers = {
  Query: {
    users: () => UsersService.getAllUsers(),

    user: (_, { id }) => UsersService.getUserById(id),

    products: () => ProductService.getAllProducts(),

    product: (_, { id }) => ProductService.getProductById(id),
  },
  
  Mutation: {
    createProduct: async(_, { input }, {auth}) => {
      console.log(auth);
      if (!auth) {
        throw unAuthorizedErr('u need to be authorized');
      }

      return await ProductService.createProduct(input);
    },

    deleteProduct: (_, { id }) => ProductService.deleteProduct(id),

    updateProduct: (_, {id, input}) => ProductService.updateProduct(id, input),

    registration : async (_, {input}, {res}) => {
      const token = await AuthService.registration(input);

      res.cookie('token', token, { httpOnly: true });

      return { token };
    },

    login: async(_, {input}, {res}) => {
      const token = await AuthService.login(input);

      res.cookie('token', token, {httpOnly: true});

      return { token };
    },

    logout: async (_, args, {res}: any) => {
      res.clearCookie('token');
      
      return 'successfully logout';
    }
  }
}; 


function unAuthorizedErr(message: string) {
  return new GraphQLError(message, {
    extensions: {codeL: 'UNAUTHORIZED'}
  })
}