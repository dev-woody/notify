import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <section className="text-gray-600 body-font h-screen">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col h-full">
        <div className="text-center lg:w-2/3 w-full">
          {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Microdosing synth tattooed vexillologist
          </h1>
          <p className="mb-8 leading-relaxed">
            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
            tousled. Chambray dreamcatcher trust fund, kitsch vice godard
            disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh.
            Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo
            booth af fingerstache pitchfork.
          </p> */}
          <div className="flex justify-center">
            <Link href="/company">
              <Button className="inline-flex text-white md:w-[30vw] bg-indigo-500 border-0 py-10 px-6 focus:outline-none hover:bg-indigo-600 rounded justify-center text-lg">
                사장님용
              </Button>
            </Link>
            <Link href="/reviewer">
              <Button className="ml-4 inline-flex text-gray-700 md:w-[30vw] bg-gray-100 border-0 py-10 px-6 focus:outline-none hover:bg-gray-200 rounded justify-center text-lg">
                리뷰어용
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
