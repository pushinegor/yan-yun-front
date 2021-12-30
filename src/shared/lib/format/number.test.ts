import formatNumber from "shared/lib/format/number";

describe("[formatNumber] lib/format/number", () => {
	it("empty", () => {
		expect(formatNumber("")).toBe("");
		expect(formatNumber(NaN)).toBe("");
	});

	it("zero", () => {
		expect(formatNumber("0")).toBe("0");
		expect(formatNumber(0)).toBe("0");
	});

	it("remove last zeros", () => {
		expect(formatNumber("0.000")).toBe("0");
		expect(formatNumber("0.123000")).toBe("0.123");
		expect(formatNumber("7000")).toBe("7000");
		expect(formatNumber("7000.0000")).toBe("7000");
		expect(formatNumber("7000.1230000")).toBe("7000.123");
	});
});
