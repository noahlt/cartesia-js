/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as Cartesia from "../../../../api/index";
import * as core from "../../../../core";
import { VoiceId } from "../../voices/types/VoiceId";
import { Controls } from "./Controls";

export const TtsRequestIdSpecifier: core.serialization.ObjectSchema<
    serializers.TtsRequestIdSpecifier.Raw,
    Cartesia.TtsRequestIdSpecifier
> = core.serialization.object({
    mode: core.serialization.stringLiteral("id"),
    id: VoiceId,
    experimentalControls: core.serialization.property("__experimental_controls", Controls.optional()),
});

export declare namespace TtsRequestIdSpecifier {
    interface Raw {
        mode: "id";
        id: VoiceId.Raw;
        __experimental_controls?: Controls.Raw | null;
    }
}
