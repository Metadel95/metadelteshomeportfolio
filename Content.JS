// ======================================================================
//  EDIT THIS FILE to change text, links and projects.
//  Put images in the /images folder and reference them by path below.
// ======================================================================
window.SITE = {
  name: "Your Name",
  role: "Digital Designer",
  intro: "I design digital experiences, from websites to visual identities, focused on clarity and strong visual storytelling.",
  status: "Available for work.",
  portrait: "images/profile.jpg",            // portrait photo, 3:4 works best
  logos: [],                                   // optional client logos, e.g. ["images/logos/acme.svg"]

  about: "I'm Your Name, a designer based in your city with years of experience crafting thoughtful, visually driven digital experiences.",
  stats: [["11+","Years of experience"],["60+","Clients worldwide"],["100+","Projects delivered"],["97%","Client satisfaction"]],

  services: [
    ["Web Design",     ["Custom websites","Landing pages","UI/UX design","Website redesigns"]],
    ["Branding",       ["Logo design","Visual identity systems","Brand guidelines","Typography & color"]],
    ["Graphic Design", ["Marketing materials","Social media graphics","Presentation design","Print design"]],
  ],

  stack: [["Framer","Web design"],["Figma","General design tool"],["Photoshop","Image editing"],["Illustrator","Graphic design"],["Midjourney","Asset generation"],["Spline","3D design"]],

  experience: [
    ["Senior Digital Designer","Freelance","2019 - Present","Working with startups, agencies and brands on digital experiences that balance aesthetics and usability."],
    ["Digital Designer","Creative Studio","2015 - 2019","Designed websites and brand visuals alongside developers and creatives."],
  ],

  awards: [["Site of the Day","Awwwards","2025","https://www.awwwards.com/"]],

  testimonials: [
    { name:"Emily T", role:"Product Manager", photo:"images/t1.jpg", quote:"Brings creativity, clarity and professionalism to every project." },
    { name:"Daniel R.", role:"Founder", photo:"images/t2.jpg", quote:"Smooth from start to finish. A clean, modern website that truly represents our brand." },
  ],

  contact: {
    heading: "Reach out.",
    text: "Let's work together to bring your ideas to life.",
    email: "hello@example.com",
    phone: "",
    socials: [["Twitter/X","https://x.com"],["LinkedIn","https://linkedin.com"],["Instagram","https://instagram.com"]],
  },

  // ---- PROJECTS: copy a block to add one. Images go in images/projects/<folder>/ ----
  projects: [
    { title:"Pulse", category:"Graphic Design", cover:"images/projects/pulse/cover.jpg",
      description:"Youth Service 2026.",
      images:["images/projects/pulse/1.jpg","images/projects/pulse/2.jpg"] },
    { title:"Nova", category:"Branding", cover:"images/projects/nova/cover.jpg",
      description:"Short description of the project.",
      images:["images/projects/nova/1.jpg"] },
    { title:"Ember", category:"Branding", cover:"images/projects/ember/cover.jpg",
      description:"Short description of the project.",
      images:["images/projects/ember/1.jpg"] },
    { title:"Zenith", category:"Web Design", cover:"images/projects/zenith/cover.jpg",
      description:"Short description of the project.",
      images:["images/projects/zenith/1.jpg"] },
  ],
};