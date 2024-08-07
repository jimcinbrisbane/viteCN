export default function ProjectCard({ className, ...props }) {
  return (
    <li className="p-6 flex flex-col gap-2 items-center">
      <div className="bg-gray-300 animate-pulse aspect-video w-full relative rounded">
        <img className="absolute top-0 left-0 w-full h-full rounded" src="" alt="" />
      </div>
      <div className="w-full flex flex-col items-center">
        <p className="pb-1 m-0">{props.team}</p>
        <a href={props.link} className="text-center">
          Go to project
        </a>
      </div>
    </li>
  );
}
