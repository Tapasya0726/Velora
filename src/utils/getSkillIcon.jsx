import {
  LuCode,
  LuMonitor,
  LuServer,
  LuDatabase,
  LuCloud,
  LuSettings2,
  LuPalette,
  LuUsers,
  LuFileCode,
} from "react-icons/lu";

export function getSkillIcon(category = "") {
  const c = category.toLowerCase().trim();

  switch (c) {
    case "programming":
      return <LuCode />;

    case "frontend":
      return <LuMonitor />;

    case "backend":
      return <LuServer />;

    case "database":
      return <LuDatabase />;

    case "cloud":
      return <LuCloud />;

    case "devops":
      return <LuSettings2 />;

    case "design":
      return <LuPalette />;

    case "soft skills":
      return <LuUsers />;

    default:
      return <LuFileCode />;
  }
}