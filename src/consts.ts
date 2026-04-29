import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Shan’s Blog",
  DESCRIPTION: "Astro Micro 是一个无障碍、轻量级的博客。",
  EMAIL: "yishanliang2002@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "首页",
  DESCRIPTION: "Astro Micro 是一个适用于 Astro 的无障碍主题。",
};

export const BLOG: Metadata = {
  TITLE: "博客",
  DESCRIPTION: "这里收录了我热衷话题的文章。",
};

export const PROJECTS: Metadata = {
  TITLE: "项目",
  DESCRIPTION:
    "这里收录了我的项目。",
};

export const SOCIALS: Socials = [
  // {
  //   NAME: "X（原 Twitter）",
  //   HREF: "https://twitter.com/boogerbuttcheek",
  // },
  // {
  //   NAME: "GitHub",
  //   HREF: "https://github.com/trevortylerlee",
  // },
  // {
  //   NAME: "个人网站",
  //   HREF: "https://trevortylerlee.com",
  // },
];
