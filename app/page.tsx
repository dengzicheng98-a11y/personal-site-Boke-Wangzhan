import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { Writing } from "@/components/Writing";
import { Footer } from "@/components/Footer";
import { projects } from "@/data/projects";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  return (
    <main className="page">
      <Nav />
      <Hero />
      <SelectedWork projects={projects} />
      <Writing posts={posts} />
      <Footer />
    </main>
  );
}
