import got from "got";

const USERS_SERVICE_URI = "http://users-service:7101";

export default class UsersService {
  // use object to pass param in function for adding more params if needed without caring about order
  static async createUser({ email, password }) {
    const body = await got
      .post(`${USERS_SERVICE_URI}/users`, { json: { email, password } })
      .json();
    return body;
  }

  static async createUserSession({ email, password }) {
    const body = await got
      .post(`${USERS_SERVICE_URI}/sessions`, { json: { email, password } })
      .json();
    return body;
  }
}