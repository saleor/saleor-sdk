import { USER } from "../../apollo/queries";
import { hookFactory } from "../helpers/hookFactory";
import { hookStateFactory } from "../helpers/hookStateFactory";

export const useAuth = hookFactory("auth");
export const useAuthState = hookStateFactory(USER);
