import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  { userName: "csinh", name: "csinh", initialIsFollowing: true },
  { userName: "csinhache", name: "csinhache", initialIsFollowing: false },
  {
    userName: "carlossinhache",
    name: "carlossinhache",
    initialIsFollowing: false,
  },
  {
    userName: "marisolzs",
    name: "mar",
    initialIsFollowing: true,
  },
  {
    userName: "mangel",
    name: "mang",
    initialIsFollowing: true,
  },
  {
    userName: "rubius",
    name: "rub",
    initialIsFollowing: false,
  },
  {
    userName: "pewdiepie",
    name: "pewds",
    initialIsFollowing: true,
  },
  { userName: "fapparamoar", name: "alexs", initialIsFollowing: false },
];

export function App() {
  return (
    <section className="App">
      {users.map(({ userName, name, initialIsFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={initialIsFollowing}
          name={name}
        />
      ))}
    </section>
  );
}
