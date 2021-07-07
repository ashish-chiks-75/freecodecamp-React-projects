import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const { showSubmenu, location, page } = useGlobalContext();
  const [columns, setColumns] = useState("col-2");
  const submenuRef = useRef(null);

  useEffect(() => {
    setColumns("col-2");
    const submenu = submenuRef.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (page.links.length === 3) setColumns("col-3");
    else if (page.links.length > 3) setColumns("col-4");
  }, [location, page]);

  return (
    <aside
      className={`submenu ${showSubmenu ? "show" : null}`}
      ref={submenuRef}
    >
      <h4>{page.page}</h4>
      <div className={`submenu-center ${columns}`}>
        {page.links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a key={index} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
