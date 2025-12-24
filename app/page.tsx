"use client";
import Image from "next/image";
import {
  Container,
  Button
} from "@mui/material";

export default function Home() {
  return (
    <div className=" bg-[url(https://cdn.shopify.com/s/files/1/0028/7509/7153/files/Smart_city_and_abstract_dot_point_connect_with_gradient_line_stock_photo_1920x.jpg?v=1596750954)] bg-cover bg-center bg-no-repeat p-5 flex place-items-center  bg-fixed">
      <Container maxWidth="md" className="my-5 py-5 bg-slate-100 rounded ">
        <div className="space-y-5">
          <div className="w-full rounded overflow-hidden">
            <Image src="https://cdn.shopify.com/s/files/1/0028/7509/7153/files/C_T_Solution_is_now_Premio_Inc.png?v=1766518766" alt="C&T is becoming Premio Inc." width={900} height={300} unoptimized />
          </div>

          <h1 className="capitalize text-center">Thank you for being part of our journey! </h1>

          <p>
            We are now part of Premio&apos;s global brand. Our unified global structure allows us to innovate faster, scale with confidence, and support the growing demands of edge AI and industrial automation worldwide.
          </p>

          <div className="text-center">
            <Button
              sx={{
                backgroundColor: "#7d2248",
                color: "var(--color-white)"
              }}
              href="https://premioinc.com"
              component="a"
              variant="contained"
            >
              Visit Premio Inc.
            </Button>
          </div>
          <hr className="border-zinc-300 hidden lg:block" />
          <div className="grid items-start justify-center grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="col lg:border-r border-zinc-300">
              <div className="my-3 flex justify-center">
                <Image src="https://cdn.shopify.com/s/files/1/0028/7509/7153/files/C_T_Solution_transition_to_Premio_Press_Release.png?v=1766518766" width={300} height={300} alt="" unoptimized />
              </div>
              <p>
                As of January 1, 2026, Premio Inc. and C&T Solution Inc. unify under one global brand to strengthen engineering, manufacturing, and support worldwide.
              </p>

              <div className="my-3 text-center">
                <Button
                  sx={{
                    backgroundColor: "#7d2248",
                    color: "var(--color-white)"
                  }}
                  href="https://premioinc.com/blogs/press-kits/premio-inc-united-states-and-c-t-solution-inc-taiwan-consolidate-under-one-brand-to-advance-edge-ai-leadership-in-2026-and-beyond"
                  component="a"
                  variant="contained"
                >
                  Read Press Release
                </Button>
              </div>
            </div>
            <div className="col">
              <div className="my-3 flex justify-center">
                <Image src="https://cdn.shopify.com/s/files/1/0028/7509/7153/files/Industrial_Computing_Solutions_300x.png?v=1766518766" width={300} height={300} alt="" unoptimized />
              </div>

              <ul className="list-disc ms-5">
                <li>X86 Super-Rugged Edge Computers  </li>
                <li>X86 Semi-Rugged Industrial Computers </li>
                <li>NVIDIA Jetson Edge AI Computers  </li>
                <li>Industrial Edge AI Servers  </li>
                <li>Industrial HMIs and Panel PCs  </li>
                <li>Industrial Motherboards and SBCs  </li>
              </ul>

              <div className="my-3 text-center">
                <Button
                  sx={{
                    backgroundColor: "#7d2248",
                    color: "var(--color-white)"
                  }}
                  href="https://premioinc.com/products"
                  component="a"
                  variant="contained"
                >
                  Explore Products
                </Button>
              </div>
            </div>
          </div>

          <hr className="border-zinc-300 hidden lg:block" />
          <div className="grid items-start justify-center grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="lg:border-r border-zinc-300">
              <div className="my-3 flex justify-center">
                <Image src="https://cdn.shopify.com/s/files/1/0028/7509/7153/files/Premio_Inc._LinkedIn_300x.png?v=1766603382" width={300} height={300} alt="" unoptimized />
              </div>

              <p>Stay informed with the latest news and product announcements by following Premio&apos;s LinkedIn! </p>

              <div className="my-3 text-center">
                <Button
                  sx={{
                    backgroundColor: "#7d2248",
                    color: "var(--color-white)"
                  }}
                  href="https://linkedin.com/company/premio-inc-/"
                  component="a"
                  variant="contained"
                >
                  Follow Us
                </Button>
              </div>
            </div>

            <div>

              <div className="my-3 flex justify-center">
                <Image src="https://cdn.shopify.com/s/files/1/0028/7509/7153/files/Premio_Inc._YouTube_300x.png?v=1766603382" width={300} height={300} alt="" unoptimized />
              </div>


              <p>Subscribe to Premio&apos;s Youtube Channel to watch our latest videos, demos, and technical insights! </p>

              <div className="my-3 text-center">
                <Button
                  sx={{
                    backgroundColor: "#7d2248",
                    color: "var(--color-white)"
                  }}
                  href="https://www.youtube.com/@premioinc"
                  component="a"
                  variant="contained"
                >
                  Subscribe Now
                </Button>
              </div>

            </div>
          </div>


        </div>
      </Container>
    </div>
  );
}
