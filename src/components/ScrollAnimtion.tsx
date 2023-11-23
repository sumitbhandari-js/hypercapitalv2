import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
interface Props {
  children?: JSX.Element | JSX.Element[];
  className?: string;
}
const ScrollAnimtion = ({ children, className }: Props) => {
  return (
    <>
      {" "}
      <motion.h1
        className={clsx("", className ? className : "")}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {children}
      </motion.h1>
    </>
  );
};

export default ScrollAnimtion;
