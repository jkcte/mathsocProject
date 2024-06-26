import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"



const Announcement = [
  {
    title: "MATH SOC ID LACE NOW OUT",
    desc: "Buy now at July 1, 2024"
  },
  {
    title: "TREASURER NG MATH SOC, SKANDALO",
    desc: "Ayaw mag Let sa proving, pinapagalitan na ngayon!"
  },
  {
    title: "VS Code EDITOR YOU SHOULD USE",
    desc: "HatDoogers"
  }
]
const Event = [
  {
    title: "TAMSTATS REVIEW",
    desc: "june 1, 2024"
  },
  {
    title: "General Assembly",
    desc: "june 1, 2024"
  },
  {
    title: "Wala na akong maisip",
    desc: "june 1, 2024"
  }
]
const execBoards = [
  {
    name: "Naomi",
    position: "President",
    picture: ""
  },
  {
    name: "Zion",
    position: "Vice-President",
    picture: ""
  },
  {
    name: "Cielo",
    position: "Secretary",
    picture: ""
  },
  {
    name: "Cymon",
    position: "Treasurer",
    picture: ""
  },
  {
    name: "Arviee",
    position: "Auditor",
    picture: ""
  },
  {
    name: "Marco",
    position: "PRO",
    picture: ""
  },
]

const articles = [
  {
    title : "Hindi Kailangan maging relevant",
    creator : "Ako"
  },
  {
    title : "Black belt Swift Master's Relevance",
    creator : "Bruh Moment"
  },
  {
    title : "Derivative talaga to, hindi Differentiate",
    creator : "Anonymous"
  },
]


export default async function Home() {

  return (
    <main>
      {/*First Block*/}
      <div className="py-2">
        {/*Welcome*/}
        <div className="text-center py-3">
          <p className="text-5xl font-mono text-slate-200">Welcome To Math Soc</p>
        </div>
        {/*Announcement*/}
        <div className="pb-3 px-3">
        <Card className="bg-transparent border-transparent">
          <CardHeader className="text-center text-3xl text-slate-200">ANNOUNCEMENTS</CardHeader>
            <Carousel>
              <CarouselContent className="">
                {Announcement.map((announce, index) =>(
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                    <Card className="group transition ease-in-out delay-150 bg-white/20 text-white border-transparent hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                      <CardHeader className="flex aspect-square justify-center p-6">
                        <CardTitle>{announce.title}</CardTitle>
                        <CardDescription className="group-hover:text-white duration-300">{announce.desc}</CardDescription>
                      </CardHeader>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
        </Card>
        </div>
      </div>
      {/*Second Block*/}
      <div>
        <div className="pb-3 px-3">
          <Card className="bg-transparent border-transparent">
            <CardHeader className="text-center text-5xl text-slate-200">Events</CardHeader>
              <Carousel>
                <CarouselContent>
                  {Event.map((announce, index) =>(
                    <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                      <Card>
                        <CardHeader className="flex aspect-square justify-center p-6">
                          <CardTitle>{announce.title}</CardTitle>
                          <CardDescription>{announce.desc}</CardDescription>
                        </CardHeader>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
          </Card>
        </div>
        <div className="py-3">
          <h1 className="text-slate-200 pl-3">Mission</h1>
          <p className="text-slate-100 pl-7">We are ...</p>
          <h1 className="text-slate-200 pr-3 text-right">Vision</h1>
          <p className="text-slate-100 pr-7 text-right">We are ...</p>
        </div>
      </div>
      {/*Third Block*/}
      <div>
        <Card className="bg-transparent border-transparent">
          <CardHeader className="text-center text-3xl text-slate-200">Who we are</CardHeader>
            <Carousel>
              <CarouselContent className="">
                {execBoards.map((people, index) =>(
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                    <Card className="group transition ease-in-out delay-150 bg-white/20 text-white border-transparent hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                      <Avatar className="place-items-center">
                        <AvatarImage src={people.picture} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <CardHeader className="flex aspect-square justify-center p-6">
                        <CardTitle>{people.name}</CardTitle>
                        <CardDescription className="group-hover:text-white duration-300">{people.position}</CardDescription>
                      </CardHeader>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
        </Card>
      </div>
        <Card className="bg-transparent border-transparent">
          <CardHeader className="text-center text-3xl text-slate-200">ARTICLES</CardHeader>
            <Carousel>
              <CarouselContent className="">
                {articles.map((article, index) =>(
                  <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                    <Card className="group transition ease-in-out delay-150 bg-transparent text-white border-transparent hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
                      <CardHeader className="flex aspect-square justify-center p-6">
                        <CardTitle>{article.title}</CardTitle>
                        <CardDescription className="group-hover:text-white duration-300">{article.creator}</CardDescription>
                      </CardHeader>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
        </Card>
      <div></div>
      {/*Fifth Block*/}
      <div></div>
    </main>
  );
}
