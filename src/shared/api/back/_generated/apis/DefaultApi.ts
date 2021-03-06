/* tslint:disable */
/* eslint-disable */
/**
 * Yan Yun — магазин китайского чая
 * Документация REST API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from "../runtime";
import useSWR, { SWRConfiguration } from "swr";

export interface CreateRequest {
	parentCategoryId: string;
}

export interface CreateProductRequest {
	categoryId: string;
}

export interface DeleteCategoryRequest {
	id: string;
}

export interface DeleteCharacteristicRequest {
	id: string;
}

export interface DeleteProductRequest {
	id: string;
}

export interface EditCategoryRequest {
	id: string;
}

export interface EditCharacteristicRequest {
	id: string;
}

export interface EditProductRequest {
	id: string;
}

export interface GetCategoriesByParentIdRequest {
	parentCategoryId: string;
}

export interface GetCategoryByIdRequest {
	id: string;
}

export interface GetProductsRequest {
	categoryId: string;
}

/**
 *
 */
export class DefaultApi extends runtime.BaseAPI {
	/**
	 */
	private async createRaw(requestParameters: CreateRequest): Promise<runtime.ApiResponse<object>> {
		this.createValidation(requestParameters);
		const context = this.createContext(requestParameters);
		const response = await this.request(context);

		return new runtime.JSONApiResponse<any>(response);
	}

	/**
	 */
	private createValidation(requestParameters: CreateRequest) {
		if (requestParameters.parentCategoryId === null || requestParameters.parentCategoryId === undefined) {
			throw new runtime.RequiredError(
				"parentCategoryId",
				"Required parameter requestParameters.parentCategoryId was null or undefined when calling create."
			);
		}
	}

	/**
	 */
	private createContext(requestParameters: CreateRequest): runtime.RequestOpts {
		const queryParameters: any = {};

		if (requestParameters.parentCategoryId !== undefined) {
			queryParameters["parentCategoryId"] = requestParameters.parentCategoryId;
		}

		const headerParameters: runtime.HTTPHeaders = {};

		return {
			path: `/api/category`,
			method: "POST",
			headers: headerParameters,
			query: queryParameters,
		};
	}

	/**
	 */
	create = async (parentCategoryId: string): Promise<object> => {
		const response = await this.createRaw({ parentCategoryId: parentCategoryId });
		return await response.value();
	};

	/**
	 */
	private async createCharacteristicRaw(): Promise<runtime.ApiResponse<object>> {
		this.createCharacteristicValidation();
		const context = this.createCharacteristicContext();
		const response = await this.request(context);

		return new runtime.JSONApiResponse<any>(response);
	}

	/**
	 */
	private createCharacteristicValidation() {}

	/**
	 */
	private createCharacteristicContext(): runtime.RequestOpts {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		return {
			path: `/api/characteristic`,
			method: "POST",
			headers: headerParameters,
			query: queryParameters,
		};
	}

	/**
	 */
	createCharacteristic = async (): Promise<object> => {
		const response = await this.createCharacteristicRaw();
		return await response.value();
	};

	/**
	 */
	private async createProductRaw(requestParameters: CreateProductRequest): Promise<runtime.ApiResponse<object>> {
		this.createProductValidation(requestParameters);
		const context = this.createProductContext(requestParameters);
		const response = await this.request(context);

		return new runtime.JSONApiResponse<any>(response);
	}

