'use client'

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DollarSign } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator"
import { FormEvent, useState } from "react";
import { toast } from 'sonner'
import ConsoleBox from "./ConsoleBox";

interface GeneratorProps {
  isGenerateOpen: () => void;
  message?: () => void;
}

function GeneratorSteps({ isGenerateOpen, message } : GeneratorProps) {
    const [loading, setLoading ] = useState(false)
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isCsv, setIsCsv] = useState<boolean>(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
          setSelectedFile(file);
          setIsCsv(file.type === 'text/csv');
        } else {
          setSelectedFile(null);
          setIsCsv(false);
        }
    };

    async function onSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        setLoading(true)

        try {
            const formData = new FormData(event.currentTarget)

            if (selectedFile && isCsv) {
                const response = await fetch('/api/submit', {
                    method: 'POST',
                    body: formData,
                })
        
                const data = await response.json()
                if(data) { isGenerateOpen() }
                toast.success("Match Generation complete!")
            } else if (selectedFile && !isCsv) {
                toast.warning("Selected file is not a CSV:")
                return false
            } else {
                toast.error("No file selected.")
                return false
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
        <div className="bg-white p-6 w-full max-w-7xl mx-auto shadow-md shadow-black/20 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">            {/* <ConsoleBox /> */}
            <form onSubmit={onSubmit}>
            <div className="text-2xl font-bold mt-2">3 Easy Steps...</div>
            <div className="flex flex-col lg:flex-row w-full mt-6 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200">
                <div className="w-full lg:w-1/3 p-4">
                    <div className="flex space-x-4">
                        <div className="text-6xl font-bold text-red-600">1</div>
                        <div className="grid grid-row">
                            <div className="text-3xl text-red-600">Upload Participant List</div>
                            <Input type="file" accept=".csv" onChange={handleFileChange} name="uploaded_file" className="mt-4" />
                            <div className="w-1/2">
                                <Button variant="link" className="text-xs underline" >Download XLS template</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 p-4">
                    <div className="flex space-x-4">
                        <div className="text-6xl font-bold text-green-700">2</div>
                        <div className="grid space-y-4">
                            <div className="text-3xl text-green-700">Details & Gift Budget</div>
                            
                            <div className="relative">
                                <p className="text-sm text-slate-500 mb-2">Gift Budget:</p>
                                <div className="relative">
                                    <DollarSign className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground" />
                                    <Input type="number" name="budget" placeholder="0.00" className="w-1/2 pl-9 mr-2" /><span className="text-muted-foreground text-xs">Enter amount in USD</span>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-1">
                                <Checkbox id="terms-2" />&nbsp;<label className="text-sm">Allow e-Gifts/Digital Gifts?</label>
                            </div>
                            <div className="flex items-start gap-1">
                                <Checkbox id="terms-2" name="reveal_party"  />&nbsp;<label className="text-sm">Suggest Reveal Party</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 p-4">
                    <div className="flex space-x-4">
                        <div className="text-6xl font-bold text-red-600">3</div>
                        <div className="grid space-y-4">
                            <div className="text-3xl text-red-600">Confirm & Send</div>
                            <div className="flex items-start gap-1">
                                <Checkbox id="terms-2" name="email_participants" />&nbsp;<label className="text-sm"> Email Match to Individual List Participants <span className="text-xs underline">(Match Confirmation see example)</span></label>
                            </div> 
                            <div className="block">
                                <p className="text-md font-bold text-slate-800 mb-2">Senders Email:</p>
                                <Input type="text" name="sender_email" placeholder="your@email.com" className="w-full" />
                                <p className="text-muted-foreground text-xs my-2">Email with pair matches will be sent!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Separator className="my-4" />
            <div className="flex flex-col lg:flex-row w-full mb-2">
                <div className="w-full lg:w-3/4 text-xs text-slate-600 mb-4 lg:mb-0">*By using this tool, you agree to share the names and email addresses you upload with our AI system to generate and send Secret Santa assignments. Your data is not stored or used for any other purpose.</div>
                <div className="w-full lg:w-1/4 flex justify-end space-x-2">
                    <Button variant="secondary" size="lg">Reset</Button>
                    <Button variant="default" className="shadow-lg shadow-black/20" size="lg" type="submit">Generate</Button>
                </div>
            </div>
            </form>
        </div>
        </>
    )
}

export default GeneratorSteps;