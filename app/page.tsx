import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <h1 className="my-4 text-2xl font-semibold">Welcome [name], you're logged in as [role]</h1>
      <div>
        <h2 className="my-2 text-lg">Choose your request</h2>
        <div>
          <div className="flex items-center my-4">
            <Image src="/assets/grievance.jpg" alt="" height={200} width={200} />
            <Link href={'/file-grievance'} className="ml-4 px-8 py-2 rounded-md bg-blue-700 text-white">File a grievance</Link>
          </div>
          <div className="flex items-center my-4">
            <Image src="/assets/checkapplicationstatus.png" alt="" height={200} width={200} />
            <Link href={'/grievance-status'} className="ml-4 px-8 py-2 rounded-md bg-blue-700 text-white">View your application status</Link>
          </div>
          <div className="flex items-center my-4">
            <Image src="/assets/messages.png" alt="" height={200} width={200} />
            <Link href={'/messages'} className="ml-4 px-8 py-2 rounded-md bg-blue-700 text-white">Messages</Link>
          </div>
          <div className="flex items-center my-8">
            <Image src="/" alt="" height={10} width={200} />
            <Link href={'/posts'} className="ml-4 px-8 py-2 rounded-md bg-blue-700 text-white">Threaded Posts</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
