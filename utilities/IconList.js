import BoxIcon from "../components/svg/menubarIcons/BoxIcon";
import CheckIcon from "../components/svg/menubarIcons/CheckIcon";
import TicketIcon from "../components/svg/menubarIcons/TicketIcon";
import HomeIcon from "../components/svg/menubarIcons/HomeIcon";
import SkybuildIcon from "../components/svg/menubarIcons/SkybuildIcon";

import BoxCloseIcon from "../components/svg/menubarIcons/BoxCloseIcon";
import MemberIcon from "../components/svg/menubarIcons/MemberIcon";
import LayerIcon from "../components/svg/menubarIcons/LayerIcon";
import SearchDollarIcon from "../components/svg/menubarIcons/SearchDollarIcon";
import RectangleIcon from "../components/svg/menubarIcons/RectangleIcon";

export const firstMenuIcon = [
  {
    id: 1,
    icon: <HomeIcon height={20} width={20} fill="#767676" className="mb-4 mt-2" />,
  },
  {
    id: 2,
    icon: <TicketIcon height={20} width={20} fill="#767676" className="mb-4 mt-2" />,
  },
  {
    id: 3,
    icon: (
      <div className="mb-4 mt-2">
        <CheckIcon height={20} width={20} fill="#767676" />
      </div>
    ),
  },
  {
    id: 4,
    icon: <BoxIcon height={20} width={20} fill="#767676" className="mb-4 mt-2" />,
  },
  {
    id: 5,
    icon: <SkybuildIcon height={20} width={20} fill="#767676" className="mb-4 mt-2" />,
    link: "/company",
  },
];

export const secondMenuIcon = [
  {
    id: 1,
    icon: <MemberIcon height={20} width={20} fill="#767676" className="mb-4 mt-2" />,
  },
  {
    id: 2,
    icon: <LayerIcon height={20} width={20} fill="#767676" className="mb-4 mt-2" />,
  },
  {
    id: 3,
    icon: <BoxCloseIcon height={20} width={20} fill="#767676" className="mb-4 mt-2" />,
  },
  {
    id: 4,
    icon: <RectangleIcon height={20} width={20} fill="#767676" className="mb-4 mt-2" />,
  },
  {
    id: 5,
    icon: <SearchDollarIcon height={20} width={20} fill="#767676" className="mb-4 mt-2" />,
  },
];