	/**
	 */
	private createProductValidation(requestParameters: CreateProductRequest) {
		if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
			throw new runtime.RequiredError(
				"categoryId",
				"Required parameter requestParameters.categoryId was null or undefined when calling createProduct."
			);
		}
	}

	/**
	 */
	private createProductContext(requestParameters: CreateProductRequest): runtime.RequestOpts {
		const queryParameters: any = {};

		if (requestParameters.categoryId !== undefined) {
			queryParameters["categoryId"] = requestParameters.categoryId;
		}

		const headerParameters: runtime.HTTPHeaders = {};

		return {
			path: `/api/product`,
			method: "POST",
			headers: headerParameters,
			query: queryParameters,
		};
	}

	/**
	 */
	createProduct = async (categoryId: string): Promise<object> => {
		const response = await this.createProductRaw({ categoryId: categoryId });
		return await response.value();
	};

	/**
	 */
	private async deleteCategoryRaw(requestParameters: DeleteCategoryRequest): Promise<runtime.ApiResponse<void>> {
		this.deleteCategoryValidation(requestParameters);
		const context = this.deleteCategoryContext(requestParameters);
		const response = await this.request(context);

		return new runtime.VoidApiResponse(response);
	}

	/**
	 */
	private deleteCategoryValidation(requestParameters: DeleteCategoryRequest) {
		if (requestParameters.id === null || requestParameters.id === undefined) {
			throw new runtime.RequiredError(
				"id",
				"Required parameter requestParameters.id was null or undefined when calling deleteCategory."
			);
		}
	}

	/**
	 */
	private deleteCategoryContext(requestParameters: DeleteCategoryRequest): runtime.RequestOpts {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		return {
			path: `/api/category/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
			method: "DELETE",
			headers: headerParameters,
			query: queryParameters,
		};
	}

	/**
	 */
	deleteCategory = async (id: string): Promise<void> => {
		await this.deleteCategoryRaw({ id: id });
	};

	useDeleteCategory(id: string, config?: SWRConfiguration<void, Error>) {
		let valid = true;

		if (id === null || id === undefined || Number.isNaN(id)) {
			valid = false;
		}

		const context = this.deleteCategoryContext({ id: id! });
		return useSWR(JSON.stringify(context), valid ? () => this.deleteCategory(id!) : null, config);
	}

	/**
	 */
	private async deleteCharacteristicRaw(
		requestParameters: DeleteCharacteristicRequest
	): Promise<runtime.ApiResponse<void>> {
		this.deleteCharacteristicValidation(requestParameters);
		const context = this.deleteCharacteristicContext(requestParameters);
		const response = await this.request(context);

		return new runtime.VoidApiResponse(response);
	}

	/**
	 */
	private deleteCharacteristicValidation(requestParameters: DeleteCharacteristicRequest) {
		if (requestParameters.id === null || requestParameters.id === undefined) {
			throw new runtime.RequiredError(
				"id",
				"Required parameter requestParameters.id was null or undefined when calling deleteCharacteristic."
			);
		}
	}

	/**
	 */
	private deleteCharacteristicContext(requestParameters: DeleteCharacteristicRequest): runtime.RequestOpts {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		return {
			path: `/api/characteristic/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
			method: "DELETE",
			headers: headerParameters,
			query: queryParameters,
		};
	}

	/**
	 */
	deleteCharacteristic = async (id: string): Promise<void> => {
		await this.deleteCharacteristicRaw({ id: id });
	};

	useDeleteCharacteristic(id: string, config?: SWRConfiguration<void, Error>) {
		let valid = true;

		if (id === null || id === undefined || Number.isNaN(id)) {
			valid = false;
		}

		const context = this.deleteCharacteristicContext({ id: id! });
		return useSWR(JSON.stringify(context), valid ? () => this.deleteCharacteristic(id!) : null, config);
	}

	/**
	 */
	private async deleteProductRaw(requestParameters: DeleteProductRequest): Promise<runtime.ApiResponse<void>> {
		this.deleteProductValidation(requestParameters);
		const context = this.deleteProductContext(requestParameters);
		const response = await this.request(context);

		return new runtime.VoidApiResponse(response);
	}

	/**
	 */
	private deleteProductValidation(requestParameters: DeleteProductRequest) {
		if (requestParameters.id === null || requestParameters.id === undefined) {
			throw new runtime.RequiredError(
				"id",
				"Required parameter requestParameters.id was null or undefined when calling deleteProduct."
			);
		}
	}

	/**
	 */
	private deleteProductContext(requestParameters: DeleteProductRequest): runtime.RequestOpts {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		return {
			path: `/api/product/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
			method: "DELETE",
			headers: headerParameters,
			query: queryParameters,
		};
	}

	/**
	 */
	deleteProduct = async (id: string): Promise<void> => {
		await this.deleteProductRaw({ id: id });
	};

	useDeleteProduct(id: string, config?: SWRConfiguration<void, Error>) {
		let valid = true;

		if (id === null || id === undefined || Number.isNaN(id)) {
			valid = false;
		}

		const context = this.deleteProductContext({ id: id! });
		return useSWR(JSON.stringify(context), valid ? () => this.deleteProduct(id!) : null, config);
	}

	/**
	 */
	private async editCategoryRaw(requestParameters: EditCategoryRequest): Promise<runtime.ApiResponse<void>> {
		this.editCategoryValidation(requestParameters);
		const context = this.editCategoryContext(requestParameters);
		const response = await this.request(context);

		return new runtime.VoidApiResponse(response);
	}

	/**
	 */
	private editCategoryValidation(requestParameters: EditCategoryRequest) {
		if (requestParameters.id === null || requestParameters.id === undefined) {
			throw new runtime.RequiredError(
				"id",
				"Required parameter requestParameters.id was null or undefined when calling editCategory."
			);
		}
	}

	/**
	 */
	private editCategoryContext(requestParameters: EditCategoryRequest): runtime.RequestOpts {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		return {
			path: `/api/category/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
			method: "PUT",
			headers: headerParameters,
			query: queryParameters,
		};
	}

	/**
	 */
	editCategory = async (id: string): Promise<void> => {
		await this.editCategoryRaw({ id: id });
	};

	/**
	 */
	private async editCharacteristicRaw(
		requestParameters: EditCharacteristicRequest
	): Promise<runtime.ApiResponse<void>> {
		this.editCharacteristicValidation(requestParameters);
		const context = this.editCharacteristicContext(requestParameters);
		const response = await this.request(context);

		return new runtime.VoidApiResponse(response);
	}

	/**
	 */
	private editCharacteristicValidation(requestParameters: EditCharacteristicRequest) {
		if (requestParameters.id === null || requestParameters.id === undefined) {
			throw new runtime.RequiredError(
				"id",
				"Required parameter requestParameters.id was null or undefined when calling editCharacteristic."
			);
		}
	}

	/**
	 */
	private editCharacteristicContext(requestParameters: EditCharacteristicRequest): runtime.RequestOpts {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		return {
			path: `/api/characteristic/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
			method: "PUT",
			headers: headerParameters,
			query: queryParameters,
		};
	}

	/**
	 */
	editCharacteristic = async (id: string): Promise<void> => {
		await this.editCharacteristicRaw({ id: id });
	};

	/**
	 */
	private async editProductRaw(requestParameters: EditProductRequest): Promise<runtime.ApiResponse<void>> {
		this.editProductValidation(requestParameters);
		const context = this.editProductContext(requestParameters);
		const response = await this.request(context);

		return new runtime.VoidApiResponse(response);
	}

	/**
	 */
	private editProductValidation(requestParameters: EditProductRequest) {
		if (requestParameters.id === null || requestParameters.id === undefined) {
			throw new runtime.RequiredError(
				"id",
				"Required parameter requestParameters.id was null or undefined when calling editProduct."
			);
		}
	}

	/**
	 */
	private editProductContext(requestParameters: EditProductRequest): runtime.RequestOpts {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		return {
			path: `/api/product/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
			method: "PUT",
			headers: headerParameters,
			query: queryParameters,
		};
	}

	/**
	 */
	editProduct = async (id: string): Promise<void> => {
		await this.editProductRaw({ id: id });
	};

	/**
	 */
	private async getCategoriesByParentIdRaw(
		requestParameters: GetCategoriesByParentIdRequest
	): Promise<runtime.ApiResponse<Array<object>>> {
		this.getCategoriesByParentIdValidation(requestParameters);
		const context = this.getCategoriesByParentIdContext(requestParameters);
		const response = await this.request(context);

		return new runtime.JSONApiResponse<any>(response);
	}

	/**
	 */
	private getCategoriesByParentIdValidation(requestParameters: GetCategoriesByParentIdRequest) {
		if (requestParameters.parentCategoryId === null || requestParameters.parentCategoryId === undefined) {
			throw new runtime.RequiredError(
				"parentCategoryId",
				"Required parameter requestParameters.parentCategoryId was null or undefined when calling getCategoriesByParentId."
			);
		}
	}

	/**
	 */
	private getCategoriesByParentIdContext(requestParameters: GetCategoriesByParentIdRequest): runtime.RequestOpts {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		return {
			path: `/api/category/sub-categories/{parentCategoryId}`.replace(
				`{${"parentCategoryId"}}`,
				encodeURIComponent(String(requestParameters.parentCategoryId))
			),
			method: "GET",
			headers: headerParameters,
			query: queryParameters,
		};
	}

	/**
	 */
	getCategoriesByParentId = async (parentCategoryId: string): Promise<Array<object>> => {
		const response = await this.getCategoriesByParentIdRaw({ parentCategoryId: parentCategoryId });
		return await response.value();
	};

	useGetCategoriesByParentId(parentCategoryId: string, config?: SWRConfiguration<Array<object>, Error>) {
		let valid = true;

		if (parentCategoryId === null || parentCategoryId === undefined || Number.isNaN(parentCategoryId)) {
			valid = false;
		}

		const context = this.getCategoriesByParentIdContext({ parentCategoryId: parentCategoryId! });
		return useSWR(
			JSON.stringify(context),
			valid ? () => this.getCategoriesByParentId(parentCategoryId!) : null,
			config
		);
	}

	/**
	 */
	private async getCategoryByIdRaw(requestParameters: GetCategoryByIdRequest): Promise<runtime.ApiResponse<object>> {
		this.getCategoryByIdValidation(requestParameters);
		const context = this.getCategoryByIdContext(requestParameters);
		const response = await this.request(context);

		return new runtime.JSONApiResponse<any>(response);
	}

	/**
	 */
	private getCategoryByIdValidation(requestParameters: GetCategoryByIdRequest) {
		if (requestParameters.id === null || requestParameters.id === undefined) {
			throw new runtime.RequiredError(
				"id",
				"Required parameter requestParameters.id was null or undefined when calling getCategoryById."
			);
		}
	}

	/**
	 */
	private getCategoryByIdContext(requestParameters: GetCategoryByIdRequest): runtime.RequestOpts {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		return {
			path: `/api/category/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
			method: "GET",
			headers: headerParameters,
			query: queryParameters,
		};
	}

	/**
	 */
	getCategoryById = async (id: string): Promise<object> => {
		const response = await this.getCategoryByIdRaw({ id: id });
		return await response.value();
	};

	useGetCategoryById(id: string, config?: SWRConfiguration<object, Error>) {
		let valid = true;

		if (id === null || id === undefined || Number.isNaN(id)) {
			valid = false;
		}

		const context = this.getCategoryByIdContext({ id: id! });
		return useSWR(JSON.stringify(context), valid ? () => this.getCategoryById(id!) : null, config);
	}

	/**
	 */
	private async getCharacteristicsRaw(): Promise<runtime.ApiResponse<Array<object>>> {
		this.getCharacteristicsValidation();
		const context = this.getCharacteristicsContext();
		const response = await this.request(context);

		return new runtime.JSONApiResponse<any>(response);
	}

	/**
	 */
	private getCharacteristicsValidation() {}

	/**
	 */
	private getCharacteristicsContext(): runtime.RequestOpts {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		return {
			path: `/api/characteristic`,
			method: "GET",
			headers: headerParameters,
			query: queryParameters,
		};
	}

	/**
	 */
	getCharacteristics = async (): Promise<Array<object>> => {
		const response = await this.getCharacteristicsRaw();
		return await response.value();
	};

	useGetCharacteristics(config?: SWRConfiguration<Array<object>, Error>) {
		let valid = true;

		const context = this.getCharacteristicsContext();
		return useSWR(JSON.stringify(context), valid ? () => this.getCharacteristics() : null, config);
	}

	/**
	 */
	private async getProductsRaw(requestParameters: GetProductsRequest): Promise<runtime.ApiResponse<Array<object>>> {
		this.getProductsValidation(requestParameters);
		const context = this.getProductsContext(requestParameters);
		const response = await this.request(context);

		return new runtime.JSONApiResponse<any>(response);
	}

	/**
	 */
	private getProductsValidation(requestParameters: GetProductsRequest) {
		if (requestParameters.categoryId === null || requestParameters.categoryId === undefined) {
			throw new runtime.RequiredError(
				"categoryId",
				"Required parameter requestParameters.categoryId was null or undefined when calling getProducts."
			);
		}
	}

	/**
	 */
	private getProductsContext(requestParameters: GetProductsRequest): runtime.RequestOpts {
		const queryParameters: any = {};

		if (requestParameters.categoryId !== undefined) {
			queryParameters["categoryId"] = requestParameters.categoryId;
		}

		const headerParameters: runtime.HTTPHeaders = {};

		return {
			path: `/api/product`,
			method: "GET",
			headers: headerParameters,
			query: queryParameters,
		};
	}

	/**
	 */
	getProducts = async (categoryId: string): Promise<Array<object>> => {
		const response = await this.getProductsRaw({ categoryId: categoryId });
		return await response.value();
	};

	useGetProducts(categoryId: string, config?: SWRConfiguration<Array<object>, Error>) {
		let valid = true;

		if (categoryId === null || categoryId === undefined || Number.isNaN(categoryId)) {
			valid = false;
		}

		const context = this.getProductsContext({ categoryId: categoryId! });
		return useSWR(JSON.stringify(context), valid ? () => this.getProducts(categoryId!) : null, config);
	}

	/**
	 */
	private async getTopCategoriesRaw(): Promise<runtime.ApiResponse<Array<object>>> {
		this.getTopCategoriesValidation();
		const context = this.getTopCategoriesContext();
		const response = await this.request(context);

		return new runtime.JSONApiResponse<any>(response);
	}

	/**
	 */
	private getTopCategoriesValidation() {}

	/**
	 */
	private getTopCategoriesContext(): runtime.RequestOpts {
		const queryParameters: any = {};

		const headerParameters: runtime.HTTPHeaders = {};

		return {
			path: `/api/category`,
			method: "GET",
			headers: headerParameters,
			query: queryParameters,
		};
	}

	/**
	 */
	getTopCategories = async (): Promise<Array<object>> => {
		const response = await this.getTopCategoriesRaw();
		return await response.value();
	};

	useGetTopCategories(config?: SWRConfiguration<Array<object>, Error>) {
		let valid = true;

		const context = this.getTopCategoriesContext();
		return useSWR(JSON.stringify(context), valid ? () => this.getTopCategories() : null, config);
	}
}
