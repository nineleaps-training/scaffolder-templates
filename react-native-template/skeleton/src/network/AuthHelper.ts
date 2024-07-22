export type ITokenHelper = {
  getBearerToken: () => Promise<string>;
};

class AuthHelper {
  private _tokenHelper: ITokenHelper | null = null;

  get tokenHelper(): ITokenHelper | null {
    return this._tokenHelper;
  }

  set tokenHelper(helper: ITokenHelper | null) {
    this._tokenHelper = helper;
  }

  public getBearerToken = async (): Promise<string | null> => {
    if (!this.tokenHelper) {
      return null;
    }
    try {
      const token = await this.tokenHelper.getBearerToken();
      return token;
    } catch (e) {
      return null;
    }
  };
}

const authHelper = new AuthHelper();
export { authHelper as AuthHelper };
