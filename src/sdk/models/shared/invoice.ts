/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export enum InvoiceStatus {
    Pending = "pending",
    Paid = "paid",
    Overdue = "overdue",
}

/**
 * Billing types
 */
export class Invoice extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "amountDue" })
    amountDue: number;

    @SpeakeasyMetadata()
    @Expose({ name: "dueDate" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    dueDate: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    @SpeakeasyMetadata()
    @Expose({ name: "month" })
    month: number;

    @SpeakeasyMetadata()
    @Expose({ name: "pdfUrl" })
    pdfUrl: string;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: InvoiceStatus;

    @SpeakeasyMetadata()
    @Expose({ name: "year" })
    year: number;
}
