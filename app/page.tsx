import { NavigationExample } from "../components/NavigationExample";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to Next.js + Effector + Apollo
      </h1>
      <NavigationExample />
      <p className="text-gray-600">
        This setup demonstrates Apollo GraphQL + Effector state management +
        Next.js router integration.
      </p>
    </div>
  );
}
