import { Box, Typography } from "@mui/material";
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton } from "react-share";

interface Types_Modal_Share {
  openModalShare: boolean ;
  shareUrl: string;
}

export default function Modal_Share({ openModalShare, shareUrl } : Types_Modal_Share) {
  return (
    openModalShare && (
      <Box
        sx={{
          position: "absolute",
          zIndex: 999,
          background: "rgba(255, 255, 255, 0.06)",
          backdropFilter: "blur(5px)",
          border: "2px solid #FFF",
          borderRadius: "15px",
          padding: "10px 20px",
        }}
      >
        <Typography variant="h5" sx={{ color: "red", mb: 1 }}>
          Partager sur
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon round size={35} />
          </FacebookShareButton>
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon round size={35} />
          </LinkedinShareButton>
          <EmailShareButton url={shareUrl}>
            <EmailIcon round size={35} />
          </EmailShareButton>
        </Box>
      </Box>
    )
  );
}
