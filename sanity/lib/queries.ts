import { groq } from "next-sanity";

export const settingsQuery = groq`*[_type == "settings"][0]`;

const postFields = /* groq */ `
  _id,
  "status": select(_originalId in path("drafts.**") => "draft", "published"),
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  "date": coalesce(date, _updatedAt),
  "author": author->{"name": coalesce(name, "Anonymous"), picture},
`;

export const heroQuery = groq`*[_type == "post" && defined(slug.current)] | order(date desc, _updatedAt desc) [0] {
  content,
  ${postFields}
}`;

export const moreStoriesQuery = groq`*[_type == "post" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
  ${postFields}
}`;

export const postQuery = groq`*[_type == "post" && slug.current == $slug] [0] {
  content,
  ${postFields}
}`;

export const testimonialsQuery = groq`*[_type == "testimonial"] | order(_createdAt desc){
  _id,
  clientName,
  review,
  clientImage
}`;

export const blogFeatureQuery = groq`*[_type == "blogPost"] | order(_createdAt desc) {
  _id,
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  excerpt,
  coverImage,
  date,
"author": select(
  defined(author) => author->{"name": coalesce(name, "Anonymous"), picture},
  {"name": "Anonymous"}
)}`;

export const portfolioQuery = groq`*[_type == "portfolioCategory" && slug.current == $slug] [0] {
   _id,
  "title": coalesce(title, "Untitled"),
  "slug": slug.current,
  description,
  coverImage,
  gallery,
}`;
