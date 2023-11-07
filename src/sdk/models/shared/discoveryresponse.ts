/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Region } from "./region";
import { Expose } from "class-transformer";

export class DiscoveryResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "host" })
    host: string;

    @SpeakeasyMetadata()
    @Expose({ name: "port" })
    port: number;

    @SpeakeasyMetadata()
    @Expose({ name: "region" })
    region: Region;
}
