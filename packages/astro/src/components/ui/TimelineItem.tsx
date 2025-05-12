import React from 'react';
import { cn } from '@/lib/utils';
import { motion, type MotionProps } from 'framer-motion';

interface TimelineItemProps extends MotionProps {
  title: string;
  titleHref?: string;
  subtitle: string;
  subtitleHref?: string;
  location: string;
  locationHref?: string;
  date: string;
  isLast?: boolean;
  index?: number;
}

export default function TimelineItem({
  title,
  titleHref,
  subtitle,
  subtitleHref,
  location,
  locationHref,
  date,
  isLast = false,
  index = 0,
  children,
}: TimelineItemProps) {
  return (
    <motion.div
      className="relative flex gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <div className="flex flex-col items-center">
        <motion.div
          className="flex h-[18px] w-[18px] rounded-full border border-purple-500/50 bg-background dark:bg-muted z-10"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 15,
            delay: index * 0.2 + 0.2,
          }}
          viewport={{ once: true, margin: '-50px' }}
        />
        {!isLast && (
          <motion.div
            className="w-px grow bg-gradient-to-b from-purple-500/50 to-pink-500/30 dark:from-purple-500/30 dark:to-pink-500/10"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
            viewport={{ once: true, margin: '-50px' }}
          />
        )}
      </div>
      <div className={cn('pb-8', isLast ? 'pb-0' : '')}>
        <motion.div
          className="flex flex-col gap-0.5"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.1 }}
          viewport={{ once: true, margin: '-50px' }}
        >
          <h3 className="font-extrabold mb-2 text-xl">{`📅 ${date}`}</h3>
          <div className="pl-3 mb-6">
            {titleHref != null && titleHref != '' ? (
              <a href={titleHref} target="_blank" rel="noreferrer">
                <h3 className="font-medium">{title}</h3>
              </a>
            ) : (
              <h3 className="font-medium">{title}</h3>
            )}
            {subtitleHref != null && subtitleHref != '' ? (
              <a href={subtitleHref} target="_blank" rel="noreferrer">
                <p className="text-sm text-muted-foreground">{subtitle}</p>
              </a>
            ) : (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            )}
            {locationHref != null && locationHref != '' ? (
              <a href={locationHref} target="_blank" rel="noreferrer">
                <p className="text-sm text-muted-foreground">📍 {location}</p>
              </a>
            ) : (
              <p className="text-sm text-muted-foreground">📍 {location}</p>
            )}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
              viewport={{ once: true, margin: '-50px' }}
            >
              {children}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
