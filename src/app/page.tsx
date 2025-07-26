import { Home } from "./components";

export default async function Page(props: {
  searchParams?: Promise<{
    q?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.q || "";

  return <Home searchQuery={query} />;
}
