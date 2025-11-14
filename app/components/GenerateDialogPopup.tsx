import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
//   DialogTrigger,
} from "@/components/ui/dialog"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface GenerateDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

function GenerateDialogPopup({ isOpen, onClose } : GenerateDialogProps) {

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[425px] [&>button:first-of-type]:hidden">
            <DialogHeader>
            <DialogTitle>Secret Santa Matches Created</DialogTitle>
            <DialogDescription>
                <div className="space-y-4 mt-6 text-sm">
                    <h1 className="text-2xl text-red-600">Hoe Hoe Hoe!</h1>
                    <p className="mt-4 text-slate-700">HolidayBot generated Secret Santa pairs and sent each individual an email with their radomly selected Secret Santa match along with a note about your Reveal Party and 5 random gift ideas for their match. </p>
                    <p className="font-bold text-green-600">You can download the generated pairs here. <img alt="img" src="https://" className="inline-block" /></p>
                    <p className="font-bold">List of email&apos;s sent:</p>
                    <div>
                        <Table>
                            <TableBody>
                                <TableRow>
                                <TableCell className="font-medium">James S.</TableCell>
                                <TableCell>Tanya J.</TableCell>
                                <TableCell className="text-right">Jan 9, 2025 9pm</TableCell>
                                </TableRow>
                            </TableBody>
                            </Table>
                    </div>
                </div>
            </DialogDescription>
            </DialogHeader>
            {/* Add more content here */}
        </DialogContent>
        </Dialog>
    )
}

export default GenerateDialogPopup