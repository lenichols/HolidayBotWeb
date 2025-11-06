import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

function GeneratorSteps() {
    return (
        <div className="bg-white p-6 absolute -mt-4 z-10 w-full shadow-md shadow-black/20">
            <div className="text-2xl font-bold mt-2">3 Easy Steps...</div>
            <div className="flex w-full mt-6 space-x-4">
                <div className="w-1/3 border-r-2 border-zinc-200">
                    <div id="step1" className="flex space-x-4">
                        <div className="text-6xl font-bold">1</div>
                        <div className="grid grid-row">
                            <div className="text-3xl">Upload Participant List</div>
                            <Input type="file" className="mt-4" />
                            <div className="w-1/2">
                                <Button variant="link" className="text-xs underline" >Download XLS template</Button>
                            </div>
                            {/* <div className="text-right mt-4">
                                <Button className="mx-auto">Upload</Button>
                            </div> */}
                        </div>
                    </div>

                </div>
                <div className="w-1/3 border-r-2 border-zinc-200">
                    <div id="step1" className="flex space-x-4">
                        <div className="text-6xl font-bold">2</div>
                        <div className="grid space-y-4">
                            <div className="text-3xl">Details & Gift Budget</div>
                            <div className="text-sm text-slate-500">Gift Budget:</div>
                            <Input type="text" placeholder="0.00" className="w-1/2 float-start" checked />
                            <div className="flex items-start gap-3">
                                    <Checkbox id="terms-2" defaultChecked />&nbsp;<label className="text-sm">Allow e-Gifts/Digital Gifts?</label>
                            </div>
                            <div className="flex items-start gap-3">
                                    <Checkbox id="terms-2"  />&nbsp;<label className="text-sm">Suggest Reveal Party</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 border-zinc-200">
                    <div id="step1" className="flex space-x-4">
                        <div className="text-6xl font-bold">3</div>
                        <div className="grid space-y-4">
                            <div className="text-3xl">Confirm & Send</div>
                            <div className="flex items-start gap-3">
                                <Checkbox id="terms-2" defaultChecked />&nbsp;<label className="text-sm"> Email List Participants (Match Confirmation see example)</label>
                            </div> 
                            <div className="block">
                                <Input type="text" placeholder="terra@anywhereio.ai" className="w-1/2 float-start" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row w-full mt-14 mb-2">
                <div className="w-3/4 text-xs text-slate-600">*By using this tool, you agree to share the names and email addresses you upload with our AI system to generate and send Secret Santa assignments. Your data is not stored or used for any other purpose.</div>
                <div className="w-1/4">
                    <Button variant="default" className="float-end shadow-lg shadow-black/20" size="lg" >Generate</Button>&nbsp;
                    <Button variant="secondary" className="float-end" size="lg" >Reset</Button>
                </div>
            </div>
        </div>
    )
}

export default GeneratorSteps;