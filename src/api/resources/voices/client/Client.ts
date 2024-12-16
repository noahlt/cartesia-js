/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Cartesia from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";
import * as fs from "fs";
import { Blob } from "buffer";

export declare namespace Voices {
    interface Options {
        environment?: core.Supplier<environments.CartesiaEnvironment | string>;
        apiKey?: core.Supplier<string | undefined>;
        /** Override the Cartesia-Version header */
        cartesiaVersion?: "2024-06-10";
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the Cartesia-Version header */
        cartesiaVersion?: "2024-06-10";
    }
}

export class Voices {
    constructor(protected readonly _options: Voices.Options = {}) {}

    /**
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.voices.list()
     */
    public async list(requestOptions?: Voices.RequestOptions): Promise<Cartesia.Voice[]> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CartesiaEnvironment.Production,
                "/voices/"
            ),
            method: "GET",
            headers: {
                "Cartesia-Version": requestOptions?.cartesiaVersion ?? this._options?.cartesiaVersion ?? "2024-06-10",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@cartesia/cartesia-js",
                "X-Fern-SDK-Version": "2.1.1",
                "User-Agent": "@cartesia/cartesia-js/2.1.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.voices.list.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CartesiaError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CartesiaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CartesiaTimeoutError();
            case "unknown":
                throw new errors.CartesiaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {Cartesia.CreateVoiceRequest} request
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.voices.create({
     *         name: "string",
     *         description: "string",
     *         embedding: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
     *         language: "en",
     *         baseVoiceId: "string"
     *     })
     */
    public async create(
        request: Cartesia.CreateVoiceRequest,
        requestOptions?: Voices.RequestOptions
    ): Promise<Cartesia.Voice> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CartesiaEnvironment.Production,
                "/voices/"
            ),
            method: "POST",
            headers: {
                "Cartesia-Version": requestOptions?.cartesiaVersion ?? this._options?.cartesiaVersion ?? "2024-06-10",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@cartesia/cartesia-js",
                "X-Fern-SDK-Version": "2.1.1",
                "User-Agent": "@cartesia/cartesia-js/2.1.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.CreateVoiceRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Voice.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CartesiaError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CartesiaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CartesiaTimeoutError();
            case "unknown":
                throw new errors.CartesiaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {Cartesia.VoiceId} id
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.voices.delete("string")
     */
    public async delete(id: Cartesia.VoiceId, requestOptions?: Voices.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CartesiaEnvironment.Production,
                `/voices/${encodeURIComponent(serializers.VoiceId.jsonOrThrow(id))}`
            ),
            method: "DELETE",
            headers: {
                "Cartesia-Version": requestOptions?.cartesiaVersion ?? this._options?.cartesiaVersion ?? "2024-06-10",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@cartesia/cartesia-js",
                "X-Fern-SDK-Version": "2.1.1",
                "User-Agent": "@cartesia/cartesia-js/2.1.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CartesiaError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CartesiaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CartesiaTimeoutError();
            case "unknown":
                throw new errors.CartesiaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {Cartesia.VoiceId} id
     * @param {Cartesia.UpdateVoiceRequest} request
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.voices.update("string", {
     *         name: "string",
     *         description: "string"
     *     })
     */
    public async update(
        id: Cartesia.VoiceId,
        request: Cartesia.UpdateVoiceRequest,
        requestOptions?: Voices.RequestOptions
    ): Promise<Cartesia.Voice> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CartesiaEnvironment.Production,
                `/voices/${encodeURIComponent(serializers.VoiceId.jsonOrThrow(id))}`
            ),
            method: "PATCH",
            headers: {
                "Cartesia-Version": requestOptions?.cartesiaVersion ?? this._options?.cartesiaVersion ?? "2024-06-10",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@cartesia/cartesia-js",
                "X-Fern-SDK-Version": "2.1.1",
                "User-Agent": "@cartesia/cartesia-js/2.1.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.UpdateVoiceRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Voice.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CartesiaError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CartesiaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CartesiaTimeoutError();
            case "unknown":
                throw new errors.CartesiaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {Cartesia.VoiceId} id
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.voices.get("string")
     */
    public async get(id: Cartesia.VoiceId, requestOptions?: Voices.RequestOptions): Promise<Cartesia.Voice> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CartesiaEnvironment.Production,
                `/voices/${encodeURIComponent(serializers.VoiceId.jsonOrThrow(id))}`
            ),
            method: "GET",
            headers: {
                "Cartesia-Version": requestOptions?.cartesiaVersion ?? this._options?.cartesiaVersion ?? "2024-06-10",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@cartesia/cartesia-js",
                "X-Fern-SDK-Version": "2.1.1",
                "User-Agent": "@cartesia/cartesia-js/2.1.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.Voice.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CartesiaError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CartesiaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CartesiaTimeoutError();
            case "unknown":
                throw new errors.CartesiaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {Cartesia.LocalizeVoiceRequest} request
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.voices.localize({
     *         embedding: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
     *         language: "en",
     *         originalSpeakerGender: "male",
     *         dialect: "au"
     *     })
     */
    public async localize(
        request: Cartesia.LocalizeVoiceRequest,
        requestOptions?: Voices.RequestOptions
    ): Promise<Cartesia.EmbeddingResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CartesiaEnvironment.Production,
                "/voices/localize"
            ),
            method: "POST",
            headers: {
                "Cartesia-Version": requestOptions?.cartesiaVersion ?? this._options?.cartesiaVersion ?? "2024-06-10",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@cartesia/cartesia-js",
                "X-Fern-SDK-Version": "2.1.1",
                "User-Agent": "@cartesia/cartesia-js/2.1.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.LocalizeVoiceRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.EmbeddingResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CartesiaError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CartesiaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CartesiaTimeoutError();
            case "unknown":
                throw new errors.CartesiaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {Cartesia.MixVoicesRequest} request
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.voices.mix({
     *         voices: [{
     *                 id: "string",
     *                 weight: 1.1
     *             }]
     *     })
     */
    public async mix(
        request: Cartesia.MixVoicesRequest,
        requestOptions?: Voices.RequestOptions
    ): Promise<Cartesia.EmbeddingResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CartesiaEnvironment.Production,
                "/voices/mix"
            ),
            method: "POST",
            headers: {
                "Cartesia-Version": requestOptions?.cartesiaVersion ?? this._options?.cartesiaVersion ?? "2024-06-10",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@cartesia/cartesia-js",
                "X-Fern-SDK-Version": "2.1.1",
                "User-Agent": "@cartesia/cartesia-js/2.1.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
            },
            contentType: "application/json",
            requestType: "json",
            body: serializers.MixVoicesRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.EmbeddingResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CartesiaError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CartesiaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CartesiaTimeoutError();
            case "unknown":
                throw new errors.CartesiaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Clone a voice from an audio clip. This endpoint has two modes, stability and similarity.
     *
     * Similarity mode clones are more similar to the source clip, but may reproduce background noise. For these, use an audio clip about 5 seconds long.
     *
     * Stability mode clones are more stable, but may not sound as similar to the source clip. For these, use an audio clip 10-20 seconds long.
     *
     * @param {File | fs.ReadStream | Blob} clip
     * @param {Cartesia.CloneVoiceRequest} request
     * @param {Voices.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.voices.clone(fs.createReadStream("/path/to/your/file"), {
     *         name: "A high-stability cloned voice",
     *         description: "Copied from Cartesia docs",
     *         mode: "stability",
     *         language: "en",
     *         enhance: true
     *     })
     *
     * @example
     *     await client.voices.clone(fs.createReadStream("/path/to/your/file"), {
     *         name: "A high-similarity cloned voice",
     *         description: "Copied from Cartesia docs",
     *         mode: "similarity",
     *         language: "en",
     *         transcript: "A transcript of the words spoken in the audio clip.",
     *         enhance: false
     *     })
     */
    public async clone(
        clip: File | fs.ReadStream | Blob,
        request: Cartesia.CloneVoiceRequest,
        requestOptions?: Voices.RequestOptions
    ): Promise<Cartesia.VoiceMetadata> {
        const _request = await core.newFormData();
        await _request.appendFile("clip", clip);
        await _request.append("name", request.name);
        if (request.description != null) {
            await _request.append("description", request.description);
        }

        await _request.append("language", request.language);
        await _request.append("mode", request.mode);
        await _request.append("enhance", request.enhance.toString());
        if (request.transcript != null) {
            await _request.append("transcript", request.transcript);
        }

        const _maybeEncodedRequest = await _request.getRequest();
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.CartesiaEnvironment.Production,
                "/voices/clone"
            ),
            method: "POST",
            headers: {
                "Cartesia-Version": requestOptions?.cartesiaVersion ?? this._options?.cartesiaVersion ?? "2024-06-10",
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@cartesia/cartesia-js",
                "X-Fern-SDK-Version": "2.1.1",
                "User-Agent": "@cartesia/cartesia-js/2.1.1",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...(await this._getCustomAuthorizationHeaders()),
                ..._maybeEncodedRequest.headers,
            },
            requestType: "file",
            duplex: _maybeEncodedRequest.duplex,
            body: _maybeEncodedRequest.body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return serializers.VoiceMetadata.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.CartesiaError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.CartesiaError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.CartesiaTimeoutError();
            case "unknown":
                throw new errors.CartesiaError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { "X-API-Key": apiKeyValue };
    }
}
