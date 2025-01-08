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
]