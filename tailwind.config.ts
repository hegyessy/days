import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    fontFamily: {
      "mono": [
        "Operator Mono A",
      ],
    },
  },
} satisfies Config;
