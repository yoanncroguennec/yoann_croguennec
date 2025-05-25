// types.ts ou directement en haut de ton fichier
interface DataLink {
  name: string;
  icon: string;
  url: string;
}

// importation des icônes (si tu les importes dynamiquement, sinon laisse les chemins en string comme ci-dessous)
const iconEmail = "/assets/icons/iconEmail.png";
const iconLinkedin = "/assets/icons/iconLinkedin.png";
const iconPhone = "/assets/icons/iconPhone.png";
const iconYoutube = "/assets/icons/iconYoutube.png";

const dataLinks: DataLink[] = [
  {
    name: "Email",
    icon: iconEmail,
    url: "mailto:yoann.croguennec@gmail.com",
  },
  {
    name: "Linkedin",
    icon: iconLinkedin,
    url: "https://www.linkedin.com/in/yoann-croguennec/",
  },
  {
    name: "Youtube",
    icon: iconYoutube,
    url: "https://www.youtube.com/channel/UCPKnobu8PC11Rv4ym_PybgQ",
  },
  {
    name: "Téléphone",
    icon: iconPhone,
    url: "tel:0765827083",
  },
];

export default dataLinks
