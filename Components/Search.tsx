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

export default function Search() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="cursor pointer">Edit Profile</p>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <MagnifyingGlassIcon className="h-5 w-5 object-cover " />
          <DialogTitle>Find any Trips</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
