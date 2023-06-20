import AddMentorProfile from "@/components/addMentor/AddMentorProfile";
import Layout from "@/components/layouts/Layout";
import { MENTOR_LIST } from "@/components/layouts/constants";
import Image from "next/image";
import { useRouter } from "next/router";


export default function AddMentor() {
    const router = useRouter()

    // console.log(router.pathname)
    return (
        <div className="font-sans bg-zinc-100">
            <Layout>
                <main className="mt-8 px-5">
                    

                    <AddMentorProfile />
                </main>
            </Layout>
        </div>
    )
}
