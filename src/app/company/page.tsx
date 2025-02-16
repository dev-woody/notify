import DialogComponent from "./dialog";

export default function Compony() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-col justify-center min-h-[100vh] px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-gray-500 tracking-widest font-medium title-font mb-1">
            이후 들어 갈 타이틀
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            이후 들어 갈 타이틀
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>

        <DialogComponent />
      </div>
    </section>
  );
}
