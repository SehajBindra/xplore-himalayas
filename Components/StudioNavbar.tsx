import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
function StudioNavbar(props: any) {
  return (
    <div>
      <div className="flex items-center space-x-2  p-5 text-[#E23E57]">
        <ArrowUturnLeftIcon className="h-5 w-5 " />
        <Link href="/">Go to Website</Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
