import { prisma } from "@/lib/db";

export default async function test() {
  const voices = await prisma.voice.findMany();
  return (
    <div>
      <h1>{voices.length}</h1>
      <ul>
        {voices.map((voice) => (
      <li key={voice.id}>
        {voice.name}
      </li>
        ))}
      </ul>
    </div>
  )
}