import React from 'react';

const StyleListDaisy = () => {
     return(

        <li>
        <ul className="flex flex-wrap gap-4 p-4">
          {[
            { name: "Default", value: "" },
            { name: "Light", value: "light" },
            { name: "Lemonade", value: "lemonade" },
            { name: "Valentine", value: "valentine" },
            { name: "BZzzz", value: "bumblebee" },
          ].map((theme) => (
            <li key={theme.value}>
              <button
                className="px-4 py-2 m-2 text-sm font-bold capitalize rounded-lg shadow-md bg-base-200 focus:outline-none"
                data-set-theme={theme.value}
                onClick={() =>
                  document.documentElement.setAttribute(
                    "data-theme",
                    theme.value
                  )
                }
              >
                {theme.name}
              </button>
            </li>
          ))}
        </ul>
      </li>
     )
}


export default StyleListDaisy;