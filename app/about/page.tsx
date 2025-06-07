import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="w-11/12 ">
      <header className="mb-4 w-full text-center">
        <h1 className="text-5xl font-bold ">About This Tool</h1>
      </header>

      <section className="p-2 text-lg">
        <p className="mb-4 ">
          Welcome to your friendly neighborhood Cairn RPG preparation companion!
        </p>
        <p className="mb-4 ">
          Are you a brave Game Master diving into the enchanting world of Cairn
          RPG? Or perhaps a seasoned storyteller looking to sprinkle some
          spontaneity into your sessions? Either way, you've come to the right
          place! Our tool is designed with you in mind—because we believe that
          prep time should be as smooth as a wizard's spell and as exciting as a
          rogue's sneak attack.
        </p>
        <p className="mb-4 ">
          With our searchable treasure trove of monsters, spells, and relics,
          you'll have everything you need at your fingertips! Want to summon
          that pesky goblin for the next encounter or whip up a dazzling spell
          to perplex your players? Just a few clicks and voilà! Instant access
          to a plethora of lore awaiting your command.
        </p>
        <p className="mb-4 ">
          But that's not all! Feeling adventurous? Dive into our random table
          generator. It'll whisk you away into the unknown, presenting
          unexpected challenges and treasures for your players. Need to create
          something on the fly? No problem! Build your own custom tables using
          our extensive library or the delightful randomness of our pre-made
          tables.
        </p>
        <p className="mb-4 ">
          This tool was born from our love of Cairn RPG's slim rules and
          creative commons spirit. We wanted to conjure something magical on top
          of the already fantastic resources available. So, whether you're just
          starting your storytelling journey or looking to enhance your seasoned
          adventures, this site is for you!
        </p>
        <p className="">
          Now go forth, brave GMs! Prepare quickly, improvise boldly, and may
          your adventures be filled with laughter, thrills, and the occasional
          surprise!
        </p>
      </section>
    </div>
  );
}
