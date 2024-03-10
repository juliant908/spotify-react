import { getGreeting } from "../../utils/getGreeting"

export default function Greeting() {
  const greeting = getGreeting()
 return <h1 className="text-3xl font-bold">{greeting}</h1>;
}