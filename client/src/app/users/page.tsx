import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "@/components/ui/resizable"
  
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      taskGiver: "Jhon Kheil",
      status: "pending",
      description: "Bibili ng Hatdog"
    },
    {
      id: "2",
      taskGiver: "Arvie",
      status: "processing",
      description: "Ginagawa yung hotdog stand"
    },
    {
      id: "3",
      taskGiver: "Marco",
      status: "processing",
      description: "Magluto"
    },
    {
      id: "4",
      taskGiver: "Andaya",
      status: "failed",
      description: "Matuto kay sir FG"
    },
    // ...
  ]
  /*
  id: string
  taskGiver: string
  status: "pending" | "processing" | "success" | "failed"
  description: string
  */
}

const articles = [
  {
    id: 1,
    title: "Watsup Math People",
    likes: 5,
    comments: 3
  },
  {
    id: 2,
    title: "How to Solve this Diffeq",
    likes: 2,
    comments: 5
  },
  {
    id: 3,
    title: "Mahal ba niya ako o hinde?",
    likes: 50,
    comments: 42
  },
  {
    id: 4,
    title: "Best Study Tips for Calculus",
    likes: 10,
    comments: 7
  },
  {
    id: 5,
    title: "Anyone Up for a Group Study?",
    likes: 8,
    comments: 15
  },
  {
    id: 6,
    title: "Linear Algebra is Kicking My Butt!",
    likes: 12,
    comments: 9
  },
  {
    id: 7,
    title: "Favorite Math Jokes",
    likes: 25,
    comments: 30
  },
  {
    id: 8,
    title: "Help with Probability Problem",
    likes: 4,
    comments: 6
  },
  {
    id: 9,
    title: "Math Memes to Brighten Your Day",
    likes: 40,
    comments: 20
  },
  {
    id: 10,
    title: "Interesting Real-Life Applications of Math",
    likes: 15,
    comments: 12
  },
  {
    id: 11,
    title: "What’s Your Favorite Math Book?",
    likes: 7,
    comments: 3
  },
  {
    id: 12,
    title: "Tips for Learning Abstract Algebra",
    likes: 9,
    comments: 4
  }
]

export default async function accounts(){
  const data = await getData()
    return (
      <div className="px-3 flex">
        <Card className="h-auto bg-white/20 p-6 rounded-lg shadow-md w-4/6">
          <div className="flex items-center">
            <Avatar className="h-16 w-16 mr-4">
              <AvatarImage src="path_to_user_image.jpg" alt="User Icon" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-white">User Name</h1>
              <p className="text-slate-300">Project Role: Project Manager</p>
            </div>
          </div>
          <div className="mt-6">
            <Table>
              <TableCaption className="text-lg font-semibold text-slate-800">A list of your recent articles</TableCaption>
              <TableHeader>
                <TableRow className="mt-2 list-disc list-inside text-white">
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead className="text-center">num of likes</TableHead>
                  <TableHead className="text-center">Num of Comments</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {articles.map((article) =>(
                  <TableRow key={article.id} className="mt-2 list-disc list-inside text-slate-300">
                    <TableCell className="font-medium">{article.id}</TableCell>
                    <TableCell>{article.title}</TableCell>
                    <TableCell className="text-center">{article.likes}</TableCell>
                    <TableCell className="text-center"  >{article.comments}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
        <Card className="flex w-1/3 flex-col">
          <CardHeader className="w-full pt-10">
            <CardTitle className="text-center">Tasks!</CardTitle>
          </CardHeader>
          <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
          </div>
        </Card>
      </div>
    )
}