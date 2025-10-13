<img width="1943" height="1093" alt="image" src="https://github.com/user-attachments/assets/cc2ff955-17c2-48c7-81c8-479a0f061850" />

# MoffatPortfolio

A modern, minimalist portfolio built with **Astro** and **Tailwind CSS** — designed to showcase the professional work, skills, and achievements of **Moffat Gichure Maina**, a passionate software developer and cybersecurity enthusiast from Kenya.

This portfolio highlights a variety of projects ranging from AI-powered systems to IoT and blockchain-based applications.  
It is fully configurable through a single file (`src/config.ts`), making customization seamless and code-friendly.

> **📬 Connect & Share!**  
> For questions, collaborations, or tech talks, reach out via [**Twitter (X)**](https://twitter.com/GichureMoffat) or [**LinkedIn**](https://linkedin.com/in/moffat-maina-230426225).  
> If you create your own version of this portfolio, share it — I’d love to see it! 🚀

---

## 🌍 Preview

To view the live version of my site, visit:  
👉 [**https://lecturerkarare.github.io/MoffatPortfolio/**](https://lecturerkarare.github.io/MoffatPortfolio/)

---

## 🛠️ Built With

- **[Astro](https://astro.build/)** – Static site generator for modern web apps  
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework  
- **[Tabler Icons](https://tabler.io/icons)** – Free, open-source icons  
- **TypeScript** – Type-safe configuration and clean code  
- **GitHub Pages** – For seamless and free deployment

---

## ⚙️ Configuration

This portfolio is fully configurable via a single file: `src/config.ts`.

It controls all the main sections:

- **Personal Information**: Name, title, and description  
- **Accent Color**: Controls the primary theme color  
- **Social Links**: Email, LinkedIn, Twitter, GitHub  
- **About Section**: Personal introduction  
- **Skills**: Technologies and tools  
- **Projects**: Portfolio showcase  
- **Experience**: Work history  
- **Education**: Academic achievements  

Removing a section automatically hides it from the site.

---

## 🧩 Example Configuration

Here’s the actual configuration used in this portfolio:

```typescript
export const siteConfig = {
  name: "Moffat Gichure Maina",
  title: "Software Developer | Cybersecurity Enthusiast",
  description:
    "Innovative web and mobile developer skilled in full-stack engineering, cloud technologies, and cybersecurity. Passionate about building secure and scalable software solutions.",
  accentColor: "#1d4ed8",
  social: {
    email: "moffatgichuremaina@gmail.com",
    linkedin: "https://linkedin.com/in/moffat-maina-230426225",
    twitter: "https://twitter.com/GichureMoffat",
    github: "https://github.com/lecturerkarare",
  },
  aboutMe:
    "I'm a self-driven software developer from Kenya with experience in designing and developing mobile and web applications that address real-world challenges. I’m passionate about cybersecurity and recently earned the Hackviser Certified Web Pentester certification. I value teamwork, continuous learning, and knowledge sharing as tools for both personal and professional growth.",
  skills: [
    "JavaScript", "React", "Node.js", "Python", "Django", "Flask", "MySQL",
    "SQLite", "HTML", "CSS", "Android", "TensorFlow", "Docker", "Cybersecurity", "Git"
  ],
  projects: [
    {
      name: "Kijabe",
      description:
        "Java-based application built to streamline organizational data management with modular backend entities. Developed using JDL Studio for schema design.",
      link: "https://github.com/lecturerkarare/kijabe",
      skills: ["Java", "Spring", "JDL Studio"],
    },
    {
      name: "DeepLearning - COVID & Pneumonia Detection",
      description:
        "A convolutional neural network (CNN) model for distinguishing COVID-19 and Pneumonia from X-ray images using TensorFlow and Jupyter Notebook.",
      link: "https://github.com/lecturerkarare/deeplearning",
      skills: ["Python", "TensorFlow", "NumPy", "Pandas"],
    },
    {
      name: "Arduino Control over Web Server",
      description:
        "IoT project that enables remote control of Arduino devices through a web interface for real-time monitoring and automation.",
      link: "https://github.com/lecturerkarare/arduino-control",
      skills: ["HTML", "IoT", "Arduino", "Networking"],
    },
    {
      name: "Project Overview – Introduction to NoSQL Databases",
      description:
        "A data engineering project that integrates data movement between SQL and NoSQL databases, demonstrating cross-database querying and analytics.",
      link: "https://github.com/lecturerkarare/Project-Overview-Introduction-to-NoSQL-Databases",
      skills: ["Jupyter Notebook", "NoSQL", "MongoDB", "Data Migration"],
    },
    {
      name: "IoT Decentralized Application (IoT DApp)",
      description:
        "Blockchain-enabled IoT project combining data collection and smart contracts to enhance security and data integrity in IoT systems.",
      link: "https://github.com/lecturerkarare/iot_dapp",
      skills: ["IoT", "Blockchain", "Web3.js", "Solidity"],
    }
  ],
  experience: [
    {
      company: "Meliora Software Company",
      title: "Software Developer",
      dateRange: "2023 - Present",
      bullets: [
        "Developing secure and scalable mobile and web solutions using React and Django.",
        "Collaborated with cross-functional teams to build and deploy software products.",
        "Implemented authentication and encryption features for client web platforms.",
      ],
    }
  ],
  education: [
    {
      school: "Laikipia University, Nyahururu",
      degree: "BSc in Computer Science",
      dateRange: "2019 - 2023",
      achievements: [
        "Developed and presented IoT Smart Irrigation System.",
        "Participated in Huawei and Cisco ICT competitions.",
        "Completed Hackviser Certified Web Pentester program.",
      ],
    }
  ],
};

```

### Icons

The template uses [Tabler Icons](https://tabler.io/icons) for all icons. If you wish to add more icons and have it look consistent with what's already there, you can browse through their extensive icon library.

## Project Structure

```
devportfolio/
├── public/
│   └── favicon.svg          # Site favicon
├── src/
│   ├── components/          # Astro components
│   │   ├── About.astro      # About section
│   │   ├── Education.astro  # Education section
│   │   ├── Experience.astro # Work experience section
│   │   ├── Footer.astro     # Site footer
│   │   ├── Header.astro     # Navigation header
│   │   ├── Hero.astro       # Hero/intro section
│   │   └── Projects.astro   # Projects showcase
│   ├── pages/
│   │   └── index.astro      # Main page layout
│   ├── styles/
│   │   └── global.css       # Global styles
│   └── config.ts            # Site configuration
├── astro.config.mjs         # Astro configuration
├── package.json             # Project dependencies
├── tailwind.config.js       # Tailwind configuration
└── tsconfig.json            # TypeScript configuration
```

## Local Development

If you'd like to run it locally:

```
git clone https://github.com/lecturerkarare/MoffatPortfolio.git
cd MoffatPortfolio
npm install
npm run dev
```

After that, start up the Astro dev server with:

```
npm run dev
```

## Deployment

The template can be deployed to any static hosting service easily (and in most cases, completely free). Here are some options:

- To deploy with Netlify, [click here](https://docs.astro.build/en/guides/deploy/netlify/).
- To deploy with Vercel, [click here](https://docs.astro.build/en/guides/deploy/vercel/).
- To deploy with GitHub Pages, [click here](https://docs.astro.build/en/guides/deploy/github/).
- To deploy with Cloudflare Pages, [click here](https://docs.astro.build/en/guides/deploy/cloudflare/).
- To deploy with Render, [click here](https://docs.astro.build/en/guides/deploy/render/).

Want to deploy somewhere else? Find more guides [here](https://docs.astro.build/en/guides/deploy/).

## Changelog

To view the changelog, see CHANGELOG.md.

## License

This project is fully and completely MIT. See LICENSE.md.

## Questions?

Feel free to reach out on [linkedin](https://linkedin.com/in/moffat-maina-230426225) if you have any questions or need help.
