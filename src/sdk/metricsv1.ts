/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";
import { SDKConfiguration } from "./sdk";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

/**
 * Operations to get metrics by [process](https://hathora.dev/docs/concepts/hathora-entities#process). We store 72 hours of metrics data.
 */

export class MetricsV1 {
    private sdkConfiguration: SDKConfiguration;

    constructor(sdkConfig: SDKConfiguration) {
        this.sdkConfiguration = sdkConfig;
    }

    /**
     * Get metrics for a [process](https://hathora.dev/docs/concepts/hathora-entities#process) using `appId` and `processId`.
     */
    async getMetrics(
        req: operations.GetMetricsRequest,
        config?: AxiosRequestConfig
    ): Promise<operations.GetMetricsResponse> {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetMetricsRequest(req);
        }

        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = utils.generateURL(
            baseURL,
            "/metrics/v1/{appId}/process/{processId}",
            req,
            this.sdkConfiguration.globals
        );
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        const queryParams: string = utils.serializeQueryParams(req, this.sdkConfiguration.globals);
        headers["Accept"] = "application/json";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const httpRes: AxiosResponse = await client.request({
            validateStatus: () => true,
            url: operationUrl + queryParams,
            method: "get",
            headers: headers,
            responseType: "arraybuffer",
            ...config,
        });

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.GetMetricsResponse = new operations.GetMetricsResponse({
            statusCode: httpRes.status,
            contentType: responseContentType,
            rawResponse: httpRes,
        });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `application/json`)) {
                    res.metricsResponse = utils.objectToClass(
                        JSON.parse(decodedRes),
                        shared.MetricsResponse
                    );
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case httpRes?.status == 404 ||
                httpRes?.status == 422 ||
                (httpRes?.status >= 400 && httpRes?.status < 500) ||
                httpRes?.status == 500 ||
                (httpRes?.status >= 500 && httpRes?.status < 600):
                throw new errors.SDKError(
                    "API error occurred",
                    httpRes.status,
                    decodedRes,
                    httpRes
                );
        }

        return res;
    }
}
