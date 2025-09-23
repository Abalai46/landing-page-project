import { redirect } from "next/navigation";

export const metadata = {
  title: "กำลังเปลี่ยนเส้นทาง...",
  description: "Redirecting to 3. TIPMSE QR 1",
};

export default function Page() {
  redirect("/3-tipmse-qr-1");
}
