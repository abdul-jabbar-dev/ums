import MyBreadcrumb from "@/components/utils/Breadcrumb/MyBreadcrumb";
import { redirect } from "next/navigation";


export default function Home() {
  redirect('/profile')
  return (
    <main>
      Home
    </main>
  )
}
