'use client';
import { useState } from 'react';
import { Avatar, Chip, IconButton, Tooltip } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { FiExternalLink } from 'react-icons/fi';
import Modal from '@mui/material/Modal';
import { OpenInFullRounded } from '@mui/icons-material';
import { Project } from '../types';

type ProjectCardProps = Omit<Project, 'id'>;

export default function ProjectCard({ title, date, description, src, link, langages }: ProjectCardProps): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="project-card p-6 duration-200 bg-card-color rounded-2xl min-h-[400px] shadow-md shadow-gray-900 flex flex-col">
        <div style={{ position: 'relative' }}>
          <img
            src={src}
            alt={title}
            className="rounded-lg cursor-pointer duration-200 object-contain w-full"
            onClick={() => setOpen(true)}
          />
          <Tooltip title="Afficher l'image en grand" placement="top">
            <IconButton
              sx={{
                position: 'absolute', right: 0, top: 0, padding: '4px',
                transition: 'transform .2s', '&:hover': { transform: 'scale(1.2)' },
              }}
              onClick={() => setOpen(true)}
            >
              <OpenInFullRounded sx={{ fontSize: '2rem', background: 'rgba(31,42,58,0.5)', color: '#FFF', padding: '4px', borderRadius: '50%' }} />
            </IconButton>
          </Tooltip>
        </div>
        <div className="pt-2 flex flex-col justify-between flex-grow">
          <div>
            <div className="flex flex-row align-center gap-2">
              <h1 className="text-2xl font-bold text-custom-white">{title}</h1>
              {link && (
                <a href={link} target="_blank" rel="noreferrer" className="flex items-center cursor-pointer duration-200">
                  <span className="hover:scale-110 duration-200 hover:text-blue-500 text-custom-white">
                    <FiExternalLink size={25} />
                  </span>
                </a>
              )}
            </div>
            <h2 className="text-l font-medium text-gray-400">{date}</h2>
            <p className="text-gray-300">{description}</p>
          </div>
          <div className="flex gap-1 flex-wrap pt-4 justify-end">
            {langages.map(({ langage, icon }, index) => (
              <Chip
                key={index}
                label={langage}
                avatar={<Avatar src={icon} sx={{ padding: '2px' }} />}
                sx={{ color: 'white', backgroundColor: '#172D4E' }}
              />
            ))}
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className="flex justify-center items-center"
      >
        <div className="lg:w-3/4 mx-auto object-contain relative">
          <img src={src} alt={title} className="w-full lg:rounded-lg object-contain mx-auto" />
          <Tooltip title="Fermer" placement="top">
            <IconButton
              sx={{
                position: 'absolute', top: 0, right: 0,
                padding: '4px', transition: 'transform .2s',
                '&:hover': { transform: 'scale(1.2)' },
              }}
              onClick={() => setOpen(false)}
            >
              <CloseIcon sx={{ fontSize: '2rem', background: 'rgba(31,42,58,0.5)', color: '#FFF', padding: '4px', borderRadius: '50%' }} />
            </IconButton>
          </Tooltip>
        </div>
      </Modal>
    </>
  );
}
