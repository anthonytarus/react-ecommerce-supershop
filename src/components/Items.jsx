import { useState } from "react";
import CardItem from "./CardItem";
import Blazers from './shopppings/Blazers'
import Hoodies from "./shopppings/Hoodies";
import Jackets from "./shopppings/Jackets";
import Jeans from "./shopppings/Jeans";
import Shorts from "./shopppings/Shorts";
import Trouser from './shopppings/Trouser'
import Tshirts from "./shopppings/Tshirts";

function Items() {
  const sideItems = [
    "Jackets & Coats",
    "Hoodies",
    "T-shirts & Vests",
    
    "Blazers & Suits",
    "Jeans",
    "Trousers",
    "Shorts",
    
  ];
  const [active, setActive] = useState(0);
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-8 mx-auto">
          <div class="lg:flex lg:-mx-2">
            <div class="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
              {sideItems.map((item, index) => (
                <p
                  onClick={() => setActive(index)}
                  class={`block font-medium text-gray-500 dark:text-gray-300 hover:underline cursor-pointer ${
                    active === index ? "text-blue-600 dark:text-blue-500" : ""
                  }`}
                >
                  {item}
                </p>
              ))}
            </div>

            <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
              <div class="flex items-center justify-between text-sm tracking-widest uppercase ">
                <p class="text-gray-500 dark:text-gray-300">6 Items</p>
                <div class="flex items-center">
                  <p class="text-gray-500 dark:text-gray-300">Sort</p>
                  <select class="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                    <option className="bg-gray-100" value="#">
                      Recommended
                    </option>
                    <option className="bg-gray-100" value="#">
                      Size
                    </option>
                    <option className="bg-gray-100" value="#">
                      Price
                    </option>
                  </select>
                </div>
              </div>
              {/* side items */}
              <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {active === 0 && (
                  <div>
                    <Jackets />
                  </div>
                )}
                {active === 1 && (
                  <div>
                    <Hoodies/>
                  </div>
                )}
                {active === 2 && (
                  <div>
                    <Tshirts/>
                  </div>
                )}
                {active === 3 && (
                  <div>
                    <Blazers/>
                  </div>
                )}
                {active === 4 && (
                  <div>
                    <Jeans />
                  </div>
                )}
                {active === 5 && (
                  <div>
                    <Trouser />
                  </div>
                )}{active === 6 && (
                    <div>
                      <Shorts />
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Items;
