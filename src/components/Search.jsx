import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACATION FOR TWO PEOPLE</h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti,
            facere quo recusandae architecto, earum, sit similique impedit ipsam
            vitae magni doloremque laboriosam nesciunt unde dolore! Corrupti
            unde ab quod suscipit! Corporis voluptatem, id nobis minima dolores
            doloremque cumque magnam omnis nam quas consequatur ipsum non vero
            error. Numquam illo commodi dolor magnam. Quam, libero expedita
            eveniet fugit animi sint iste? Officiis hic illum reiciendis aliquid
            optio consequuntur corrupti, eum cumque ipsa impedit sed adipisci
            quas, necessitatibus, fuga quo nihil placeat ut qui. Natus molestias
            atque obcaecati aperiam nemo libero ratione. Aut in eius
            perspiciatis officia, minus, natus sequi dolorem exercitationem, ut
            hic tempore rem nihil iure ipsa sunt ratione nulla aperiam?
            Blanditiis, fugiat voluptates corrupti cupiditate dolorem officia
            reiciendis iusto! Esse, ipsa, hic facilis totam architecto eligendi
            vero tenetur enim temporibus maxime cumque quod amet aliquid magnam
            at est maiores.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">ALL-INCLUSIVE COMPANY 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">ALL-INCLUSIVE COMPANY 20 YEARS IN-A-ROW</p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-2">
        <div className="border text-center">
          <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SEVE</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Grande Antigua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="w-full my-2">Rates & Availabilities</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
