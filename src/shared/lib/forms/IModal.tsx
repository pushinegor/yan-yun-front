import React from "react";

export type IModal<Request extends any = {}, Response extends any = any> = {
	isOpen?: boolean;
	close: () => void;
	onSuccess?: (data: Response, values: Request) => void;
};
