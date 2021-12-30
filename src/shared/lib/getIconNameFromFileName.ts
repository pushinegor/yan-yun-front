import { IconName } from "shared/ui";

export const getIconNameFromFileName: (fileName: string) => IconName = (fileName) => {
	const ext = fileName.split(".")[fileName.split(".").length - 1];

	switch (ext) {
		case "xlsx":
			return "excel";
		case "xls":
			return "excel";
		case "pdf":
			return "pdf";
		default:
			return "file";
	}
};
