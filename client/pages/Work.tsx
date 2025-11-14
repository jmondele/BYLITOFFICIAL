import Header from "@/components/Header";
import { Link } from "react-router-dom";

export default function Work() {
  const projects = Array(9).fill(null).map((_, i) => ({
    id: i + 1,
    title: "Project Name",
    description: "Project description",
    image: `https://api.builder.io/api/v1/image/assets/TEMP/${['309497baa8014a7a38dee00c472349e4702722b1', 'c3ba87667326ec7d39dfa55475568973c3418569', 'c886a904715013e4992f1cb3e6c3782392ceab36', 'a5167d81ad053a0bf114422a421e3d4a8179cec0', '242ddb274c7dc2b1bd28d94d4a7bef3731970823', 'd85f5959486dca483adf519153bc6269e6e594fd', 'e8985ac352446b40061b465820a516d41caa89aa', 'ffbb25dcfefc825f0d19daf223468e87b0a97991', '71f41e35166a98b5366385c8888563c78a053232'][i]}?width=960`
  }));

  return (
    <div className="bg-[#F9F9F9] min-h-screen">
      <Header variant="light" />

      <div className="pt-32 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="relative group aspect-square overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                <h3 className="text-[#333] text-2xl md:text-3xl mb-2">{project.title}</h3>
                <p className="text-[#333] text-base md:text-lg">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
