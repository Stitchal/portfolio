import { Avatar, Chip, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { OpenInFullRounded } from "@mui/icons-material";

const ProjectCard = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="project-card p-6 duration-200  bg-card-color rounded-2xl min-h-[400px]  shadow-md shadow-gray-900 flex flex-col">
        <div style={{ position: "relative" }}>
          <img
            src={props.src}
            alt={props.src + " card"}
            className="rounded-lg cursor-pointer duration-200 object-contain"
            onClick={handleOpen}
          />
          <Tooltip title="Afficher l'image en grand" placement="top">
            <IconButton
              style={{ position: "absolute", right: 0, top: 0 }}
              onClick={handleOpen}
            >
              <OpenInFullRounded
                sx={{
                  fontSize: "2rem",
                  background: "rgba(31, 42, 58, 0.5)",
                  color: "#FFFFFF",
                  borderRadius: "50%",
                  padding: "4px",
                  transition: "transform .2s",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
              />
            </IconButton>
          </Tooltip>
        </div>

        <div className="pt-2 flex flex-col justify-between flex-grow">
          <div>
            <div className="flex flex-row align-center gap-2">
              <h1 className="text-2xl font-bold text-custom-white">
                {props.title}
              </h1>

              {props.link && (
                <a
                  href={props.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center cursor-pointer duration-200"
                >
                  <span className="c-blue-500 hover:scale-110 duration-200 hover:text-blue-500 text-custom-white cursor-pointer">
                    <FiExternalLink size={25} />
                  </span>
                </a>
              )}
            </div>
            <h2 className="text-l font-medium text-gray-400">{props.date}</h2>
            <p className="text-gray-300">{props.description}</p>
          </div>
          <div className="flex gap-1 flex-wrap pt-4 justify-end">
            {props.langages &&
              props.langages.map(({ langage, icon }, index) => (
                <Chip
                  key={index}
                  label={langage}
                  avatar={<Avatar src={icon} sx={{ padding: "2px" }} />}
                  sx={{ color: "white", backgroundColor: "#172D4E" }}
                />
              ))}
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center"
      >
        <img
          src={props.src}
          alt={props.src + " card"}
          className="rounded-lg lg:w-3/4 object-contain mx-auto"
        />
      </Modal>
    </>
  );
};

export default ProjectCard;
