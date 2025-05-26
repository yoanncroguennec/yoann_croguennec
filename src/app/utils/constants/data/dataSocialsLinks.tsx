import { ReactNode } from "react";

interface DataSocialsLinks {
  name: string;
  url: string;
  svg: ReactNode;
}

const dataSocialsLinks: DataSocialsLinks[] = [
  {
    name: "Contactez-moi",
    url: "tel:+0765827083",
    svg: (
      <svg
        width="45"
        height="45"
        viewBox="0 0 25 25"
        fill="#34A853"
        style={{ height: "32px", transition: "fill 0.3s ease" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1v3.61a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.6a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.3 2.22z" />
      </svg>
    ),
  },
  {
    name: "Email",
    url: "mailto:yoann.croguennec.pro@gmail.com",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        style={{ height: "32px", transition: "fill 0.3s ease" }}
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
  {
    name: "Ma chaîne Youtube",
    url: "https://www.youtube.com/@yoann_croguennec_developppeur",
    svg: (
      <svg
        viewBox="0 0 48 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: "32px", transition: "fill 0.3s ease" }}
        width="32"
        height="32"
      >
        <path
          fill="#FF0000"
          d="M46.5 5.5c-.6-2.3-2.4-4.1-4.7-4.7C38.3 0 24 0 24 0S9.7 0 6.2.8C3.9 1.4 2.1 3.2 1.5 5.5 0.7 9 0.7 17 0.7 17s0 8 0.8 11.5c.6 2.3 2.4 4.1 4.7 4.7 3.5.8 18.8.8 18.8.8s14.3 0 17.8-.8c2.3-.6 4.1-2.4 4.7-4.7.8-3.5.8-11.5.8-11.5s0-8-.8-11.5z"
        />
        <path fill="#fff" d="M19 24.5v-15l13 7.5-13 7.5z" />
      </svg>
    ),
  },
  {
    name: "Mon LinkedIn",
    url: "http://linkedin.com/in/yoann-croguennec/",
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{ height: "32px", transition: "fill 0.3s ease" }}
        fill="#0A66C2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.447 20.452H17.2V15.3C17.2 14.1 17.177 12.6 15.5 12.6C13.796 12.6 13.55 13.896 13.55 15.2V20.45H10.3V9H13.4V10.5H13.45C13.9 9.7 14.95 8.85 16.5 8.85C19.6 8.85 20.45 10.8 20.45 13.6V20.452ZM5.337 7.433C4.194 7.433 3.267 6.506 3.267 5.362C3.267 4.218 4.194 3.291 5.337 3.291C6.481 3.291 7.408 4.218 7.408 5.362C7.408 6.506 6.481 7.433 5.337 7.433ZM6.9 20.45H3.8V9H6.9V20.45ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.27C0 23.225 0.792 24 1.771 24H22.222C23.2 24 24 23.225 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" />
      </svg>
    ),
  },
  {
    name: "Mon GitHub",
    url: "https://github.com/yoanncroguennec/",
    svg: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{ height: "32px", transition: "fill 0.3s ease" }}
        width="32"
        height="32"
      >
        <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.21 11.387c.6.113.82-.26.82-.577v-2.234c-3.34.724-4.04-1.61-4.04-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.302 3.5.996.11-.774.42-1.303.76-1.603-2.665-.3-5.466-1.33-5.466-5.932 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.322 3.3 1.23a11.46 11.46 0 016 0c2.29-1.552 3.3-1.23 3.3-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.47 5.93.43.37.81 1.1.81 2.22v3.293c0 .32.22.694.82.577A12.003 12.003 0 0024 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export default dataSocialsLinks;
