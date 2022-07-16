import { InformationStyled } from "./styled";
import { motion, AnimatePresence } from "framer-motion";


const Informations = () => {

  return (
    <InformationStyled>
      <div className="container">
        
        <div className="main-information">
          <div className="left">
            <motion.div
              className="vertical-line"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }} />
          </div>
          <div className="right">
            <div className="top-right">
              <motion.span
                className="top-right-text"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}>
                mobiliário
              </motion.span>
              <motion.div
                className="horizontal-line"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }} />
            </div>
            <div className="bottom-right">
              <motion.span
                className="bottom-right-text-principal"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}>
                INDUSTRIAL PREMIUM
              </motion.span>
              <motion.span
                className="bottom-right-text"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}>
                localizada em um dos maiores polos moveleiros do país!
              </motion.span>
            </div>
          </div>
        </div>
      </div>
    </InformationStyled>
  )
}

export default Informations;