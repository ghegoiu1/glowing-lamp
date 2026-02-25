import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Glowing Lamp" },
    { name: "description", content: "A massive ASCII lamp" },
  ];
}

export default function Home() {
  return <Welcome />;
}
