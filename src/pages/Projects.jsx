import { useParams } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";

export default function Projects() {
  const { id } = useParams();
  return (
    <div>
      <h2>Project Detail Page</h2>
      <p>Details about a specific project will be shown here.</p>
      <h2>Client Detail for ID: {id}</h2>
      <ProjectDetail />
    </div>
  );
}
