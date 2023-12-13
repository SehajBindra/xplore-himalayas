"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../Components/ui/dialog";
import { Input } from "./ui/input";
import { client } from "../lib/sanity.client";
import { useDebounce } from "use-debounce";
import { groq } from "next-sanity";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ClientSideRoute from "./ClientSideRoute";
import { Skeleton } from "./ui/skeleton";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [value] = useDebounce(searchTerm, 500);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSkeletons, setShowSkeletons] = useState(true);

  // console.log(searchResults);
  const pathname = usePathname();

  useEffect(() => {
    // fetchQuery();

    // Set loading state when a search is initiated
    // setLoading(true);
    setLoading(true);
    setShowSkeletons(true);
    // Perform the search query to Sanity
    fetchQuery();
  }, [value]);

  useEffect(() => {
    setLoading(false);
    setShowSkeletons(false);
    setSearchResults([]);
  }, [pathname]);

  const fetchQuery = async () => {
    const searchQuery = groq`*[_type == 'post' && title match $value] {
    title,
    slug,
   
    _id
  }`;

    await client
      .fetch(searchQuery, { value })
      .then((results) => {
        setSearchResults(results);
        setLoading(false);
        // Reset loading state when results are fetched
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        setLoading(false); // Reset loading state on error
      });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="cursor pointer ml-auto">
          {" "}
          <MagnifyingGlassIcon className="h-6 w-6 object-cover  " />
        </p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-black">
        <DialogTitle className="flex w-full  items-center ">
          <MagnifyingGlassIcon className="h-6 w-6 object-cover mr-3 " />
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search your Hotels...."
            className=" focus-visible:ring-0 border-none focus-within:ring-0 ring-0  focus-within:outline-none  outline-none w-full"
            type="text"
          />
        </DialogTitle>

        {loading && (
          // Loading Skeletons while fetching results
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12  bg-gray-300 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4  bg-gray-300 w-[250px]" />
              <Skeleton className="h-4  bg-gray-300 w-[200px]" />
            </div>
          </div>
        )}
        {!loading &&
          searchResults.map((result: any) => (
            <ClientSideRoute
              key={result._id}
              route={`/post/${result.slug.current}`}
            >
              <div className="flex items-center  p-4 space-x-4">
                <Skeleton className="h-12  bg-gray-300 w-12 rounded-full" />
                <div className="space-y-2">
                  <p className=" text-black w-[250px] pb-2  line-clamp-1">
                    {result.title}
                  </p>
                  <Skeleton className="h-4 bg-gray-300 w-[200px]" />
                </div>
              </div>
            </ClientSideRoute>
          ))}
      </DialogContent>
    </Dialog>
  );
}
