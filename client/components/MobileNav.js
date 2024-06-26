import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const MobileNav = () => (
  <motion.ul variants={variants} className="p-[25px] pl-0 absolute w-full">
    <MenuItem />
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];

export default MobileNav;
