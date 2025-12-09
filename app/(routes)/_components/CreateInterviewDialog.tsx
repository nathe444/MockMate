import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PlusCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResumeUpload } from "./ResumeUpload"
import JobDescription from "./JobDescription"
import { DialogClose } from "@radix-ui/react-dialog"


const CreateInterviewDialog = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger><Button >
                    <PlusCircle className="mr-2 h-5 w-5" />
                    Start New Interview
                </Button>
                </DialogTrigger>

                <DialogContent className="md:min-w-3xl  ">
                    <DialogHeader>
                        <DialogTitle className="text-center">Please Submit Your Information</DialogTitle>
                        <DialogDescription className="flex justify-center items-center">
                            <Tabs defaultValue="resumeUpload" className="w-[400px] text-center justify-center items-center flex mt-4">
                                <TabsList className="flex gap-4 m-2 mb-6">
                                    <TabsTrigger value="resumeUpload" >Resume Upload</TabsTrigger>
                                    <TabsTrigger value="Job Description">Job Description</TabsTrigger>
                                </TabsList>
                                <TabsContent value="resumeUpload" className="w-full flex justify-center items-center">
                                    <div className="w-full flex justify-center px-6">
                                        <ResumeUpload />
                                    </div>
                                </TabsContent>
                                <TabsContent value="Job Description"><JobDescription /></TabsContent>
                            </Tabs>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose>
                            <Button variant={"outline"}>Cancel</Button>
                        </DialogClose>
                        <Button>Submit</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CreateInterviewDialog