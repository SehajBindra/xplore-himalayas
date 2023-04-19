type Base = {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: string;
};

interface SanityBody {
  _id: string;
  _createdAt: string;
  // _updatedAt:string
  _rev: string;
  _type: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "refrence";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  name: string;
  backgroundInformation: string;
  role: string;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  title: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
export interface Experience extends SanityBody {
  _type: "experience";
  comapany: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentWorkinghere: boolean;
  jobTitle: string;
  summary: string;

  technologies: Technology[];
}

export interface Project extends SanityBody {
  _type: "projects";
  title: string;
  image: Image;
  linktoBuild: string;
  sourcecodelink: string;
  shortdescription: string;
  summary: blockContent;
  slug: string;
  technologies: Technology[];
}

export interface Skill extends SanityBody {
  _type: "social";
  iamge: Image;
  title: string;
}
interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;

  slug: Slug;
}

interface Image {
  _type: "image";
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
  _key: string;
  _type: "span";
  children: Span[];
  marks: string;
  text: string;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface MainImage {
  _type: "image";
  asset: Reference;
}

interface Title {
  _type: "string";
  current: "string";
}
