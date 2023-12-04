"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import Button from "../Button";

type ListItemProps = {
  image: string;
  name: string;
  href: string;
};

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <div className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition">
      <div className="relative min-w-64 min-h-64">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <p className="font-medium truncate py-5">{name}</p>
      <Button
        className="absolute opacity-0 right-4 group-hover:opacity-100"
        color="primary"
        size="icon-lg"
        variant="icon"
        onClick={handleClick}
      >
        <FaPlay className="text-black" />
      </Button>
    </div>
  );
};

export default ListItem;
