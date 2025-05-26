import { Box } from "@mui/material";
import Link from "next/link";
// ICONS
import { IoHomeOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <Box
      sx={{
        background: "#000",
        height: "80px",
        padding: "25px 50px",
        width: "100vw",
      }}
    >
      <Link href="/">
        <IoHomeOutline color="#FFF" size={35} />
      </Link>
    </Box>
  );
}
