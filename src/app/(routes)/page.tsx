import { Home } from "../components";

export default async function Page(props: {
  searchParams?: Promise<{
    q?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.q || "";

  /* @ts-expect-error Server Component */
  return <Home searchQuery={query} />;
}
