"use client"

import { Article } from "@/components/atoms/Article";
import { Container } from "@/components/atoms/Container";
import { Heading } from "@/components/atoms/Heading";
import { FormCustom } from "@/components/organisms/FormCustom";
import { ListCustom } from "@/components/organisms/ListCustom";
import { useDictionary } from "@/hooks/useDictionary";
import { socialList } from "@/utils/Data";
import { motion } from "framer-motion";

export default function Page(){
  const { dictionary } = useDictionary();

  return (
    <Article className="lg:pt-52 pt-40">
      <Container className="flex justify-center lg:h-[600px] h-[550px]">
        <div className="lg:w-1/2 w-11/12 lg:px-10 px-0 relative h-full">
          <div className="flex flex-col gap-4 items-center ">
            <motion.div 
              initial={{ y:5 }}
              animate={{ y:0 }}
              transition={{ type: "spring", stiffness: 100, damping:25 }}
            >
              <Heading typeHeading="h2" className="max-w-md text-center">
                {dictionary?.contactme.title}
              </Heading>
            </motion.div>

            <FormCustom labelbtn={dictionary?.contactme.labelbtn}/>
          </div>
         
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2">
            <ListCustom data={socialList} />
          </div>
        </div>
      </Container>
    </Article>
  )
}