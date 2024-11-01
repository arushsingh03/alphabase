import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { EyeIcon } from "lucide-react";
import { formatDate } from "@/lib/utils";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author: { _id: authorId, name },
    title,
    image,
    description,
    category,
    _id,
  } = post;
  
  return (
    <li className="group bg-slate-800 border border-slate-700 rounded-xl p-6 transition-all duration-300 hover:bg-slate-700">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-400 bg-slate-900 px-4 py-2 rounded-full">
          {formatDate(_createdAt)}
        </span>
        <div className="flex items-center gap-1.5 text-slate-400">
          <EyeIcon className="size-5" />
          <span className="font-medium">{views}</span>
        </div>
      </div>

      <div className="flex items-start justify-between mt-5 gap-4">
        <div className="flex-1 space-y-2">
          <Link href={`/user/${authorId}`} className="hover:opacity-80 transition-opacity">
            <p className="text-slate-300 font-medium">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`} className="block group-hover:opacity-80 transition-opacity">
            <h3 className="text-2xl font-semibold text-white line-clamp-1">
              {title}
            </h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`} className="shrink-0">
          <Image
            src="https://placehold.co/48x48"
            alt="Placeholder"
            width={48}
            height={48}
            className="rounded-full border-2 border-slate-600"
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`} className="block mt-4">
        <p className="text-slate-300 line-clamp-2 text-sm">
          {description}
        </p>

        <div className="mt-4 rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt="placeholder" 
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="flex justify-between items-center gap-3 mt-5">
        <Link 
          href={`/?query=${category.toLowerCase()}`}
          className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
        >
          {category}
        </Link>
        <Button 
          asChild
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-2 text-sm font-medium transition-colors"
        >
          <Link href={`/startup/${_id}`}>
            View Details
          </Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;