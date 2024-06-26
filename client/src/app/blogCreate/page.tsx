/**
 * v0 by Vercel.
 * @see https://v0.dev/t/hojhGoqy8QD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter a title" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea id="content" placeholder="Write your blog post" className="min-h-[300px]" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="author">Author</Label>
            <Input id="author" placeholder="Enter the author name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <Input id="tags" placeholder="Enter tags separated by commas" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Featured Image</Label>
            <Input id="image" type="file" />
          </div>
          <Button className="w-full">Publish</Button>
        </div>
        <div className="bg-muted rounded-md p-6 shadow-sm">
          <div className="prose prose-gray dark:prose-invert">
            <h1 id="title">Blog Post Title</h1>
            <p>
              This is a preview of how your blog post will look. The content you write in the editor will be displayed
              here.
            </p>
            <p>
              Author: <span id="author">John Doe</span>
            </p>
            <p>
              Tags: <span id="tags">tag1, tag2, tag3</span>
            </p>
            <img src="/placeholder.svg" alt="Featured Image" className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}