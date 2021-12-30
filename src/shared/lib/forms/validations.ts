export const startByLetterReg = /^([A-zА-яЁё])/;
export const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,10})$/;
export const validate = {
	notEmpty: (value: string) => !!value.length,
	phone: (value: string) => value.replace(/[^\d]/g, "").length === 11,
	email: (value: string) => value.length && emailReg.test(value.toLocaleLowerCase()),
};
