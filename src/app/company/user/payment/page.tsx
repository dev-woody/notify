import { CustomTable } from "@/components/common/table";
import { columns } from "./columns";
import { payments } from "./data";

export default function Payment() {
  return <CustomTable columns={columns} data={payments} />;
}
