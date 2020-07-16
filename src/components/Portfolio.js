import React from "react";
import posed from "react-pose";
import { Link } from "react-router-dom";
import CloudinaryImage from "./CloudinaryImage";

const Portfolio = posed.div({
  enter: { staggerChildren: 60, delay: 150 },
  exit: { staggerChildren: 20, staggerDirection: -1 }
});

const PortfolioItem = posed.div({
  enter: { y: 0, opacity: 1 },
  exit: { y: 75, opacity: 0 }
});

const projects = [
  { id: 0, path: "/la-bergerie", img_url: "la-bergerie", img_alt: "La Bergerie web project", title: "La Bergerie", category: "Web" },
  { id: 1, path: "/three-streams", img_url: "three-streams", img_alt: "Three Streams logo design concept", title: "Three Streams", category: "Digital"},
  { id: 2, path: "/e-commerce-concept", img_url: "ecommerce-landing-page", img_alt: "eCommerce landing page design concept", title: "Ecommerce concept", category: "Digital" },
  { id: 3, path: "/product-detail-concept", img_url: "product-detail-concept", img_alt: "Product detail page design concept", title: "Product page concept", category: "Digital" },
  { id: 4, path: "/bethany", img_url: "bethany", img_alt: "A2 Printed poster", title: "Bethany", category: "Print" },
  { id: 5, path: "/zuno", img_url: "zuno", img_alt: "ZUNO Fruit Teas", title: "ZUNO", category: "Branding" },
  { id: 6, path: "/henry", img_url: "henry", img_alt: "A2 Printed poster", title: "Henry", category: "Print" },
  { id: 7, path: "/no-14", img_url: "no-14", img_alt: "No.14 - web project", title: "No.14 Verbier", category: "Web" },
  { id: 8, path: "/moonshine", img_url: "moonshine", img_alt: "Illustration for large format print", title: "Moonshine", category: "Digital" },
  { id: 9, path: "/diner", img_url: "open-24-hours", img_alt: "Vinyl wrap designs", title: "Diner wrap", category: "Print" },
  { id: 10, path: "/milkyway", img_url: "milkyway", img_alt: "Milkyway - Photography", title: "Milkyway", category: "Photography" },
  { id: 11, path: "/seetheworld", img_url: "seetheworld", img_alt: "SeeTheWorld - web project", title: "SeeTheWorld", category: "Web" },
];

export default () => (
  <div className="o-Container">
    <Portfolio className="o-Grid c-Portfolio">
      {projects.map(i => (
        <PortfolioItem
          key={i.id}
          className="c-Portfolio--Item o-Grid--Item 1/2-TabletPortraitUp 1/3-TabletLandscapeUp"
        >
          <Link
            to={i.path}
            aria-label={"View project - " + i.img_alt}
          >
            <CloudinaryImage
              src={"Portfolio/" + i.img_url}
              alt={i.img_alt}
              maxWidth={366}
              height={366}
            />
            <div className="c-Portfolio--Content">
              <div className="c-Portfolio--Text">
                <h5 className="c-Portfolio--Title">{i.title}</h5>
                <p className="c-Portfolio--Category">{i.category}</p>
              </div>
            </div>
            <div className="c-Portfolio--Background"></div>
          </Link>
        </PortfolioItem>
      ))}
    </Portfolio>
  </div>
);
