type modsItemType = {
  name: string;
  localData?: {
    title: string;
    description: string;
    image: string;
    links?: {
      link: string | URL | null | undefined;
      image: string | null | undefined;
      name: string | null | undefined;
    }[];
    version: string;
    type: "mod" | "resource pack" | "data pack" | "modpack";
    state: "maintained" | "unmaintained" | "replaced" | "discontinued" | "broken" | string;
  };
}[]

export const mods: modsItemType = [
  {
    name: "kelip",
  },
  {
    name: "Altie's Day to Day Modpack 2025",
    localData: {
      title: "Altie's Day to Day Modpack 2025",
      description: "the mods in this pack are great for general day to day game play. It includes minimaps, voicechat, and more useful mods!",
      image: "https://media.forgecdn.net/avatars/thumbnails/1151/306/64/64/638719166579678106.png",
      links: [
        {
          "name": "CurseForge",
          "link": "https://www.curseforge.com/minecraft/modpacks/alties-day-to-day-modpack-2025",
          "image": "https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/compact-minimal/available/curseforge_46h.png"
        },
      ],
      version: "1.21.1 V1.0.0-b.1",
      type: "modpack",
      state: "maintained",
    }
  },
  {
    name: "Altie's Craft",
    localData: {
      title: "Altie's Craft",
      description: "Mods like BuildCraft and Galacticraft make this perfect for technical players!",
      image: "https://media.forgecdn.net/avatars/thumbnails/572/93/64/64/637932775439442046.png",
      links: [
        {
          "name": "CurseForge",
          "link": "https://www.curseforge.com/minecraft/modpacks/alties-craft",
          "image": "https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/compact-minimal/available/curseforge_46h.png"
        },
      ],
      version: "1.7.10 V2",
      type: "modpack",
      state: "discontinued | broken",
    }
  },
  {
    name: "Altie's Daily play (Forge)",
    localData: {
      title: "Altie's Daily play (Forge)",
      description: "the mods in this pack are great for general day to day game play. It includes minimaps, world maps, and more useful mods!",
      image: "https://media.forgecdn.net/avatars/thumbnails/793/771/64/64/638151808891933508.png",
      links: [
        {
          "name": "CurseForge",
          "link": "https://www.curseforge.com/minecraft/modpacks/alties-daily-play-forge",
          "image": "https://cdn.jsdelivr.net/npm/@intergrav/devins-badges@3/assets/compact-minimal/available/curseforge_46h.png"
        },
      ],
      version: "1.19 V.1",
      type: "modpack",
      state: "discontinued",
    }
  }
]