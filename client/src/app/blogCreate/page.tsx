import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import "../../../node_modules/latex.js/dist/latex.mjs"  
import 'svgdom'

function splits(input: string, separators: string[]): string[] {
    return input.split(new RegExp(separators.join("|"), "g"));
  }

function latexModifier(text: string): Element{
  
  const { parse, HtmlGenerator } = require('latex.js')
    const { createHTMLWindow } = require('svgdom')

    global.window = createHTMLWindow()
    global.document = window.document

    let generator = new HtmlGenerator({ hyphenate: false })

    let doc = parse(text, { generator: generator }).htmlDocument()
    return doc.documentElement.outerHTML
}

function codeModifier(text: string): JSX.Element{

  return (
    <div className="bg-[#1e1e1e] rounded-md overflow-hidden">
      <div className="bg-[#2d2d2d] px-4 py-2 text-sm font-medium text-[#d4d4d4]">JavaScript</div>
      <p className="p-4 font-mono text-[#d4d4d4]">
        <code>{text}</code>
      </p>
    </div>
  )
}

function extractTextByOrder(text: string): string[] {
    const queue: { type: "latex" | "codeblock"; match: string }[] = [];
    const regex = /<latex>(.*?)<\/latex>|<codeblock>(.*?)<\/codeblock>/g;
    let match;
  
    while ((match = regex.exec(text)) !== null) {
      if (match[1] !== undefined) {
        queue.push({ type: "latex", match: match[1] });
      } else if (match[2] !== undefined) {
        queue.push({ type: "codeblock", match: match[2] });
      }
    }
  
    return queue.map((item) => item.type);
}
/*
const inputText = `
    Here is some text.
    <str>This is a string</str>
    Some more text.
    <mtr>This is another string</mtr>
    And even more text.
    <str>This is a second string</str>
`;

const extractedText = extractTextBetweenTags(inputText);
console.log('Text between <str> tags:', extractedText.str);
console.log('Text between <mtr> tags:', extractedText.mtr);
*/

function textConverter(text: string): JSX.Element {
    var isLatex = text.match(/<latex>/);
    var isCode = text.match(/<codeblock/);
    var latexAndCode = [];

    if (!isCode || !isLatex) {
      return (<p>{text}</p>);
    }
    var textArr = []
    const textOrder = extractTextByOrder(text)
    textArr = splits(text, ["<latex>", "</latex>", "<codeblock>", "</codeblock>"]);
    var order
    var elementArr = [];
    for (let index = 1; index < textArr.length; index =+ 2) {
        if (index % 2 == 0) elementArr.push(<p>{textArr[index]}</p>)
        else {
          order = (index - 1)/2
        if (textOrder[order] == 'latex') elementArr.push(latexModifier(textArr[index]));
        if (textOrder[order] == 'codeblock') elementArr.push(codeModifier(textArr[index]));
    
      }
    }
    return (<p></p>)
}

export default function Component() {
    var text = `
  Here is some text.
  <str>hello</str><mtr>hello</mtr>
  Some more text.
  <mtr>This is another string</mtr>
  And even more text.
  <str>This is a second string</str>
`;
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
              {textConverter(text)}
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