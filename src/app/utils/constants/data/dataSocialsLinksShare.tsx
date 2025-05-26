import { ReactNode } from "react";

interface DataSocialsLinksShare {
  name: string;
  url: string;
  svg: ReactNode;
}

const url = "https://www.yoann-croguennec.fr/";
const encodedUrl = encodeURIComponent(url);
const subject = encodeURIComponent("Yoann Croguennec - Développeur Fullstack");
const body = encodeURIComponent(
  `Yoann Croguennec - Développeur Fullstack :\n${url}`,
);

const dataSocialsLinksShare: DataSocialsLinksShare[] = [
  {
    name: "Facebook",
    url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        style={{ height: "32px", transition: "fill 0.3s ease" }}
        viewBox="0 0 24 24"
        fill="#1877F2"
      >
        <path
          d="M22.675 0h-21.35C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 
        1.325 24H12.82v-9.294H9.692V11.01h3.128V8.414c0-3.1 
        1.893-4.788 4.659-4.788 1.325 0 2.463.099 
        2.794.143v3.24h-1.918c-1.505 0-1.796.715-1.796 
        1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116c.73 
        0 1.324-.593 1.324-1.326V1.326C24 .593 23.406 0 
        22.675 0z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    svg: (
      <svg
        width="25"
        height="25"
        style={{ height: "32px", transition: "fill 0.3s ease" }}
        viewBox="0 0 24 24"
        fill="#0A66C2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.447 20.452H17.2V15.3C17.2 14.1 17.177 12.6 15.5 12.6C13.796 12.6 13.55 13.896 13.55 15.2V20.45H10.3V9H13.4V10.5H13.45C13.9 9.7 14.95 8.85 16.5 8.85C19.6 8.85 20.45 10.8 20.45 13.6V20.452ZM5.337 7.433C4.194 7.433 3.267 6.506 3.267 5.362C3.267 4.218 4.194 3.291 5.337 3.291C6.481 3.291 7.408 4.218 7.408 5.362C7.408 6.506 6.481 7.433 5.337 7.433ZM6.9 20.45H3.8V9H6.9V20.45ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.27C0 23.225 0.792 24 1.771 24H22.222C23.2 24 24 23.225 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: `mailto:?subject=${subject}&body=${body}`,
    svg: (
      <svg
        width="30"
        height="30"
        style={{ height: "32px", transition: "fill 0.3s ease" }}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
          stroke="#E53935"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 6L12 13L2 6"
          stroke="#E53935"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default dataSocialsLinksShare;
