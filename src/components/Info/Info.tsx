import React, { useEffect, useRef, useState } from "react";
import info_style from "./info.module.css";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { interval, tap } from "rxjs";
import type { User, UserConsumer } from "../../App";
const info = (total: number) => [
  {
    id: "copaci",
    info: `${(total * 0.217 * 3.7).toFixed(1)}`,
    color: `#57C35B`,
  },
  {
    id: "apa",
    info: `${(total * 0.217 * 3.7).toFixed(1)}`,
    color: "#50C0E4",
  },
  {
    id: "petrol",
    info: `${(total * 2.402 * 3.7).toFixed()}`,
    color: "#78243E",
  },
];

const Info: UserConsumer = ({ users }) => {
  const fields = useRef<{ id: string; info: string; color: string }[]>(
    [] as { id: string; info: string; color: string }[]
  );
  const [id, setID] = useState("");

  useEffect(() => {
    users
      ? (fields.current = info(
          users?.reduce((prev, curr) => prev + curr.score, 0)
        ))
      : 0;
  }, [users]);

  useEffect(() => {
    interval(2000)
      .pipe(tap((i) => setID(fields.current[i % 3]?.id)))
      .subscribe();
  }, []);

  return (
    <div className={info_style.container}>
      In total ati salvat aproximati:
      <div className={info_style.info__container}>
        <AnimatePresence>
          {fields.current.map((field) =>
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
