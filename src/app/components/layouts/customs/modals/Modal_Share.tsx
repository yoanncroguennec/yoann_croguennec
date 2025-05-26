import { Typography } from "@mui/material";
// STYLES
import { RootModal_Share } from "./StylesModal_Share";
// DATAS
import dataSocialsLinksShare from "@/app/utils/constants/data/dataSocialsLinksShare";

interface Types_Modal_Share {
  openModalShare: boolean;
}

export default function Modal_Share({ openModalShare }: Types_Modal_Share) {

  return (
    openModalShare && (
      <RootModal_Share>
        <Typography variant="h5" sx={{ color: "#F0F", textAlign: "center" }}>
          Partager la fiche sur
        </Typography>
        <div className="socials-container">
          {dataSocialsLinksShare.map((social) => (
            <a
              key={social.name}
              href={social.url}
              rel="noopener noreferrer"
              target="_blank"
              data-social={social.name}
              aria-label={social.name}
            >
              {social.svg}
            </a>
          ))}
        </div>
      </RootModal_Share>
    )
  );
}
