import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Conseling = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const [state, handleSubmit] = useForm("mrgnzzkl");
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    state.data.select = selectedValue;
  };

  if (state.succeeded) {
    return navigate("/thanks");
  }

  return (
    <div className="d-flex justify-content-center align-items-center  flex-row">
      <div class="py-12 conseling ">
        <motion.div
          variants={fadeIn("up", 1.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          class="text-2xl font-bold title "
        >
          CONSELING
        </motion.div>
        <div class="mt-8 conseling-form ">
          <form
            action="https://formspree.io/f/mrgnzzkl"
            onSubmit={handleSubmit}
          >
            <div
              class="grid grid-cols-1 align-items-center d-flex flex-column "
              style={{ width: "400px" }}
            >
              <motion.label
                variants={fadeIn("left", 1.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.9 }}
                class="block d-flex flex-column"
              >
                <span class="text-black">Nama Lengkap</span>
                <input
                  type="text"
                  id="name"
                  name="nama"
                  class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  style={{ width: "300px" }}
                  placeholder=""
                  value={user?.displayName}
                />
              </motion.label>
              <fieldset>
                <motion.label
                  variants={fadeIn("right", 1.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.9 }}
                  class="block d-flex flex-column"
                >
                  <span class="text-black">Email</span>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    style={{ width: "300px" }}
                    placeholder=""
                    value={user?.email}
                  />
                </motion.label>
              </fieldset>
              <motion.label
                variants={fadeIn("left", 1.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.9 }}
                class="block d-flex flex-column"
              >
                <span class="text-black">Apa Jenis Masalahmu?</span>
                <select
                  id="masalah"
                  name="Permasalahan"
                  class="block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  style={{ width: "300px" }}
                  onChange={handleSelectChange}
                >
                  <option>Insomnia</option>
                  <option>Depression</option>
                  <option>Anxiety</option>
                  <option>Other</option>
                </select>
              </motion.label>
              <motion.label
                variants={fadeIn("right", 1.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.9 }}
                class="block d-flex flex-column"
              >
                <span class="text-black">Ceritakan Masalahmu</span>
                <textarea
                  id="text"
                  name="message"
                  class="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                  style={{ width: "300px" }}
                  rows="3"
                ></textarea>
              </motion.label>
              <div class="block">
                <div class="mt-2">
                  <div>
                    <br />
                    <br />
                    <motion.div
                      variants={fadeIn("up", 1.2)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.9 }}
                      className="d-flex flex-row justify-content-between align-items-center"
                      style={{ width: "300px" }}
                    >
                      <Button
                        className="w-30"
                        onClick={() => navigate("/home")}
                      >
                        <span>Back</span>
                      </Button>
                      <Button
                        className="w-30"
                        type="submit"
                        disabled={state.submitting}
                      >
                        <span>Send</span>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Conseling;
