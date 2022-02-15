import React, { useEffect, useState } from "react";
import info_style from "./info.module.css";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { interval, tap } from "rxjs";

const fields = [
  {
    id: "trees",
    info: "50",
    color: "#57C35B",
  },
  {
    id: "water",
    info: "50L",
    color: "#50C0E4",
  },
  {
    id: "petrol",
    info: "50L",
    color: "#78243E",
  },
];

const Info = () => {
  const [id, setID] = useState(fields[0].id);
  useEffect(() => {
    interval(2000)
      .pipe(tap((i) => setID(fields[i % 3].id)))
      .subscribe();
  }, []);
  return (
    <div className={info_style.container}>
      In total ati salvat aproximati:
      <div className={info_style.info__container}>
        <AnimatePresence>
          {fields.map((field) =>
            field.id === id ? (
              <motion.div
                style={{
                  color: field.color,
                }}
                className={info_style.info}
                key={field.id}
                initial={{
                  y: -50,
                  x: 0,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  x: 0,
                  opacity: 1,
                }}
                exit={{
                  y: 50,
                  x: 0,
                  opacity: 0,
                }}
              >
                {field.info} {field.id}
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Info;
