"use client";

import { ColumnDef } from "@tanstack/react-table";
import { PaymentType } from "./data";
import { DataTableColumnHeader } from "@/components/common/table/column-header";

export const columns: ColumnDef<PaymentType>[] = [
  {
    accessorKey: "type",
    header: "결제종류",
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "결제명",
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "amount",
    header: "금액",
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "생성일",
    accessorKey: "createdAt",
    accessorFn: (row) => row.createdAt,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="생성일" />
    ),
    cell: ({ row }) => <div>{row.original.createdAt}</div>,
    enableSorting: false,
  },
];
