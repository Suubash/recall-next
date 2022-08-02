import Layout from "../../Layout/Layout";

export async function getStaticPaths() {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  const paths = posts.map((post) => ({ params: { id: post.id.toString() } }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  ).then((res) => res.json());
  return {
    props: {
      post,
    },
  };
}

function Blog({ post }) {
  return (
    <Layout>
      <div>
        <h1 className="text-5xl mb-6">{post?.title}</h1>
        <p className="mb-5">{post?.body}.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          reprehenderit ullam unde fugiat dolor deleniti! Error fugit recusandae
          exercitationem eaque laudantium impedit eos rem unde minus repellendus
          aliquam quos temporibus cumque id pariatur nesciunt eum architecto
          tempore iure, rerum necessitatibus, nisi itaque quaerat. Facilis quae
          nulla neque a! Rerum debitis molestias recusandae itaque. Commodi sed
          unde reprehenderit debitis hic repudiandae ratione iste suscipit
          quidem ducimus tempore saepe earum in nostrum vero cupiditate quod
          iure a, laudantium perspiciatis? Nemo, debitis repellendus! Esse enim
          soluta minima quibusdam aperiam dolorem dolor ipsam itaque atque cum
          non quia quidem fugit, laborum adipisci odit obcaecati reiciendis
          iure! Distinctio perspiciatis numquam amet temporibus ad eligendi?
          Blanditiis deserunt cumque nostrum ipsum, id minima ratione aliquam
          ad. Minima quas accusantium in minus. Placeat, ducimus. Maiores
          repellat rerum hic error doloribus dignissimos sint deleniti,
          sapiente, vero similique fuga obcaecati ut eaque id illo architecto,
          non assumenda delectus. Praesentium, reprehenderit harum maiores
          nostrum iusto eum, adipisci doloribus quisquam eius ut sit quasi dolor
          nobis similique perspiciatis quibusdam optio voluptate. Numquam
          voluptatum iure consequuntur, fugiat corrupti commodi labore vitae
          dignissimos quasi magni ullam. Doloribus quam inventore qui? Eaque
          ipsam nulla enim, consectetur soluta unde provident saepe voluptate
          nam suscipit nemo, tempora maxime! Ipsam, adipisci sit eveniet earum
          voluptas doloremque fuga facere in necessitatibus inventore mollitia
          debitis autem unde atque obcaecati dolorem saepe neque eius iure odit
          non deserunt architecto quod? Libero saepe eum eveniet deleniti iste
          beatae, dolor illum enim commodi explicabo modi quasi veritatis
          cupiditate delectus a nobis alias, earum aperiam vitae veniam culpa
          tenetur praesentium reprehenderit asperiores? A tempora quas incidunt
          laudantium earum, molestias eaque repudiandae explicabo illo molestiae
          delectus maiores modi voluptatibus magni, in, inventore culpa
          aspernatur. Tempore eum adipisci ab cumque neque blanditiis provident
          sit molestiae totam eaque tempora odit, ad beatae obcaecati suscipit?
          Error, reprehenderit non!
        </p>
      </div>
    </Layout>
  );
}

export default Blog;
