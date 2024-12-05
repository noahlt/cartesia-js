/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { ApiStatus } from "./api/resources/apiStatus/client/Client";
import { Tts } from "./api/resources/tts/client/Client";
import { VoiceChanger } from "./api/resources/voiceChanger/client/Client";
import { Voices } from "./api/resources/voices/client/Client";

export declare namespace CartesiaClient {
    interface Options {
        environment?: core.Supplier<environments.CartesiaEnvironment | string>;
        apiKeyHeader?: core.Supplier<string | undefined>;
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

export class CartesiaClient {
    constructor(protected readonly _options: CartesiaClient.Options = {}) {}

    protected _apiStatus: ApiStatus | undefined;

    public get apiStatus(): ApiStatus {
        return (this._apiStatus ??= new ApiStatus(this._options));
    }

    protected _tts: Tts | undefined;

    public get tts(): Tts {
        return (this._tts ??= new Tts(this._options));
    }

    protected _voiceChanger: VoiceChanger | undefined;

    public get voiceChanger(): VoiceChanger {
        return (this._voiceChanger ??= new VoiceChanger(this._options));
    }

    protected _voices: Voices | undefined;

    public get voices(): Voices {
        return (this._voices ??= new Voices(this._options));
    }
}
