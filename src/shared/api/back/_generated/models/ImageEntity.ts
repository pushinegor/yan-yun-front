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

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface ImageEntity
 */
export interface ImageEntity {
	/**
	 *
	 * @type {string}
	 * @memberof ImageEntity
	 */
	id: string;
	/**
	 *
	 * @type {string}
	 * @memberof ImageEntity
	 */
	path: string;
}

export function ImageEntityFromJSON(json: any): ImageEntity {
	return ImageEntityFromJSONTyped(json, false);
}

export function ImageEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ImageEntity {
	if (json === undefined || json === null) {
		return json;
	}
	return {
		id: json["id"],
		path: json["path"],
	};
}

export function ImageEntityToJSON(value?: ImageEntity | null): any {
	if (value === undefined) {
		return null;
	}
	if (value === null) {
		return null;
	}
	return {
		id: value.id === undefined ? undefined : value.id,
		path: value.path === undefined ? undefined : value.path,
	};
}