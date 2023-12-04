import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

function Home() {
  return (
    <section className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Welcome back!</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-3 mt-4"></div>
        </div>
        <ListItem
          image="/images/liked.png"
          name="Liked Songs"
          href="liked-songs"
        />
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-semibold text-2xl">Your songs</h2>
        </div>
      </div>
    </section>
  );
}

export default Home;
