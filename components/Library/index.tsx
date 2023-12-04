import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

function Library() {
  const onClick = () => {};
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4 ">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist size={26} className="text-neutral-400" />
          <p className="text-neutral-400 font-medium text-base">Your Library</p>
        </div>
        <button
          onClick={onClick}
          className="text-neutral-400 hover:text-white transition"
        >
          <AiOutlinePlus size={20} />
        </button>
      </div>
      <div className="flex flex-col gap-y-1 mt-4 px-3">Your Song List!</div>
    </div>
  );
}

export default Library;
