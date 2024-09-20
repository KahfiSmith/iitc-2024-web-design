import { tw } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import { Heading, Paragraph } from "./ui/typography";

const routesList = [
  {
    id: 1,
    name: "Material",
    route: "/material",
    icon: "/images/material.svg",
  },
  {
    id: 2,
    name: "Quiz",
    route: "/quiz",
    icon: "/images/quiz-gray.svg",
  },
  {
    id: 3,
    name: "Course",
    route: "/course",
    icon: "/images/course-gray.svg",
  },
  {
    id: 4,
    name: "Discussion",
    route: "/discussion",
    icon: "/images/discussion-gray.svg",
  },
  {
    id: 5,
    name: "Reward",
    route: "/reward",
    icon: "/images/reward-gray.svg",
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 h-full bg-white fixed top-0 left-0 border-r">
      <div className="p-6 flex justify-between items-center min-h-full flex-col">
        <div className="min-h-full w-full">
          <div className="flex justify-center items-center flex-col space-y-4">
            <img src="/images/logo.svg" alt="logo" className="w-14 h-14" />
            <Heading as="h3" className="text-2xl text-center font-bold mb-8">
              EduVerse
            </Heading>
          </div>
          <ul className="flex flex-col mt-8 justify-start items-start w-full space-y-6">
            <li className=" w-full">
              <button
                type="button"
                className={tw(
                  "flex rounded-md justify-start px-3 py-1.5 space-x-4 items-center w-full",
                  location.pathname === "/dashboard"
                    ? "bg-[#F4F4F4] border border-gray-300"
                    : ""
                )}
              >
                <img src="/images/home.svg" alt="home" />
                <Paragraph className="text-xl font-bold">Dashboard</Paragraph>
              </button>
            </li>
            {routesList.map((item) => (
              <li className=" w-full">
                <button
                  type="button"
                  className={tw(
                    "flex rounded-md justify-start px-3 py-1.5 space-x-4 items-center w-full",
                    location.pathname.includes(item.name)
                      ? "bg-[#F4F4F4] border border-gray-300"
                      : ""
                  )}
                >
                  <img src={item.icon} alt={item.name} />
                  <Paragraph className="text-xl font-bold">
                    {item.name}
                  </Paragraph>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t py-5 px-2 space-y-6 w-full">
          <button
            type="button"
            className="flex rounded-md justify-start px-3 py-1.5 space-x-4 items-center w-full"
          >
            <img src="/images/profile-gray.svg" alt="profile" />
            <Paragraph className="text-xl font-bold">Profile</Paragraph>
          </button>
          <button
            type="button"
            className="flex rounded-md justify-start px-3 py-1.5 space-x-4 items-center w-full"
          >
            <img src="/images/logout.svg" alt="profile" />
            <Paragraph className="text-xl font-bold">Logout</Paragraph>
          </button>
        </div>
      </div>
    </aside>
  );
}
