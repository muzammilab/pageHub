import Cards from "../Components/Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-16 pt-16 items-center justify-center text-center">
          {/* Heading */}
          <h1 className="text-2xl font-semibold md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500 font-semibold text-2xl md:text-4xl">
              Here! :)
            </span>
          </h1>
          {/* Paragraph */}
          <p className="mt-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
            voluptate id itaque praesentium alias corporis ipsum soluta qui
            minima nostrum, assumenda, quaerat nesciunt dolores aperiam quae
            omnis numquam inventore dolorem! Sed tempore tempora, neque tenetur
            quae et labore, possimus facilis voluptate, soluta pariatur!
          </p>
          {/* Button */}
          <Link to="/">
            <button className="btn btn-secondary mt-6">Back</button>
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {" "}
          {/* grid applies the same property as flex. */}
          {list.map((items) => (
            <Cards item={items} key={items.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
