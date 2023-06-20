import Layout from "@/components/layouts/Layout";
import { MENTOR_LIST } from "@/components/layouts/constants";
import Image from "next/image";
import { useRouter } from "next/router";


export default function Mentor() {


  const router = useRouter()

  return (
    <div className="font-sans bg-zinc-100">
      <Layout>
        <main className="container px-4 flex flex-col gap-5 mt-5">
          <section className="flex gap-5 items-center">
            <div>
              <input type="text" placeholder="Cari" className="input input-bordered w-full max-w-xs" />
            </div>
            <div>
              <button
                className="bg-blue-800 px-4 py-1 text-zinc-50 rounded-lg flex justify-center items-center
              hover:bg-blue-900"
                onClick={() => router.push('/mentor/add')}
              >
                Tambah Mentor
              </button>
            </div>
          </section>
          <main>

            <div className="overflow-x-auto rounded-xl drop-shadow-md bg-zinc-50">
              <table className="table">
                <thead className="bg-slate-200">
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {MENTOR_LIST.map((mentor, index) => {

                    const mentorStatus = mentor.status === 1 ? "Aktif" : "Cuti"
                    const mentorStatusStyle = mentor.status === 1 ? "bg-green-300 w-fit px-3 rounded-lg" : "bg-red-300 w-fit px-3 rounded-lg"

                    return (
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <Image className="rounded-full h-12 w-12"
                                  src="/profile.jpg"
                                  width={300}
                                  height={300}
                                  alt="admin-profil"
                                  style={{ objectFit: 'cover' }} />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">{mentor.name}</div>
                            </div>
                          </div>
                        </td>
                        <td> {mentor.email}</td>
                        <td>{mentor.role}</td>
                        <td>
                          <p className={mentorStatusStyle}>
                            {mentorStatus}
                          </p>
                        </td>
                        <td>
                          <details className="dropdown dropdown-left dropdown-end">
                            <summary className="m-1 btn ">...</summary>
                            <ul className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 z-50 relative">
                              <li><a className="hover:bg-red-500 hover:text-zinc-50">Hapus</a></li>
                              <li><a>Lainnya..</a></li>
                            </ul>
                          </details>

                        </td>
                      </tr>

                    )
                  })}

                </tbody>
                {/* foot */}

              </table>
            </div>
          </main>
        </main>
      </Layout>
    </div>
  )
}
