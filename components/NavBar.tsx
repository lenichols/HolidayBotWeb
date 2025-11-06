import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "./ui/button";

export default function NavBar() {
    return (
        <div className="flex w-full items-center justify-center pr-16 pt-4">
            <div className="w-1/3 ml-4">
                <h1 className="text-4xl text-white text-shadow-5xs text-start">
                    <span className="font-black underline">Holiday</span>
                        Bot
                    <sup className="text-red-800">AI</sup>
                </h1>
            </div>
            <div className="w-1/3 flex items-center justify-center">
                <span className="float-start">Select an Occasion: </span>
                <Select>
                    <SelectTrigger className="w-[240px] mx-auto border-none bg-white text-xl focus:ring-red-200 text-red-600">
                        <SelectValue placeholder="Christmas Holiday" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Christmas Holiday">Christmas Holiday</SelectItem>
                        <SelectItem value="Kwanzaa">Kwanzaa</SelectItem>
                        <SelectItem value="New Years">New Years</SelectItem>
                        <SelectItem value="Valentines Day">Valentines Day</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="w-1/3">
                {/* <Link href="href">Random Gift Generator</Link> */}
                <Button variant="link" className="float-end" >Random Gift Generator</Button>
                <Button variant="default" className="float-end">Submit a Wish List</Button>

            </div>
        </div>)
}