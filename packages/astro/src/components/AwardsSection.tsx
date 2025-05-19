import React from 'react';
import { awards } from '@/data';
import { Trophy } from 'lucide-react';
import MotionWrapper from './MotionWrapper';
import { GlassCard } from './ui/glass-card';
import { motion } from 'framer-motion';

export default function AwardsSection() {
  return (
    <section id="awards" className="py-12 bg-gradient-to-b from-background to-muted/10">
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left">🏆 Awards</h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {awards.map((award, index) => (
            <MotionWrapper key={award.name + award.date} delay={index * 0.1}>
              <GlassCard className="p-4 dark:border-yellow-500/10 hover:border-yellow-500/30 transition-all duration-300 flex flex-col h-full">
                <div className="flex items-center mb-2">
                  <motion.div
                    whileHover={{ rotate: 20 }}
                    transition={{ type: 'spring', stiffness: 500 }}
                    className="flex items-center justify-center bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full p-1.5 mr-2"
                  >
                    <Trophy className="h-4 w-4 text-white" />
                  </motion.div>
                  <h3 className="font-medium">{award.name}</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-1 pl-8">🏢 {`${award.issuer} (${award.date})`}</p>
                <div className="space-y-2 mt-auto">
                  <div className="text-center wr">
                    {award.position && (
                      <motion.span
                        className="inline-block mt-1.5 mb-1.5 mr-2 text-center text-sm px-2.5 py-1 bg-yellow-500/10 rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        {award.position}
                      </motion.span>
                    )}
                    {award.type && (
                      <motion.span
                        className="inline-block mt-1.5 mb-1.5 text-center text-sm px-2.5 py-1 bg-yellow-500/10 rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        {award.type}
                      </motion.span>
                    )}
                  </div>
                </div>
              </GlassCard>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
