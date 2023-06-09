export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Careless Whisper",
  description: "Using Whisper to transcribe the study sessions",
  mainNav: [
    {
      title: "List of transcripts",
      href: "/dashboard",
      isMentor: false,
    },
    {
      title: "Create the transcript",
      href: "/dashboard/create-post",
      isMentor: true,
    },
  ],
}
