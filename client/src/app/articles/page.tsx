import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import Link from "next/link"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


export default async function articles(){
    return (
        <div className="px-3 flex place-content-center">
            <Card className="h-auto bg-transparent border-slate-600 p-6 rounded-lg shadow-md w-4/6">
                <CardHeader>
                    <CardTitle className="text-white text-center">Watsup lods</CardTitle>
                </CardHeader>
                <CardContent>
                    <RadioGroup defaultValue="option-one">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-one" id="option-one" />
                            <Label className="text-white" htmlFor="option-one">Option One</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-two" id="option-two" />
                            <Label className="text-white" htmlFor="option-two">Option Two</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="option-three" id="option-three" />
                            <Label className="text-white" htmlFor="option-three">Option Three</Label>
                        </div>
                    </RadioGroup>
                    <Card>
                    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto">
                            <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
                            <div className="space-y-8">
                            <Link href="#" className="block hover:underline" prefetch={false}>
                                <h2 className="text-2xl font-bold">Introducing Our New Product</h2>
                                <p className="text-muted-foreground">Learn all about the latest addition to our product lineup.</p>
                            </Link>
                            <Link href="#" className="block hover:underline" prefetch={false}>
                                <h2 className="text-2xl font-bold">5 Tips for Better Productivity</h2>
                                <p className="text-muted-foreground">Boost your efficiency with these simple productivity hacks.</p>
                            </Link>
                            <Link href="#" className="block hover:underline" prefetch={false}>
                                <h2 className="text-2xl font-bold">The Future of Web Development</h2>
                                <p className="text-muted-foreground">Explore the latest trends and technologies shaping the web.</p>
                            </Link>
                            <Link href="#" className="block hover:underline" prefetch={false}>
                                <h2 className="text-2xl font-bold">Design Inspiration: Minimalist Portfolios</h2>
                                <p className="text-muted-foreground">Get inspired by these stunning minimalist portfolio designs.</p>
                            </Link>
                            <Link href="#" className="block hover:underline" prefetch={false}>
                                <h2 className="text-2xl font-bold">The Art of Effective Storytelling</h2>
                                <p className="text-muted-foreground">Learn how to craft compelling stories that captivate your audience.</p>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </Card>
                </CardContent>
            </Card>
        </div>
    )
}
