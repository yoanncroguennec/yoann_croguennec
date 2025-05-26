import { Box, Typography } from "@mui/material";
import QR_Code_Generate from "@/app/components/widgets/qrCodeGenerate/QR_Code_Generate";
import Navbar from "@/app/components/layouts/admin/navbar/Navbar";

// IMGS
const bgAdmin_1 = "/assets/imgs/bgAdmin_1.jpg";

export default function DashBoard_Screen() {
  return (
    <Box
      sx={{
        alignItems: "center",
        backgroundImage: `url(${bgAdmin_1})`,
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Navbar />
      <Typography
        sx={{
          color: "#F0F",
          fontWeight: "bold",
          padding: "25px 0",
          textAlign: "center",
        }}
        variant="h3"
      >
        Tableau de bord
      </Typography>
      <QR_Code_Generate />
    </Box>
  );
}
