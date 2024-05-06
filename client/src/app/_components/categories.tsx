import { Bean, FlaskConical, SprayCan, Sprout } from "lucide-react";

export default function Categories() {
  return (
    <div className="flex flex-col items-center py-24">
      <div className="flex flex-col text-center gap-6">
        <h1 className="text-4xl font-semibold">
          Our wide range of categories
        </h1>
        <p className="max-w-prose">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          dolore eveniet perspiciatis veritatis.
        </p>
      </div>

      <div className="mt-16 flex gap-8">
        <div className="w-28 rounded-full h-28 bg-secondary flex items-center justify-center">
          <Sprout size={42}/>
        </div>
        <div className="w-28 rounded-full h-28 bg-secondary flex items-center justify-center">
          <Bean size={42}/>
        </div>
        <div className="w-28 rounded-full h-28 bg-secondary flex items-center justify-center">
          <SprayCan size={42}/>
        </div>
        <div className="w-28 rounded-full h-28 bg-secondary flex items-center justify-center">
          <FlaskConical size={42}/>
        </div>
      </div>
    </div>
  );
}
