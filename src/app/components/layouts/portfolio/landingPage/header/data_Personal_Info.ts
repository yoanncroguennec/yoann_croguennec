import { AiOutlineCar } from "react-icons/ai";
import {
  BiUser,
  BiPhoneCall,
  BiMailSend,
  BiLogoLinkedinSquare,
  BiLogoGithub,
} from "react-icons/bi";
import { IconType } from "react-icons";

// Définition correcte de l'interface
interface DataPersonalInfo {
  icon: IconType;
  iconColor: string | null;
  href: string | null;
  text: string;
}

// Données correctement typées
const data_Personal_Info: DataPersonalInfo[] = [
  {
    icon: BiUser,
    iconColor: null,
    href: null,
    text: "39 ans",
  },
  {
    icon: BiPhoneCall,
    iconColor: null,
    href: "tel:+33765827083",
    text: "07 65 82 70 83",
  },
  {
    icon: BiMailSend,
    iconColor: "#F00",
    href: "mailto:yoann.croguennec.pro@gmail.com",
    text: "yoann.croguennec.pro@gmail.com",
  },
  {
    icon: AiOutlineCar,
    iconColor: null,
    href: null,
    text: "Permis B",
  },
  {
    icon: BiUser,
    iconColor: null,
    href: null,
    text: "Reconnu RQTH",
  },
  {
    icon: BiLogoLinkedinSquare,
    iconColor: "#00F",
    href: "https://www.linkedin.com/in/yoann-croguennec",
    text: "https://www.linkedin.com/in/yoann-croguennec",
  },
  {
    icon: BiLogoGithub,
    iconColor: null,
    href: "https://github.com/yoanncroguennec",
    text: "https://github.com/yoanncroguennec",
  },
];

export default data_Personal_Info;
