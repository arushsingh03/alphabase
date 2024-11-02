import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { EyeIcon } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { Author, Startup } from "@/sanity/types";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    image,
    description,
    category,
    _id,
  } = post;

  return (
    <li className="startup-card">
      <div className="flex-between">
        <span className="startup-card_date text-emerald-800">
          {formatDate(_createdAt)}
        </span>
        <div className="flex items-center gap-1.5 text-emerald-50">
          <EyeIcon className="size-5" />
          <span className="font-medium">{views}</span>
        </div>
      </div>

      <div className="flex items-start justify-between mt-5 gap-4">
        <div className="flex-1 space-y-2">
          <Link
            href={`/user/${author?._id}`}
            className="hover:opacity-80 transition-opacity"
          >
            <p className="text-16-medium text-emerald-50">{author?.name}</p>
          </Link>
          <Link
            href={`/startup/${_id}`}
            className="block group-hover:opacity-80 transition-opacity"
          >
            <h3 className="text-24-black text-emerald-50 line-clamp-1">
              {title}
            </h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`} className="shrink-0">
          <Image
            src="https://placehold.co/48x48"
            alt="Placeholder"
            width={48}
            height={48}
            className="profile_image"
          />
        </Link>
      </div>

      <Link href={`/startup/${_id}`} className="block mt-4">
        <p className="startup-card_desc">{description}</p>

        <div className="mt-4 rounded-lg overflow-hidden">
          <img
            src={image}
            alt="placeholder"
            className="startup-card_img group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link
          href={`/?query=${category?.toLowerCase()}`}
          className="category-tag"
        >
          {category}
        </Link>
        <Button asChild className="startup-card_btn">
          <Link href={`/startup/${_id}`}>View Details</Link>
        </Button>
      </div>
    </li>
  );
};  

export default StartupCard;
