import { UserApi } from "./_generated";
import { BackApiConfig } from "./config";

export class BackApi {
	constructor(private config: BackApiConfig = new BackApiConfig()) {}

	readonly user = new UserApi(this.config);
}
