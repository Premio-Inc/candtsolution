import Image from "next/image";
import {
  Container,
  Button
} from "@mui/material";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url(https://cdn.shopify.com/s/files/1/0028/7509/7153/files/Smart_city_and_abstract_dot_point_connect_with_gradient_line_stock_photo_1920x.jpg?v=1596750954)] bg-cover bg-center bg-no-repeat container-fluid p-5 flex align-center justify-center">
      <Container maxWidth="md" className="my-5 py-5 bg-slate-100 mx-auto row justify-center align-center rounded min-h-[80vh]">
        <div className="col-lg-8 space-y-5">
          <div className="w-full rounded overflow-hidden">
            <Image src="https://picsum.photos/900/300" alt="C&T is becoming Premio Inc." width={900} height={300} unoptimized />
          </div>

          <h1 className="capitalize text-center">C&T is becoming Part of Premio Inc.</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at itaque optio. Quaerat totam delectus quis aliquam sunt aperiam, facilis ab laudantium libero natus ducimus id dolore laborum beatae fugit!

          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, blanditiis aliquam? Animi nam deserunt obcaecati ex maxime at soluta voluptatem, harum eaque perspiciatis error aperiam culpa illum maiores. Laboriosam, aut?
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere quisquam neque quo iure tempore culpa autem consequuntur ea facilis corporis libero sapiente assumenda, nobis et repellendus commodi. Possimus, eveniet labore!
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
              Go to Premio Inc.
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
