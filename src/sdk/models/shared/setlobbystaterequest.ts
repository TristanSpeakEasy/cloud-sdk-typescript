/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * JSON blob to store metadata for a room. Must be smaller than 1MB.
 */
export class SetLobbyStateRequestState extends SpeakeasyBase {}

export class SetLobbyStateRequest extends SpeakeasyBase {
    /**
     * JSON blob to store metadata for a room. Must be smaller than 1MB.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "state" })
    @Type(() => SetLobbyStateRequestState)
    state: SetLobbyStateRequestState;
}
