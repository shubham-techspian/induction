export class LoginDataModel {

  public constructor() { }
  id: number;
  token: string;


  getToken(): string {
    return this.token;
  }

  setToken(token: string) {
    this.token = token;
  }

  getId(): number {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }
}