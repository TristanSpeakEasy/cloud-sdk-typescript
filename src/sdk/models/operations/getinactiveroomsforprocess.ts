/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetInactiveRoomsForProcessSecurity extends SpeakeasyBase {
    @SpeakeasyMetadata({
        data: "security, scheme=true;type=http;subtype=bearer;name=Authorization",
    })
    auth0: string;
}

export class GetInactiveRoomsForProcessRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" })
    appId: string;

    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=processId" })
    processId: string;
}

export class GetInactiveRoomsForProcessResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * Ok
     */
    @SpeakeasyMetadata({ elemType: shared.RoomWithoutAllocations })
    roomWithoutAllocations?: shared.RoomWithoutAllocations[];

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
