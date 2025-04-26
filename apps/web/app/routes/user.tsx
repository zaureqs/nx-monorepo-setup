
import { json, useLoaderData } from "@remix-run/react";
import { prismaUser } from "@/dtos/index";

export async function loader() {
  try{
    const response = await fetch("http://localhost:5500/api/v1/users");
    const data = await response.json();
    return json(data);
  } catch (error) {
    console.error(error);
    return json([]);
  }
}

export default function User() {
  const users = useLoaderData<typeof loader>();
  return <div className="bg-primary/20 min-h-screen flex flex-col items-center justify-center gap-8 text-primary text-4xl font-bold">
    {users?.map((user: prismaUser) => (
      <div
        key={user.id}
        className=""
      >{user.name}</div>
    ))}
  </div>;
}

