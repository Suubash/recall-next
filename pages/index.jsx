import { useRouter } from "next/router";
import Layout from "../Layout/Layout";

export default function Home({ posts }) {
  const router = useRouter();
  return (
    <Layout>
      <h1 className="text-4xl font-bold mb-6">A homepage!!</h1>
      <p className="mb-5">
        Test paragraph? Lorem ipsum dolor, sit amet consectetur adipisicing
        elit. Hic distinctio, vitae voluptate nesciunt molestias recusandae
        perferendis dolore quaerat libero aliquid pariatur doloribus? Obcaecati
        dolorem, amet saepe temporibus culpa pariatur, cumque iure dolorum cum
        quae laboriosam officiis deserunt. Corporis nulla dolorem praesentium
        eveniet, in tempore sint consectetur minima aspernatur eum ratione.
      </p>

      <p className="mb-5">
        Paragraph 2? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Deleniti, accusantium similique! Facere, nobis vel temporibus minus id
        minima aut totam doloremque. Corporis facere dolorem, cupiditate eos
        minima doloribus obcaecati rem ad iusto enim magnam earum impedit culpa
        ipsum aliquam laudantium, sapiente a sit laboriosam voluptatum illo
        omnis, est vitae. Esse omnis aliquid non eos nisi! Ipsum debitis saepe
        ab beatae vero, sunt corrupti blanditiis amet qui corporis recusandae
        voluptatem quia?
      </p>
      <p className="mb-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        tenetur atque laboriosam, doloribus quos maiores voluptate deserunt
        asperiores error qui consequuntur quibusdam harum totam culpa ut,
        sapiente nesciunt praesentium placeat nemo eos minus molestias nisi
        quae! Commodi, odit. Nostrum, velit laborum quisquam reiciendis sunt
        vitae, unde eligendi inventore ullam fugit adipisci nesciunt non veniam
        eius porro accusantium quasi consequatur sint animi fugiat neque
        blanditiis? Sit veritatis maiores sequi! Necessitatibus nemo possimus
        sit dolore. Expedita asperiores amet beatae eaque illo. Quam eius omnis
        quas alias, quia est earum aliquid, esse labore, fugit necessitatibus ea
        optio assumenda perferendis fuga quo voluptatum eos!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
        voluptates sunt minus sed. Nulla repudiandae, ratione nesciunt
        blanditiis aspernatur voluptatem.
      </p>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  return {
    props: {
      posts: data,
    },
  };
}
