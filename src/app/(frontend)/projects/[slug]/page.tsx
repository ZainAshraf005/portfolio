import { Github, ScanEye } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const title = slug.split("-").join(" ");
  const { projects } = await import("@/data/data");
  const project = projects.find((project) => project.title === title);
  return (
    <div className="py-6 pt-0 w-full mx-auto text-zinc-200">
      {/* Image */}
      <div className="w-full rounded-3xl overflow-hidden mb-6">
        <Image
          src={project?.image as string}
          alt={project?.title as string}
          width={1200}
          height={600}
          className="w-full md:h-[25rem] object-contain md:object-cover md:object-top"
        />
      </div>

      {/* Title */}
      <h1 className="md:text-4xl text-3xl mt-4 capitalize font-bold mb-2">
        {project?.title}
      </h1>

      {/* Category */}
      <p className="uppercase  md:text-sm text-xs text-gray-500 mb-4">
        {project?.category}
      </p>
      <div className=" w-full flex md:flex-row flex-col gap-5 text-zinc-400 md:items-center p-3 rounded-lg my-7 bg-zinc-900">
        <Link
          href={project?.live as string}
          target="_blank"
          className="flex items-center gap-1"
        >
          <ScanEye className="w-4 h-4" />
          <span>Live Preview</span>
        </Link>
        <Link
          href={project?.github as string}
          target="_blank"
          className="flex items-center gap-1"
        >
          <Github className="w-4 h-4" />
          <span>GitHub</span>
        </Link>
      </div>

      {/* Description */}
      <div className="text-lg mt-7 whitespace-pre-wrap  text-zinc-300 leading-relaxed mb-6">
        <ReactMarkdown>{project?.description}</ReactMarkdown>
      </div>
    </div>
  );
}
