import React from 'react';
import { LuFileSpreadsheet } from "react-icons/lu";
import { GoDownload } from "react-icons/go";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";

function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference} // This ensures the card stays inside the bounding box
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      className="relative flex-shrink-0 overflow-hidden w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white py-10 px-8"
    >
      <LuFileSpreadsheet />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>

      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between mb-3 px-8 py-3">
          <h5>{data.filesize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? <IoMdCloseCircle /> : <GoDownload size=".7em" color="#fff" />}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } h-10 flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
